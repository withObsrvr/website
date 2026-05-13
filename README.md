# Obsrvr website

Mock-matched Obsrvr marketing site served by a small Go HTTP server. The visual source of truth is `ai-docs/site`; production assets live in `static/site`, with React JSX sources in `src/site` bundled by esbuild.

## Development

```bash
nix develop
npm install
make run
```

Open <http://localhost:8080>.

Main routes:

- `/`
- `/platform`
- `/pricing`
- `/apis`
- `/compliance`
- `/prism`

## Commands

```bash
npm run site:build   # bundle src/site JSX into static/site/dist
make run             # build JS bundles and run the Go server
make build           # build JS bundles and compile the Go server
make visual-diff     # screenshot-compare app routes against ai-docs/site mocks
```

For live reload with Air:

```bash
air -c .air.toml
```

## Visual diffing

`make visual-diff` starts the Go app and a local static server for `ai-docs/site`, captures screenshots with Playwright/Chromium, and writes artifacts to:

```text
tmp/visual-diff/
  mock/
  app/
  diff/
```

Useful environment variables:

```bash
CHROMIUM_PATH=/run/current-system/sw/bin/chromium
MAX_DIFF_RATIO=0.01
PIXEL_THRESHOLD=0.1
VISUAL_DIFF_DIR=tmp/visual-diff
APP_URL=http://localhost:8080   # use an already-running app instead of spawning go run
```

## Stack

- `cmd/site`: Go HTTP server, route map, static caching, lightweight htmx endpoints
- `src/site`: React JSX sources copied from the mocks and updated for production routes
- `src/site/content`: JSON content/config inspired by Ghostty's maintainable site structure; update nav, footer, and homepage copy here first
- `static/site`: production HTML/CSS/assets and generated JS bundles
- `scripts/build-site.mjs`: esbuild bundler for page-specific JS
- `scripts/visual-diff.mjs`: Playwright screenshot diff tool
- `ai-docs/site`: original mock/reference files
