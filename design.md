# Dead Docs — Design System

> Extracted from https://dead-docs.com/
> A dark, high-contrast B2B brand built around an acid-green accent and a bold condensed display face. Aesthetic: confident, slightly editorial/"morgue-meets-tech," urgent but reassuring ("Your data is trapped. We set it free.").

---

## 1. Color Palette

Dark theme. Near-black canvas, white text, electric lime-green primary, and a purple secondary/accent.

### Core tokens
| Token | Hex | Usage |
|---|---|---|
| `--background` | `#15171a` | Page background (very dark charcoal/near-black) |
| `--foreground` | `#fff` | Primary text |
| `--card` | `#1e2024` | Card / surface background |
| `--card-foreground` | `#fff` | Text on cards |
| `--popover` | `#1e2024` | Popover background |
| `--border` | `#2a2d32` | Borders / dividers |
| `--input` | `#2a2d32` | Input borders/fields |
| `--muted` | `#2a2d32` | Muted surface |
| `--muted-foreground` | `#8a8d92` | Secondary / muted text |

### Brand / action colors
| Token | Hex | Foreground | Usage |
|---|---|---|---|
| `--primary` | `#95ff00` | `#15171a` | **Acid lime-green** — primary CTAs, highlights, focus ring |
| `--secondary` | `#9542f4` | `#fff` | **Purple** — secondary actions |
| `--accent` | `#9542f4` | `#fff` | Purple accent |
| `--ring` | `#95ff00` | — | Focus ring (lime) |
| `--destructive` | `#f44` | — | Errors / destructive |

### Extended / supporting shades
- Green family: `#95ff00` (primary), `#bfff33`, `#78d600`, `#5eac00`, `#457f00`, `#dbff80`, `#f2ffc9` (tints/shades)
- Purple family: `#9542f4`, `#792dd1`, `#451a7a`, `#d5b1fb`, `#ecdcff` (tints/shades)
- Blue accent: `#a5cdff`
- Surfaces: `#15171a`, `#1e2024`, `#2a2d32`, `#3a3d42`
- Neutrals: `#fff` / `#ffffff`, `#8a8d92`, `#000000`

### Chart palette
`#95ff00` · `#9542f4` · `#a5cdff` · `#bfff33` · `#792dd1`

### Focus / ring treatment
- Default ring color `#2a2d32`; lime glow ring at low alpha `#95ff001a` (≈10% green).

---

## 2. Typography

Four families, loaded as self-hosted woff2 (Next.js font pipeline) with fallbacks.

| Role | Family | Token | Notes |
|---|---|---|---|
| **Headings / Display** | **Anton** | `--font-heading` | Condensed, heavy, ALL-CAPS display face. Fallback: `"Anton", sans-serif` |
| **Body** | **Almarai** | `--font-body` | Clean humanist sans for paragraphs & UI. Default font family |
| **Mono** | **DM Mono** | `--font-mono` | Labels, eyebrows, code/data flourishes |
| **Serif accent** | **seasonSerif** | `--font-season-serif` | Variable serif (TTF) for editorial accents |

Heading rule: `font-family: var(--font-heading), "Anton", sans-serif`.

### Font weights
- `--font-weight-medium: 500`
- `--font-weight-semibold: 600`
- `--font-weight-bold: 700`

### Type scale (px observed in CSS)
`11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 28, 32, 36, 44, 52, 64, 72, 80, 136`

- **Hero display** (e.g. "YOUR DATA IS TRAPPED. WE SET IT FREE."): very large condensed Anton, up to ~`136px` desktop, ALL CAPS.
- **Section headlines** (e.g. "AN END-TO-END RESURRECTION.", "QUESTIONS. ANSWERED."): large Anton caps, ~`52–80px`.
- **Eyebrow / kicker labels** (e.g. "What We Deliver", "Use cases"): small mono/uppercase, ~`12–14px`, tracked.
- **Body**: Almarai, ~`16–18px`.
- **Small / captions**: `11–14px`, `--muted-foreground`.

---

## 3. Layout & Structure

Page sections, top to bottom:

1. **Announcement bar** — "Now booking Q3 engagements — limited availability for enterprise assessments."
2. **Header / Nav** — wordmark `DEAD DOCS` (left) + `Book a demo` CTA (right).
3. **Hero** — oversized caps headline, sub-copy, primary CTA.
4. **Social proof** — "Trusted by teams who refuse to let their data die." + animated logo strip + counter ("Over 0+ documents resurrected").
5. **What We Deliver** — "AN END-TO-END RESURRECTION." → 4 cards: *Resurrect · Extract & Structure · Build Your Portal · Manage & Monitor*.
6. **Use cases** — "DEAD DATA IN EVERY INDUSTRY. WE FIX THAT." → tabs/cards: *Compliance & Audit · Healthcare · Legal & Contracts · Government & Public Sector*, with a testimonial quote.
7. **FAQ** — "QUESTIONS. ANSWERED." collapsible accordion.
8. **Final CTA** — "RESURRECT YOUR DATA." + Book a demo.
9. **Footer** — wordmark + blurb, columns: *Services · Company · Social · Legal*, copyright "Dead Docs, Inc. © 2026".

Layout characteristics: generous vertical whitespace between sections, multi-column card grids (4-up services, footer columns), centered max-width content container.

---

## 4. Spacing, Radii & Effects

### Radius
- `--radius: .5rem` (8px) base
- `--radius-md: calc(var(--radius) * .8)` (≈6.4px)
- Cards/buttons use subtle rounded corners.

### Borders
- Border color `#2a2d32`.
- Both `solid` and `dashed` border styles used (`--tw-border-style`), dashed for decorative/dividers.

### Shadows
- Default elevation: `0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a` (soft, low-alpha).
- Drop-shadow utilities available; primarily flat with the lime as the "glow."

### Decorative backgrounds
- SVG dot-grid pattern (`dotted-background.svg`).
- CTA pattern overlay (`cta-pattern.svg`).

---

## 5. Components

### Buttons
- **Primary**: lime `#95ff00` fill, dark `#15171a` text, rounded `~8px`, bold. Used for "Book a demo" / "Get started".
- **Secondary**: purple `#9542f4` fill, white text.
- **Text/link CTAs**: inline links to `/contact/` etc.
- Focus: lime ring with low-alpha glow.

### Cards (services / use cases)
- Surface `#1e2024` on `#15171a` background, `#2a2d32` border, `~6–8px` radius, padded, with icon + bold caps title + muted body.

### Accordion (FAQ)
- Collapsible question rows, border-separated (`#2a2d32`).

### Logo strip
- Grayscale/monochrome client logos, horizontally animated marquee.

---

## 6. Voice & Copy

- **Tone**: urgent, provocative, "resurrection/morgue" metaphor — *trapped → set free*, *dead docs → resurrected*, *graveyard of documents*.
- **Headlines**: short, declarative, ALL CAPS, often two clipped sentences ("DEAD DATA IN EVERY INDUSTRY. WE FIX THAT." / "QUESTIONS. ANSWERED.").
- **Promise**: "You get the solution, not more work."
- **Primary CTA copy**: "Book a demo" (repeated), "Get started", "Resurrect your data."
- **Tagline**: "We digitize paper, unlock file shares, and turn buried information into dashboards and custom digital solutions."

---

## 7. Quick Reference — CSS Variables

```css
:root {
  /* surfaces */
  --background: #15171a;
  --foreground: #fff;
  --card: #1e2024;
  --card-foreground: #fff;
  --popover: #1e2024;
  --popover-foreground: #fff;
  --border: #2a2d32;
  --input: #2a2d32;
  --muted: #2a2d32;
  --muted-foreground: #8a8d92;

  /* brand / actions */
  --primary: #95ff00;
  --primary-foreground: #15171a;
  --secondary: #9542f4;
  --secondary-foreground: #fff;
  --accent: #9542f4;
  --accent-foreground: #fff;
  --ring: #95ff00;
  --destructive: #f44;

  /* charts */
  --chart-1: #95ff00;
  --chart-2: #9542f4;
  --chart-3: #a5cdff;
  --chart-4: #bfff33;
  --chart-5: #792dd1;

  /* type */
  --font-heading: "Anton", "Anton Fallback";
  --font-body: "Almarai", "Almarai Fallback";
  --font-mono: "DM Mono", "DM Mono Fallback";
  --font-season-serif: "seasonSerif", "seasonSerif Fallback";
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* shape */
  --radius: .5rem;
  --radius-md: calc(var(--radius) * .8);
}
```
