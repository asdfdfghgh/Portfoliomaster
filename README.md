# Subhra Jyoti Mishra — Research Portfolio

A responsive research portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn-style UI components. Use Node.js 20.9 or newer.

## Run locally

Open this folder in VS Code, open **Terminal → New Terminal**, then run:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser. Stop the local server with `Ctrl+C` in the terminal.

## Curated public files

- `public/images/` contains your selected profile portrait, original project figures, certificate preview, and five generated WebP project covers. Each generated cover is labelled illustrative; project detail pages show the real supplied figures and relevant materials.
- `public/materials/` contains selected project and award materials: thesis, Chanakya and Agnirva certificates, ICICBDA presentation certificate, Wolfram Summer School selection letter, KNN poster, and the DermaTrack team proposal deck.
- CV PDFs, cover letters, degree and offer records, raw datasets, unrelated personal photographs, and duplicate source files are not hosted.
- The supplied Desktop/Myweb originals were left untouched.

## Structure

- `app/page.tsx` contains the home page and curated portfolio sections.
- `app/projects/[slug]/page.tsx` renders the individual project pages.
- `lib/projects.ts` contains project text, visuals, and related links.
- `components/ui/visual-study-canvas.tsx` provides the lightweight particle-flow and black-hole backgrounds placed behind the existing Research, Projects, and Contact sections.
- `components/ui/spline-scene.tsx` loads the supplied interactive 3D Spline scene next to your portrait in the opening hero.
- `components/ui/` contains the reusable UI components, including Spotlight and Card.
- `app/globals.css` includes global styles, keyboard focus, and reduced-motion support.

## Performance and accessibility

- Project routes are statically generated from the project list.
- The profile image is prioritized; project images use responsive `next/image` sizing.
- Visual effects use a small canvas particle budget, pause when out of view, and stay static when reduced motion is requested.
- The Spline component loads lazily. The canvas backgrounds pause outside the viewport and remain still when reduced motion is requested.
- Semantic landmarks, keyboard focus styles, and reduced-motion behavior are included.
- Historical forecasting results, proposal-stage work, and schematic illustrations are labeled with their limits in context.

## Content notes

Content was curated from the supplied AIML and Research CVs, certificate scans, thesis materials, proposal presentation, poster, publication assets, the public forecasting repository, and publicly indexed LinkedIn details. The CVs were reviewed as source material but are not part of the website. The up-to-70% irrigation saving is labelled as a reported potential outcome from the LinkedIn post and CV. The forecasting page explains that it uses a historical backtest and is not a live-connected operational service. DermaTrack is presented as a proposal, not a finished or clinically validated product.

Personal and publication links are in `app/page.tsx` and `lib/projects.ts`.

## Make the site public

The easiest option for this Next.js project is Vercel:

1. Create a GitHub repository and push this project folder to it.
2. In Vercel, choose **Add New → Project**, import the repository, and set the Root Directory to `outputs/personal-site` if you uploaded the parent folder.
3. Keep the detected Next.js build settings and select **Deploy**. Vercel provides a public URL; later pushes to the connected Git branch deploy updates automatically.
4. If you add a custom domain, set `NEXT_PUBLIC_SITE_URL` in the Vercel project’s Environment Variables to that complete URL.

Your LinkedIn profile currently links to an existing GitHub Pages portfolio. This project is separate; deploying it to Vercel will create a new public URL and will not replace that existing page automatically.
