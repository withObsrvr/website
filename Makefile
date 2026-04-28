.PHONY: dev generate css build run

generate:
	templ generate

css:
	tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --minify

build: generate css
	go build ./cmd/site

run: generate css
	go run ./cmd/site

dev:
	@echo "Run these in separate terminals:"
	@echo "  templ generate --watch"
	@echo "  tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --watch"
	@echo "  air -c .air.toml"
