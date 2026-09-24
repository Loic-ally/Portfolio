# Loïc Philippe — Portfolio

**English** · [Français](README.fr.md)

[![Deploy to GitHub Pages](https://github.com/Loic-ally/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Loic-ally/Portfolio/actions/workflows/deploy.yml)

Personal portfolio of Loïc Philippe, full-stack developer and student at EPITECH Mulhouse.
It is a single page, in French, that presents my projects, tech stack, experience and
education, with a downloadable CV.

**Live site:** https://loic-ally.github.io/Portfolio/

## Features

- Minimal editorial design with hand-drawn SVG geometry (hero, section dividers, project visuals)
- Light and dark mode
- Light motion effects (split-text intro, scroll progress, tilt, fade-in on scroll), turned off
  when the visitor's system asks for reduced motion
- Accessibility basics: skip link, `main` landmark, labelled navigation, visible keyboard focus
- Legal notice and privacy policy pages as required by French law (LCEN, GDPR)
- Privacy by design: no cookies, no analytics, no browser storage, and no third-party
  requests (fonts are self-hosted)
- Content Security Policy that only allows the site's own resources

## Tech stack

| Area      | Tools                                                                  |
| --------- | ---------------------------------------------------------------------- |
| UI        | [React 18](https://react.dev)                                          |
| Build     | [Vite 5](https://vite.dev), multi-page (portfolio + 2 legal pages)     |
| Styling   | Plain CSS with custom properties, no framework                         |
| Graphics  | Inline SVG written by hand                                             |
| Fonts     | Fraunces, Inter, JetBrains Mono, self-hosted with [Fontsource](https://fontsource.org) |
| Hosting   | GitHub Pages, deployed with GitHub Actions                             |

## Project structure

```
.
├── .github/workflows/deploy.yml  # Build + deploy to GitHub Pages
├── public/                       # Copied as-is: CV.pdf, favicon.svg
├── src/
│   ├── main.jsx                  # Portfolio entry point
│   ├── App.jsx                   # Page layout, hero and contact sections
│   ├── sections.jsx              # Nav, about, projects, stack, experience, education, footer
│   ├── geometry.jsx              # SVG compositions
│   ├── effects.jsx               # Animations and micro-interactions
│   ├── tweaks-panel.jsx          # Design tweaks panel (opens only inside a design tool)
│   ├── legal.jsx                 # Legal notice and privacy policy content
│   ├── legal-main.jsx            # Legal pages entry point
│   └── portfolio.css             # All styles and font imports
├── index.html                    # Portfolio
├── mentions-legales.html         # Legal notice
├── confidentialite.html          # Privacy policy
└── vite.config.js                # Vite config: pages, relative base, CSP
```

## Run it locally

Requirements: [Node.js](https://nodejs.org) 18 or later (22 recommended, same as CI, see
`.nvmrc`) and npm.

```bash
git clone https://github.com/Loic-ally/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Then open http://localhost:5173.

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                      |
| `npm run build`   | Build the production site into `dist/`                    |
| `npm run preview` | Serve `dist/` locally to check the production build       |

The legal pages are at `/mentions-legales.html` and `/confidentialite.html`.
The Content Security Policy is only added to production builds: check it with
`npm run build && npm run preview`.

## Deployment (GitHub Pages)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and deploys it
on every push to `main`. It builds pull requests too, without deploying, so a broken build is
caught before merging. You can also start it by hand from the **Actions** tab.

### One-time setup

1. In the repository, go to **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.
2. Push to `main`, or run the workflow by hand. The site URL shows in the workflow run
   summary and in **Settings → Pages**.

Vite's `base` is set to `./` (relative paths), so the same build works both at
`https://loic-ally.github.io/Portfolio/` and on a custom domain.

### Custom domain (optional)

To serve the site at `loic-philippe.fr`:

1. In **Settings → Pages → Custom domain**, enter `loic-philippe.fr` and save. A `CNAME` file
   isn't needed when deploying with Actions.
2. At your domain registrar, create these DNS records:
   - `A` records for the apex (`@`): `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for the apex (IPv6): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - A `CNAME` record for `www` pointing to `loic-ally.github.io`
3. Once the DNS check passes, tick **Enforce HTTPS**.
4. Recommended: verify the domain in your GitHub account settings (**Settings → Pages →
   Add a domain**) so no one else can use it on GitHub Pages.

## Legal and privacy

French law requires a website to identify its publisher and host (LCEN, article 1-1) and to
tell visitors how their personal data is used (GDPR). The site ships with:

- a **legal notice** page (`mentions-legales.html`): publisher, publication director, host,
  intellectual property, links, liability, applicable law, credits;
- a **privacy policy** page (`confidentialite.html`): data controller, data processed, legal
  basis, retention, transfers outside the EU, cookies, your rights, how to complain to the CNIL;
- links to both in the footer of every page.

The site sets no cookies, uses no browser storage and loads nothing from third parties, so it
doesn't need a cookie consent banner.

**Keep these pages accurate.** Update `src/legal.jsx` and its `LAST_UPDATE` date if you:

- change hosting provider (update the host section);
- add analytics, embedded videos, a contact form or any third-party service (update the
  privacy policy; you may also need a consent banner);
- start using the site for business, for example as a micro-entrepreneur (you must then add
  your SIRET number and business address).

## License

© Loïc Philippe. All rights reserved. The content (texts, visuals, CV) and the source code
are not under an open-source license. Fonts are under the SIL Open Font License 1.1.
