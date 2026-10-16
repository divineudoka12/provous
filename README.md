# Provous site

The public landing page and documentation site for Provous, built with Next.js, TypeScript, Tailwind CSS, and Fumadocs MDX.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The docs live at `/docs`; Fumadocs provides the sidebar, table of contents, theme toggle, and local search.

## Project structure

- `app/page.tsx` and `app/globals.css` — responsive landing page and visual system.
- `content/docs/` — the eight MDX documentation pages.
- `app/docs/` — Fumadocs layout and static page routing.
- `app/api/search/route.ts` — local docs search endpoint.

Add or edit documentation in `content/docs/`. The page order is set by `content/docs/meta.json`.

## Verify a production build

```bash
npm run typecheck
npm run build
npm run start
```

## Before publishing

The design and explanatory copy can be reviewed now. Installation commands, operating-system support, quickstart steps, terminal recordings, command reference, privacy guarantees, repository URL, and license still need confirmation from the working CLI and project owner. The site labels these items instead of presenting invented examples as working behavior.

No analytics or visitor-tracking scripts are included.
