# Dianame Altalim, portfolio

A receipt that prints out of a till printer. Astro + GSAP + Lenis, static output.

## Edit content
Everything you read on the site lives in `src/data/site.ts`. Change it there, not in the pages.

Before going live:
- `site.url` in `src/data/site.ts`, `site` in `astro.config.mjs` and the Sitemap line in `public/robots.txt`: set to your real domain.
- `site.github`: add your GitHub URL to show the link.
- Your photo: put it at `public/images/portrait.jpg` (portrait shape, about 1200 x 1500 px) and set
  `portrait.src` to `'/images/portrait.jpg'` in `src/data/site.ts`. It appears on the home and About pages.
- Re-make the share image after changing the hero: build, serve, then run the skill's `og.mjs`.

## Run
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview
```

## Deploy
Any static host works with `dist/`: Vercel (`npx vercel --prod`), Netlify (`npx netlify deploy --prod --dir dist`),
Cloudflare Pages (`npx wrangler pages deploy dist`) or GitHub Pages.

Design notes and decisions: `DESIGN.md`.

## Adding the POS demo video

In `src/data/site.ts`, find `demo:` under the retail point of sale project and set `src` to either:
- a file you put in `public/videos/` (for example `'/videos/pos-demo.mp4'`), or
- a YouTube or Vimeo link (for example `'https://www.youtube.com/watch?v=...'`).

Optionally set `poster` to a still image, and edit `caption` so it describes what the video shows.
Until `src` is set, the page shows a "Demo video coming soon" frame.
