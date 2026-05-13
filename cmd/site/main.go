package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("/static/", cacheStatic(http.StripPrefix("/static/", http.FileServer(http.Dir("static")))))
	mux.Handle("/screenshots/", cacheStatic(http.StripPrefix("/screenshots/", http.FileServer(http.Dir("static/site/screenshots")))))
	mux.Handle("/uploads/", cacheStatic(http.StripPrefix("/uploads/", http.FileServer(http.Dir("static/site/uploads")))))

	pages := map[string]string{
		"/":                "Homepage.html",
		"/Homepage.html":   "Homepage.html",
		"/home":            "Homepage.html",
		"/platform":        "Platform.html",
		"/Platform.html":   "Platform.html",
		"/pricing":         "Pricing.html",
		"/Pricing.html":    "Pricing.html",
		"/apis":            "APIs.html",
		"/APIs.html":       "APIs.html",
		"/compliance":      "Compliance.html",
		"/Compliance.html": "Compliance.html",
		"/prism":           "Prism.html",
		"/Prism.html":      "Prism.html",
	}

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if page, ok := pages[r.URL.Path]; ok {
			serveMockPage(w, r, page)
			return
		}
		http.NotFound(w, r)
	})
	mux.HandleFunc("/overview", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprint(w, `<div class="rounded-xl border border-obsrvr-teal/20 bg-obsrvr-teal/10 p-4 text-sm text-obsrvr-ink"><strong>Overview requested.</strong> We’ll send the compliance product brief and a sample lineage export.</div>`)
	})
	mux.HandleFunc("/contact", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		time.Sleep(150 * time.Millisecond)
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprint(w, `<div class="rounded-xl border border-obsrvr-teal/20 bg-white p-5 shadow-sm"><h3 class="text-lg font-semibold text-obsrvr-ink">Thanks — demo request received.</h3><p class="mt-2 text-sm text-obsrvr-muted">We’ll follow up with times for a 30-minute walkthrough.</p></div>`)
	})

	addr := ":8080"
	if v := os.Getenv("ADDR"); v != "" {
		addr = v
	}
	log.Printf("obsrvr site listening on http://localhost%s", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}

func cacheStatic(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		switch {
		case strings.HasPrefix(path, "/static/site/dist/"):
			w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		case strings.HasPrefix(path, "/static/site/") || strings.HasPrefix(path, "/screenshots/") || strings.HasPrefix(path, "/uploads/"):
			w.Header().Set("Cache-Control", "public, max-age=3600")
		}
		next.ServeHTTP(w, r)
	})
}

func serveMockPage(w http.ResponseWriter, r *http.Request, page string) {
	path := filepath.Join("static", "site", page)
	html, err := os.ReadFile(path)
	if err != nil {
		http.NotFound(w, r)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	_, _ = w.Write(html)
}
