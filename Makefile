.PHONY: dev site-js build run visual-diff

site-js:
	npm run site:build

build: site-js
	go build ./cmd/site

run: site-js
	go run ./cmd/site

visual-diff: site-js
	npm run visual:diff

dev:
	@echo "Run these in separate terminals:"
	@echo "  npm run site:build"
	@echo "  air -c .air.toml"
