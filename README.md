# Obsrvr website

Go + templ + Tailwind CSS + htmx implementation of the latest Obsrvr compliance site design from `ai-docs/site/Compliance.html`.

## NixOS development

```bash
nix develop
make run
```

Open <http://localhost:8080> or <http://localhost:8080/compliance>.

For live development, run these in separate terminals inside `nix develop`:

```bash
templ generate --watch
tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --watch
air -c .air.toml
```

## Stack

- `cmd/site`: Go HTTP server and htmx endpoints
- `internal/views`: templ components
- `static/css/input.css`: Tailwind entrypoint and small component layer
- `flake.nix`: Nix dev shell with Go, templ, Tailwind, and air
