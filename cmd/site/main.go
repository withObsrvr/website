package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
    "time"

    "github.com/withobsrvr/website/internal/views"
)

func main() {
    mux := http.NewServeMux()
    mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        if r.URL.Path != "/" {
            http.NotFound(w, r)
            return
        }
        views.Home().Render(r.Context(), w)
    })
    mux.HandleFunc("/compliance", func(w http.ResponseWriter, r *http.Request) {
        views.Compliance().Render(r.Context(), w)
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
    if v := os.Getenv("ADDR"); v != "" { addr = v }
    log.Printf("obsrvr site listening on http://localhost%s", addr)
    log.Fatal(http.ListenAndServe(addr, mux))
}
