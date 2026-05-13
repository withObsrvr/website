import esbuild from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pages = {
  home: ['tweaks-panel.jsx', 'app.jsx'],
  platform: ['shared.jsx', 'platform.jsx'],
  pricing: ['shared.jsx', 'pricing.jsx'],
  apis: ['shared.jsx', 'apis.jsx'],
  compliance: ['shared.jsx', 'compliance.jsx'],
  prism: ['shared.jsx', 'prism.jsx'],
};

const entryDir = path.join('tmp', 'site-entries');
await mkdir(entryDir, { recursive: true });
await mkdir(path.join('static', 'site', 'dist'), { recursive: true });
await mkdir(path.join('static', 'site', 'assets'), { recursive: true });

for (const [name, files] of Object.entries(pages)) {
  const entryPath = path.join(entryDir, `${name}.jsx`);
  const imports = files.map((file) => `import '../../src/site/${file}';`).join('\n');
  await writeFile(entryPath, `${imports}\n`);
}

await esbuild.build({
  entryPoints: Object.keys(pages).map((name) => path.join(entryDir, `${name}.jsx`)),
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: path.join('static', 'site', 'dist'),
  entryNames: '[name]',
  format: 'iife',
  target: ['es2020'],
  jsx: 'transform',
  inject: [path.join('src', 'site', 'react-inject.js')],
  legalComments: 'none',
});
