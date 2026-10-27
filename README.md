# youcef-benmohammed.github.io

Source of my portfolio: **https://youcef-benmohammed.github.io/**

Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Structure

```
src/
├── content/work/   # one Markdown file per project page
├── pages/          # home, projects, about
└── components/     # layout and UI components
public/
├── assets/         # images
└── cv/             # CV (PDF)
```

To add a project, create a Markdown file in `src/content/work/` (fields defined in `src/content/config.ts`).
