# Minimal Portfolio

A minimal, dark-themed developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4. Showcases projects, experience, writing, reading, and contact details with smooth animations.

## About

Saumya Jha — 2nd Year BE IT student and full-stack developer, backend-focused, working on scalable systems, GenAI, cloud, and DevOps. Open to opportunities.

- Portfolio: [saumyajha.xyz](https://www.saumyajha.xyz/)
- GitHub: [@JhaSaumya](https://github.com/JhaSaumya)
- Email: saumyajha.error@gmail.com

## Features

- **Hero** — animated intro with a rotating focus line (backend systems, distributed architectures, AI-integrated apps, production infrastructure) and quick links.
- **Selected projects** — DebtGuardian, tweetTube, NextJs Auth, Expense Tracker, each with code/live links.
- **Roles & leadership** — Technical Lead at CampusCrafters, Development Lead at AWS Cloud Club I2IT.
- **Writing** — short explainers on systems (e.g. "How WhatsApp works even without internet", "Why React is fast").
- **Books** — recommended reads with 3D cover hover effect.
- **About** — skills and tech stack (React/Next.js, Node.js/Express, MongoDB/PostgreSQL, GenAI & LLMs, Cloud & AWS).
- **Contact** — email and social links (GitHub, LinkedIn, Twitter).
- **Theming** — dark by default with a theme switcher; Vercel Analytics integrated.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS 4, tw-animate-css, shadcn/ui (base-ui + radix)
- **Animation:** Framer Motion, Motion
- **Fonts:** Geist Mono, Manrope, Montserrat, Onest (via @fontsource-variable)
- **Icons:** Lucide, Tabler
- **Analytics:** @vercel/analytics
- **Language:** TypeScript 5

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Project Structure

```
src/
  app/            # Next.js App Router pages (home, projects, blog)
  components/     # Section components (hero, projects, experiences, books, about, contact, ...)
  components/ui/  # Reusable UI primitives (button, card, badge, highlight, ...)
  lib/            # Utilities
public/           # Static assets (images, book covers, blog covers)
```

## Deployment

Deployed on Vercel. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

*Building, experimenting, and understanding systems one layer at a time.*