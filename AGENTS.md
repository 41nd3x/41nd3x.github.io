# AGENTS.md — 41nd3x.github.io

## Project

Vue 3 + Vite + Tailwind v4 SPA — landing page for **41ND3X**, an autonomous AI agent for SMEs. All content is in Spanish.

**Active branch:** `feature/rediseno-vue` (migration from single-file HTML on `main`).  
Work in progress — only `HeaderComponent` and empty `HeroSection` exist so far.

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |

No test/lint/typecheck tooling is installed.

## Framework & toolchain quirks

- **Tailwind v4** uses CSS-first config — no `tailwind.config.js`. Custom theme lives in `src/style.css` via `@theme {}`.
- **`@` alias** maps to `/src` (Vite config). Use `@/components/...` for imports.
- **Vue 3 Composition API** with `<script setup>`.
- **No TypeScript** — plain JS only.
- **Color palette** (Tailwind `custom-*` classes): `primary` #00F0FF, `secondary` #BA2BE2, `tertiary` #FF00FF, `neutral` #0D1515, `accent` #192121, `text` #B4C5C6.
- **Font:** self-hosted Hanken Grotesk (Regular, Thin, Bold in `src/assets/fonts/`).

## Known bugs / gotchas

- **`@font-face` paths are broken** — `src/style.css` references `url('HankenGrotesk-*.ttf')` but files are in `src/assets/fonts/`. Needs `url('@/assets/fonts/HankenGrotesk-*.ttf')` or relative fix.

## Architecture

- `index.html` → mounts `#app` → `src/main.js` → `src/App.vue`
- Components split: `layout/` (shell) and `content/` (page sections)
- SVG sprite at `public/icons.svg` — reference icons via `<svg><use href="/icons.svg#icon-name"/></svg>`
- `main` branch has the complete production version (single `index.html` with all sections, Tailwind CDN, Discord webhook form) — reference when migrating features
