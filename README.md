# Sudharsan K — Premium Developer Portfolio

A production-grade developer portfolio built with React 19, Vite, Tailwind CSS v4,
Framer Motion, and GSAP. Dark theme, glass morphism, aurora glow — designed to sit
alongside Vercel, Linear, and Raycast rather than a typical student template.

## Tech Stack

- **React 19** + **Vite 6** — build tooling
- **Tailwind CSS v4** — CSS-first theming via `@theme` (no `tailwind.config.js` needed)
- **Framer Motion** — scroll reveals, spring counters, magnetic buttons
- **GSAP** — available via `useGsapAnimation` hook for any advanced scroll-triggered work
- **React Icons** — `react-icons/fi` (Feather) and `react-icons/si` (Simple Icons) for brand/tech marks

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Before you deploy — replace placeholders

1. **`public/resume.pdf`** — currently a placeholder text file. Replace with your real resume PDF (same filename).
2. **`public/og-image.png`** — add a 1200×630 social preview image.
3. **`src/data/portfolioData.js`** — update social links (`socialLinks`), email, and project GitHub/live URLs to your real ones.
4. **Profile image** — the Hero currently renders your initials ("SK") inside a gradient frame instead of a photo, so there's zero broken-image risk out of the box. To use a real photo: drop it in `src/assets/images/profile.png` and swap the initials block in `src/sections/Hero/Hero.jsx` for an `<img>` tag.
5. **`index.html`** — update `og:url` / `canonical` to your real domain once deployed.

## Folder Structure

```
src/
├── assets/          # images, icons, logos
├── components/      # reusable UI primitives (Button, GlassCard, Badge, ...)
├── layouts/         # MainLayout — navbar + footer shell
├── sections/         # Hero, About, Skills, Experience, Projects, Certificates, Contact
├── hooks/           # useMousePosition, useMagnetic, useScrollReveal, useGsapAnimation
├── styles/          # index.css — Tailwind v4 theme tokens + global styles
├── utils/           # cn.js — className merge helper
└── data/            # portfolioData.js — single source of truth for all content
```

## Design Tokens

| Token | Value |
|---|---|
| Background | `#040814` |
| Primary | `#00D9FF` |
| Secondary | `#8B5CF6` |
| Cards | Glass morphism (`backdrop-blur` + translucent fill) |

All tokens live in `src/styles/index.css` under `@theme` and are exposed as
Tailwind utilities (`bg-bg`, `text-primary`, `shadow-glow-primary`, etc.).

## Accessibility

- Visible `:focus-visible` outlines everywhere (never removed without replacement)
- `prefers-reduced-motion` respected globally — animations freeze automatically
- Skip-to-content link, semantic landmarks (`header`, `main`, `footer`, `nav`)
- Form fields have associated `<label>`s, `aria-invalid`, and `aria-describedby` error linking
- All icon-only buttons have `aria-label`

## License

Personal portfolio project — content and copy belong to Sudharsan K. Code structure
is free to reference for your own portfolio.
