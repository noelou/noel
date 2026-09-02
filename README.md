# Noelou Jan Nagac — Resume Site

A single-page personal resume site. Built with **Vue 3 + Vite**. Design inspired
by [joshwcomeau.com](https://www.joshwcomeau.com/): soft neutrals, a playful
emerald→green→lime gradient, springy micro-interactions, serif display type, and a
light/dark theme toggle.

## Run it

```bash
npm install      # first time only
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/resume.js` | **All content.** Edit here — profile, experience, projects, skills. The UI is driven entirely by this file. |
| `src/style.css` | Global design tokens (colours, fonts, spacing, motion) + shared utilities. Theme palettes are the `:root` and `[data-theme='dark']` blocks. |
| `src/App.vue` | Page shell — nav, section order, footer. |
| `src/components/` | One component per section (`HeroSection`, `AboutSection`, …) plus `SiteNav`, `ThemeToggle`, `SiteFooter`. |
| `src/composables/useTheme.js` | Reactive light/dark theme, persisted to `localStorage`. |
| `src/directives/reveal.js` | `v-reveal` — fade/slide elements in on scroll. `v-reveal="120"` adds a 120ms delay. Respects `prefers-reduced-motion`. |
| `index.html` | Meta tags + an inline script that sets the theme before first paint (no flash). |

## Deploy

Static output, so any static host works. The repo includes `netlify.toml`
(build: `npm run build`, publish: `dist`). For Vercel/Cloudflare Pages use the
same two settings.

## Accessibility notes

- Skip link, semantic landmarks, focus-visible outlines throughout.
- Colour palette meets WCAG AA contrast in both themes.
- All motion is disabled under `prefers-reduced-motion`.
