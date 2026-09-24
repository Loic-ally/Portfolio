import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const page = (file) => fileURLToPath(new URL(file, import.meta.url));

// Content Security Policy: only the site's own resources are allowed.
// GitHub Pages can't send custom HTTP headers, so it ships as a <meta> tag,
// injected at build time only (the dev server relies on inline scripts).
// 'unsafe-inline' styles: the tweaks panel injects a <style> element.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

const cspMeta = () => ({
  name: "csp-meta",
  apply: "build",
  transformIndexHtml: () => [
    {
      tag: "meta",
      attrs: { "http-equiv": "Content-Security-Policy", content: CSP },
      injectTo: "head-prepend",
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), cspMeta()],
  build: {
    rollupOptions: {
      input: {
        main: page("./index.html"),
        mentions: page("./mentions-legales.html"),
        confidentialite: page("./confidentialite.html"),
      },
    },
  },
  preview: {
    allowedHosts: ['loic-philippe.fr']
  }
});
