# INGLU — Next.js (TypeScript)

Production-ready migration of the INGLU marketing site from Vite + React (JS) to
**Next.js 14 (App Router) + TypeScript**, using a `src/` directory.

## Stack

- **Next.js 14** — App Router, React Server Components by default
- **TypeScript** — strict mode
- **Tailwind CSS** — same design tokens as the original app
- **next/font** — self-hosted Google Font (Inter), no CLS/render-blocking font request
- **lucide-react** / **react-icons** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build        # production build
npm run start         # run the production build
npm run lint          # eslint
npm run type-check    # tsc --noEmit
```

## Project structure

```
src/
  app/
    layout.tsx          # root layout (Navbar + Footer wrap every page), fonts, SEO metadata
    page.tsx             # home page ("/")
    not-found.tsx         # custom 404
    globals.css            # Tailwind + global styles
    about/page.tsx          # one folder per route, e.g. /about
    for-brands/page.tsx
    campus-buzz/page.tsx
    ... (one per route — see table below)
  components/             # all UI building blocks (.tsx)
  data/
    data.ts                # all static content/config, typed
```

## Routing

Every route from the original `react-router-dom` setup was ported 1:1 to the
App Router's file-based routing:

| Old route (`react-router-dom`) | New route (App Router file)     |
|---------------------------------|----------------------------------|
| `/`                              | `src/app/page.tsx`                |
| `/about`                          | `src/app/about/page.tsx`           |
| `/for-brands`                      | `src/app/for-brands/page.tsx`       |
| `/campus-buzz`                      | `src/app/campus-buzz/page.tsx`       |
| `/artists`                           | `src/app/artists/page.tsx`            |
| `/careers`                            | `src/app/careers/page.tsx`             |
| `/case-studies`                        | `src/app/case-studies/page.tsx`         |
| `/colleges`                              | `src/app/colleges/page.tsx`              |
| `/contact`                                | `src/app/contact/page.tsx`                |
| `/creators`                                | `src/app/creators/page.tsx`                |
| `/ecosystem`                                | `src/app/ecosystem/page.tsx`                |
| `/events`                                    | `src/app/events/page.tsx`                    |
| `/fomo`                                        | `src/app/fomo/page.tsx`                        |
| `/grid`                                          | `src/app/grid/page.tsx`                         |
| `/muse`                                           | `src/app/muse/page.tsx`                          |
| `/press`                                           | `src/app/press/page.tsx`                          |
| `/privacy`                                          | `src/app/privacy/page.tsx`                         |
| `/refunds`                                            | `src/app/refunds/page.tsx`                          |
| `/spacebar`                                            | `src/app/spacebar/page.tsx`                           |
| `/for-students`                                          | `src/app/for-students/page.tsx`                        |
| `/terms`                                                   | `src/app/terms/page.tsx`                                |

Each route file just renders its matching component from `src/components/`
and sets a page-specific `<title>` via the App Router `metadata` export.

## Notes on the migration

- `react-router-dom`'s `<Link to>` → `next/link`'s `<Link href>`.
- `useLocation()` → `usePathname()` from `next/navigation` (used in `Navbar`
  to highlight the active link).
- Components that use state, refs, or browser event handlers (`Navbar`, `Hero`,
  `BrandsStrip`, `Contact`, `EcosystemTabs`, `LiveFeed`, `SuccessStories`) are
  marked `'use client'`; everything else renders as a React Server Component
  by default for smaller client bundles.
- `Navbar` and `Footer` moved out of the page tree into `app/layout.tsx`, since
  they wrap every route (same behavior as the old `App.jsx`).
- All content/config that used to live in `src/data.js` is now `src/data/data.ts`
  with shared TypeScript interfaces (`NavLink`, `StatItem`, `InfoCard`, `IconCard`).
- External images (brand logos, story photos, etc.) are rendered with plain
  `<img>` tags rather than `next/image`, since they come from many third-party
  domains — this avoids having to allow-list every remote hostname. `next.config.mjs`
  sets `images.unoptimized: true` for this reason.
- No `.env` variables were required by the original app.

## Deployment

This is a standard Next.js app — deploy to Vercel, or any Node host:

```bash
npm run build
npm run start
```
