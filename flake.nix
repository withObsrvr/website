{
  description = "Obsrvr website development shell (Go + templ + Tailwind + htmx)";

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
            templ
            nodejs_22
            tailwindcss
            air
          ];

          shellHook = ''
            echo "Obsrvr website dev shell"
            echo "  templ generate"
            echo "  tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --watch"
            echo "  go run ./cmd/site"
          '';
        };
      });
}
