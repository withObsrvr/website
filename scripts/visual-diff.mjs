import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const appPort = Number(process.env.APP_PORT || 8098);
const mockPort = Number(process.env.MOCK_PORT || 4174);
const appBase = process.env.APP_URL || `http://127.0.0.1:${appPort}`;
const mockBase = process.env.MOCK_URL || `http://127.0.0.1:${mockPort}`;
const mockRoot = resolve(process.env.MOCK_ROOT || 'ai-docs/site');
const outDir = resolve(process.env.VISUAL_DIFF_DIR || 'tmp/visual-diff');
const threshold = Number(process.env.PIXEL_THRESHOLD || 0.1);
const maxDiffRatio = Number(process.env.MAX_DIFF_RATIO || 0.01);
const chromiumPath = process.env.CHROMIUM_PATH || '/run/current-system/sw/bin/chromium';

const pages = [
  ['home', '/', '/Homepage.html'],
  ['platform', '/platform', '/Platform.html'],
  ['pricing', '/pricing', '/Pricing.html'],
  ['apis', '/apis', '/APIs.html'],
  ['compliance', '/compliance', '/Compliance.html'],
  ['prism', '/prism', '/Prism.html'],
];

const viewports = [
  ['desktop', 1440, 1200],
  ['tablet', 1024, 1200],
  ['mobile', 390, 1200],
];

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jsx': 'text/babel; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.md': 'text/markdown; charset=utf-8',
};

function startStaticServer(root, port) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', `http://127.0.0.1:${port}`);
      let pathname = decodeURIComponent(url.pathname);
      if (pathname === '/') pathname = '/Homepage.html';
      const file = normalize(join(root, pathname));
      if (!file.startsWith(root)) {
        res.writeHead(403);
        res.end('forbidden');
        return;
      }
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream');
      createReadStream(file).on('error', () => {
        res.writeHead(404);
        res.end('not found');
      }).pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolveStart) => server.listen(port, '127.0.0.1', () => resolveStart(server)));
}

function startAppServer() {
  if (process.env.APP_URL) return null;
  const child = spawn('go', ['run', './cmd/site'], {
    detached: true,
    env: { ...process.env, ADDR: `:${appPort}` },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stdout.on('data', (data) => process.stdout.write(`[app] ${data}`));
  child.stderr.on('data', (data) => process.stderr.write(`[app] ${data}`));
  return child;
}

async function waitForHTTP(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function capture(browser, url, viewport, outputPath) {
  const page = await browser.newPage({ viewport: { width: viewport[1], height: viewport[2] }, deviceScaleFactor: 1 });
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.error(`[browser:${url}] ${msg.text()}`);
  });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('#root > *', { timeout: 60000 }).catch(() => {});
  await page.addStyleTag({ content: `*, *::before, *::after { animation-duration: 0s !important; animation-delay: 0s !important; transition-duration: 0s !important; scroll-behavior: auto !important; }` });
  await page.screenshot({ path: outputPath, fullPage: true, animations: 'disabled' });
  await page.close();
}

function padPng(src, width, height) {
  if (src.width === width && src.height === height) return src;
  const out = new PNG({ width, height, fill: true });
  // White background so added area is visible and deterministic.
  for (let i = 0; i < out.data.length; i += 4) {
    out.data[i] = 255; out.data[i + 1] = 255; out.data[i + 2] = 255; out.data[i + 3] = 255;
  }
  PNG.bitblt(src, out, 0, 0, src.width, src.height, 0, 0);
  return out;
}

async function compare(mockPath, appPath, diffPath) {
  const mock = PNG.sync.read(await readFile(mockPath));
  const app = PNG.sync.read(await readFile(appPath));
  const width = Math.max(mock.width, app.width);
  const height = Math.max(mock.height, app.height);
  const a = padPng(mock, width, height);
  const b = padPng(app, width, height);
  const diff = new PNG({ width, height });
  const pixels = pixelmatch(a.data, b.data, diff.data, width, height, { threshold });
  await writeFile(diffPath, PNG.sync.write(diff));
  return { pixels, ratio: pixels / (width * height), width, height };
}

if (!existsSync(mockRoot)) {
  console.error(`Mock root does not exist: ${mockRoot}`);
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(join(outDir, 'mock'), { recursive: true });
await mkdir(join(outDir, 'app'), { recursive: true });
await mkdir(join(outDir, 'diff'), { recursive: true });

const mockServer = await startStaticServer(mockRoot, mockPort);
const appProcess = startAppServer();

try {
  await waitForHTTP(`${mockBase}/Homepage.html`);
  await waitForHTTP(`${appBase}/`);

  const browser = await chromium.launch({
    headless: true,
    executablePath: existsSync(chromiumPath) ? chromiumPath : undefined,
    args: ['--no-sandbox', '--disable-gpu'],
  });

  let failed = false;
  for (const [vpName, width, height] of viewports) {
    const viewport = [vpName, width, height];
    for (const [name, appPath, mockPath] of pages) {
      const id = `${name}-${vpName}`;
      const mockPng = join(outDir, 'mock', `${id}.png`);
      const appPng = join(outDir, 'app', `${id}.png`);
      const diffPng = join(outDir, 'diff', `${id}.png`);
      await capture(browser, `${mockBase}${mockPath}`, viewport, mockPng);
      await capture(browser, `${appBase}${appPath}`, viewport, appPng);
      const result = await compare(mockPng, appPng, diffPng);
      const status = result.ratio <= maxDiffRatio ? 'ok' : 'FAIL';
      if (status === 'FAIL') failed = true;
      console.log(`${status} ${id}: ${(result.ratio * 100).toFixed(3)}% (${result.pixels}px, ${result.width}x${result.height})`);
    }
  }

  await browser.close();
  if (failed) {
    console.error(`Visual diffs exceeded MAX_DIFF_RATIO=${maxDiffRatio}. See ${outDir}`);
    process.exitCode = 1;
  } else {
    console.log(`Visual diffs are within threshold. Artifacts: ${outDir}`);
  }
} finally {
  await new Promise((resolveClose) => mockServer.close(resolveClose));
  if (appProcess?.pid) {
    try {
      process.kill(-appProcess.pid, 'SIGTERM');
    } catch {
      appProcess.kill('SIGTERM');
    }
  }
}
