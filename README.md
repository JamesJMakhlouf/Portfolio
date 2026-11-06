# James Makhlouf Portfolio

Personal portfolio built with React, TypeScript, and Vite. It deploys to GitHub Pages on every push to `main`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and production build
npm run lint
```

## Updating content

- All text and project data lives in `src/data/portfolio.ts`.
- Project media goes in `public/<project>/`.
- After adding media, run `node scripts/optimize-media.mjs` (requires ffmpeg). It creates the thumbnails and video posters in `public/thumbs/` that the site loads.
- To update the CV, replace `public/james-makhlouf-cv.pdf`.
