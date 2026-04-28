/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./internal/views/**/*.templ", "./internal/views/**/*_templ.go", "./cmd/**/*.go"],
  theme: {
    extend: {
      colors: {
        obsrvr: {
          ink: "#1A1A1A",
          muted: "#5C5C58",
          paper: "#FAFAF8",
          card: "#F3F1EC",
          teal: "#1F4E5F",
          coral: "#E05E2B",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
