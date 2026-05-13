{
  description = "Obsrvr website development shell (Go + React/esbuild + mock-matched static site)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            go
            gopls
            gotools
            nodejs_22
            air
            gnumake
            git
            chromium
          ];

          shellHook = ''
            export PS1="\[\033[1;36m\](obsrvr-site)\[\033[0m\] \[\033[1;32m\]\w\[\033[0m\] \[\033[1;34m\]$\[\033[0m\] "

            echo "Obsrvr website dev shell"
            echo "  npm install          # first run, installs React/esbuild from package-lock.json"
            echo "  npm run site:build   # bundle src/site JSX into static/site/dist"
            echo "  make run             # build bundles and run the Go site"
            echo "  make visual-diff     # compare live routes against ai-docs/site mocks"
            echo "  go run ./cmd/site    # run directly after npm run site:build"
          '';
        };
      });
}
