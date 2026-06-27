# HyperNova AI

> Smart technology. Honest advice. Real results.
> AI automation for business & government.

The marketing site for **HyperNova AI** — a consultancy that helps small businesses and government agencies adopt AI from the ground up. We come in, create a hypernova of efficiency across a client's data, workflows, and team, and leave behind a core of capability powerful enough that the business revolves around it.

🔗 **Live:** [hypernovaai.com](https://hypernovaai.com)

---

## Overview

A single-page, conversion-focused landing site built as a server-rendered React application. It walks a visitor from problem → services → flagship offer → process → pricing → contact, with a bold neon-on-black brand aesthetic.

### Sections

| Section | Purpose |
| --- | --- |
| **Hero** | Looping brand video banner + "Ignite your business. Harness the power." headline |
| **The Challenge** | The four reasons most businesses leave AI on the table |
| **Five Services** | AI Audit (flagship), Training, Implementation, Expenditure Monitoring, Customer Engagement, Content Pipeline |
| **The AI Audit** | The $199 flat-fee flagship offer and its three-step flow |
| **Implementation Deep-Dive** | AI Agents, **Dead Docs Initiative** (links out to [dead-docs.com](https://dead-docs.com)), P-Card Monitoring, Engagement, Content |
| **Training Paths** | Five tailored learning paths from beginner to advanced |
| **Why HyperNova** | Differentiators — we listen, customize, and actually build |
| **Pricing** | Transparent pricing table for every service |
| **Contact** | AI Audit booking form |

---

## Tech Stack

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework (file-based routing via TanStack Router)
- **[React 19](https://react.dev)**
- **[Vite 8](https://vite.dev)** — dev server and build tooling
- **[Nitro](https://nitro.build)** — server engine / deployment output
- **[Tailwind CSS 4](https://tailwindcss.com)** — styling
- **[shadcn/ui](https://ui.shadcn.com)** + **[Radix UI](https://www.radix-ui.com)** — accessible component primitives
- **[Lucide](https://lucide.dev)** — icons
- **[Zod](https://zod.dev)** + **React Hook Form** — form validation
- **TypeScript** throughout

---

## Getting Started

### Prerequisites

- **Node.js** 20+ and npm

### Install & run

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:8080
```

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server (port 8080) |
| `npm run build` | Production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## Project Structure

```
.
├── public/                 # Static assets (hero video)
├── src/
│   ├── routes/
│   │   ├── __root.tsx       # Root layout, document shell, global head
│   │   └── index.tsx        # The landing page (all sections + content data)
│   └── components/
│       └── ui/              # shadcn/ui component library
├── design.md                # Brand & design notes
├── vite.config.ts
└── package.json
```

Page content (services, pricing, training paths, etc.) is co-located as typed data structures at the top of `src/routes/index.tsx`, keeping copy easy to edit without touching markup.

---

## Deployment

Deployed on **[Vercel](https://vercel.com)** with continuous deployment from `main` — every push to the default branch triggers a new build and deploy. The Nitro build target produces the server output Vercel runs.

---

## Brand

- **Aesthetic:** neon lime on near-black, bold condensed uppercase headings
- **Voice:** confident, jargon-free, honest
- **Promise:** _"We get paid to listen to exactly what you need — and then we build it."_

---

© HyperNova AI. All rights reserved.
