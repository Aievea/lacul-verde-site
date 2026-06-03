# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Marketing site for **Lacul Verde Sâncrai**, a sport-fishing lake near Târgu Mureș, Romania. All user-facing copy is **Romanian** (`lang="ro"`, `ro_RO`). Static-only — no backend, no DB, no forms; every route prerenders to static HTML.

> **Versions differ from training data.** This project runs **Next.js 16.2.5** (Turbopack) and **React 19.2.4**. Before writing Next-specific code, check `node_modules/next/dist/` and heed deprecation notices.

## Commands

```bash
npm run dev       # dev server (Turbopack) at http://localhost:3000
npm run build     # production build — run this to typecheck; tsc has noEmit
npm run start     # serve production build
npm run lint      # ESLint (flat config, next/core-web-vitals + next/typescript)
```

No test suite. `npm run build` is the verification gate — it runs TypeScript and fails the lint-blocking `no-explicit-any` rule via type errors. Keep `npm run lint` clean (CI-style: warnings + errors).

## Architecture

**Thin page → component.** Each `app/<route>/page.tsx` only sets `metadata` (incl. per-page `alternates.canonical`) and renders one component from `components/`. All markup/logic lives in the component. Route ↔ component mapping:

| Route | Component |
|-------|-----------|
| `/` | `Home.tsx` |
| `/specii` | `Species.tsx` |
| `/pret` | `Pret.tsx` (+ `PricingCard.tsx`) |
| `/regulament` | `Regulament.tsx` (+ `RegulationItem.tsx`) |
| `/recenzii` | `Recenzii.tsx` |
| `/capturi` | `Capturi/Capturi.tsx` |
| `/contact` | `Contact.tsx` |

`app/layout.tsx` (server) wraps all pages with `<Navbar>` + `<Footer>`, loads Google fonts (Manrope → `--font-sans`, Noto Serif → `--font-serif`), and injects `LocalBusiness` JSON-LD. `app/sitemap.ts` + `app/robots.ts` generate `/sitemap.xml` + `/robots.txt`.

**Server vs client components.** Layout, `Footer`, and `RegulationItem` are server components. Everything else is `'use client'` — almost always *only* because it uses Framer Motion. Don't add `'use client'` unless the component needs hooks, event handlers, or `motion`. `Navbar` genuinely needs it (`useState` + `usePathname`).

### Animation — `lib/motion.ts`
All Framer Motion presets are centralized here. Import them; **do not** redefine `EASE`/`fadeUp` locally (it was previously duplicated across 7 files). Two fade variants, easy to confuse:

- `fadeUp(delay)` — plays **on mount** (`initial → animate`, 0.5s). Hero / above-the-fold.
- `fadeUpInView(delay)` — plays **when scrolled into view** (`initial → whileInView`, `once`, 0.45s). Everything below the fold.
- `slideIn(fromLeft, delay)` — horizontal in-view variant.

Spread onto a motion element: `<motion.div {...fadeUpInView(0.2)} />`.

### Framer Motion gotchas (v12)
- Use `motion.create(Component)` — bare `motion(Component)` is **deprecated**. See `MotionLink` in `Home.tsx`.
- **`backdrop-blur` breaks inside a transformed ancestor.** A `motion.div` animating `y`/`x` creates a compositing context that nullifies a child's `backdrop-filter` until the animation ends. Fix: put `backdrop-blur` on the animated element *itself* (animate a `motion.create(Link)`, not a wrapper) — see the Regulament button in `Home.tsx`.

### Styling — Tailwind v4
Configured **entirely in `app/globals.css`** via `@theme {}`. There is no `tailwind.config.js`, no `tailwind.config.ts`. PostCSS plugin: `@tailwindcss/postcss`.

**Only tokens declared in `@theme` exist.** Referencing an undefined utility (e.g. `text-primary-fixed`, `bg-surface-container-highest`) **silently produces no CSS** — no error, no style. Use only these:

- **Colors** (M3-style): `primary`, `primary-container`, `on-primary`, `secondary`, `secondary-container`, `tertiary`, `tertiary-container`, `surface`, `surface-container`, `surface-variant`, `on-surface`, `on-surface-variant`, `outline`, `outline-variant`. Plus standard Tailwind colors (e.g. `blue-950`, `red-900`) where used.
- **Fonts:** `font-sans` (Manrope), `font-serif` (Noto Serif). Base layer sets body→serif, headings/`nav`/`button`→sans.
- **Radius:** `rounded-{md,lg,xl}`. **Spacing:** `section` (80px).

`globals.css` also defines `.glass`, `.text-balance`, and a `prefers-reduced-motion` reset.

**Images:** static `import` from `src/images/` (e.g. `import hero from '@/src/images/hero.png'`) — **not** the `public/` dir. Pass to `next/image`. Capture photos live in `src/images/capturi/`.

**Path alias:** `@/*` → repo root (e.g. `@/lib/motion`, `@/components/Navbar`).
