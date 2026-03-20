# Design Document

Personal portfolio for Igor Kroeber. The aesthetic direction is **Obsidian & Amber** — a near-pure black background with a warm amber accent, projecting confidence and maturity without relying on the neon-on-navy look common in developer portfolios.

---

## Color Palette

All colors are defined as CSS custom properties in `src/App.vue` and are available globally throughout the application.

### Core Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0A0B` | Page background (obsidian black) |
| `--color-primary` | `#C9873A` | Accent — CTAs, highlights, badges, timeline dots |
| `--color-warning` | `#9E7B6B` | Secondary accent — company names in timeline |
| `--color-text` | `#F0EBE3` | Primary body text (warm ivory) |
| `--color-text-muted` | `#7A7068` | Muted/secondary text |
| `--color-glass` | `rgba(240, 235, 227, 0.03)` | Card and surface backgrounds |
| `--color-glass-border` | `rgba(240, 235, 227, 0.07)` | Card and surface borders |

### Background

The body background is a pure CSS atmospheric effect — no images:

```css
background-color: #0A0A0B;
background-image:
  radial-gradient(ellipse 90% 55% at 50% -5%,  rgba(201, 135, 58, 0.07) 0%, transparent 70%),
  radial-gradient(ellipse 55% 45% at 85% 92%, rgba(201, 135, 58, 0.04) 0%, transparent 60%);
```

Two radial gradients create a faint warm glow at the top-center and bottom-right of the page. The effect is subtle — barely perceptible on its own, but gives depth and warmth compared to a flat black.

### Glassmorphism Surfaces

Cards and the header use a glass-like treatment:

```css
background: var(--color-glass);          /* rgba(240, 235, 227, 0.03) */
border: 1px solid var(--color-glass-border); /* rgba(240, 235, 227, 0.07) */
backdrop-filter: blur(14px);
```

The tint is pulled from the warm text color rather than pure white, so it harmonizes with the amber palette instead of reading as cold grey.

### Amber Usage Guide

The primary color `#C9873A` (rgb: 201, 135, 58) appears in context-specific opacity levels:

| Context | Value |
|---|---|
| Section title accent bar | `#C9873A` (solid) |
| Skill badge background | `rgba(201, 135, 58, 0.10)` |
| Skill badge border | `rgba(201, 135, 58, 0.28)` |
| Photo frame border | `rgba(201, 135, 58, 0.25)` |
| Photo frame background | `rgba(201, 135, 58, 0.04)` |
| Photo frame glow | `rgba(201, 135, 58, 0.09)` |
| Card hover border | `rgba(201, 135, 58, 0.35)` |
| Timeline left border | `rgba(201, 135, 58, 0.20)` |
| Timeline dot glow | `rgba(201, 135, 58, 0.45)` |
| Bio link underline | `rgba(201, 135, 58, 0.35)` |
| Focus ring on inputs | `rgba(201, 135, 58, 0.15)` |
| Button hover shadow | `rgba(201, 135, 58, 0.25–0.30)` |
| Background glow (top) | `rgba(201, 135, 58, 0.07)` |

---

## Typography

### Font Stack

| Role | Font | Source |
|---|---|---|
| Display / Headings | Staatliches | Google Fonts |
| Body / UI | Inter (400, 500, 600) | Google Fonts |

Both fonts are loaded via preconnect + stylesheet in `public/index.html` for optimal performance:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero name (h1) | Staatliches | `clamp(56px, 10vw, 96px)` | 400 | Fluid, scales with viewport |
| Hero subtitle (h2) | Staatliches | `clamp(24px, 4vw, 40px)` | 400 | Cycling animated subtitle |
| Section heading (h2) | Staatliches | `clamp(32px, 5vw, 52px)` | 400 | Via `SectionTitle` component |
| Timeline heading (h3) | Staatliches | `28px` | 400 | Experience / Education labels |
| Card title (h3) | Staatliches | `26px` | 400 | Project card names |
| Skills heading (h3) | Staatliches | `24px` | 400 | Above badge grid |
| Timeline title (h4) | Staatliches | `24px` | 400 | Job/degree title |
| Hero eyebrow | Inter | `1rem` | 500 | Uppercase, +0.12em letter-spacing |
| Body / bio | Inter | `1rem` | 400 | Line-height 1.75 |
| Card description | Inter | `14px` | 400 | Line-height 1.65 |
| Form label | Inter | `13px` | 500 | +0.04em letter-spacing |
| Skill badge (default) | Inter | `13px` | 400 | — |
| Skill badge (small) | Inter | `11px` | 400 | Used inside project cards |
| Nav links | Inter | `14px` | 500 | +0.04em letter-spacing |
| Footer text | Inter | `13px` | 400 | — |

### Font Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

Applied globally on `#app` for crisp subpixel rendering on both macOS and Windows.

---

## Spacing & Layout

### Section Padding

All sections use a single responsive padding token:

```css
--section-padding: clamp(64px, 10vw, 120px) clamp(16px, 6vw, 80px);
```

- **Vertical**: scales from `64px` to `120px` based on viewport width
- **Horizontal**: scales from `16px` to `80px` based on viewport width

### Container Widths

| Section | Max-width |
|---|---|
| About, Projects, Contact | `1100px` |
| Resume | `720px` |

All containers are centered with `margin: 0 auto`.

### Header Height

```css
--header-height: 5em;
```

Used as `scroll-margin-top` on every section root to compensate for the fixed header when navigating via anchor links.

### Responsive Breakpoint

A single breakpoint is used throughout: **800px**.

Below 800px:
- Header desktop nav hides; hamburger menu appears
- About section switches from 2-column grid to single column
- Contact section switches from 2-column grid to single column
- Hero font sizes scale down via `clamp()`

---

## Component Design

### Header

Fixed at the top, always visible while scrolling.

- **Default state**: `rgba(10, 10, 11, 0.70)` background + `blur(16px)` backdrop filter
- **Scrolled state** (after 40px): `rgba(10, 10, 11, 0.96)` — near-opaque
- Border bottom: `rgba(240, 235, 227, 0.05)` → `0.09` when scrolled
- Transition: `background 0.3s, border-color 0.3s`
- Language toggle: `PT | EN` — inactive buttons at 35% opacity, active at amber
- Hamburger: three `2px` bars; open state animates into an ×

### SectionTitle

```
[  Title text in Staatliches  ]
[▬ 48px amber bar, 3px tall   ]
[  Optional subtitle in Inter ]
```

The accent bar is a `<span>` block element (`width: 48px; height: 3px; background: var(--color-primary)`).

### SkillBadge

Pill-shaped chip with amber tinted glass background:

```css
background: rgba(201, 135, 58, 0.10);
border: 1px solid rgba(201, 135, 58, 0.28);
border-radius: 20px;
color: var(--color-primary);
```

Two variants:
- **default**: `padding: 4px 12px; font-size: 13px`
- **small**: `padding: 2px 8px; font-size: 11px` (used inside project cards)

### Project Cards

Glassmorphic cards with a lift-on-hover effect:

- **Resting**: `rgba(240, 235, 227, 0.03)` bg, `rgba(240, 235, 227, 0.07)` border
- **Hover**: `translateY(-5px)`, amber border `rgba(201, 135, 58, 0.35)`, `box-shadow: 0 12px 40px rgba(0,0,0,0.3)`
- Transition: `0.25s ease` on transform, border-color, and box-shadow
- Large faint project number (Staatliches, 48px, 12% opacity) positioned top-right as decorative element

### Contact Form

Input fields use glass treatment matching the cards:

```css
background: var(--color-glass);
border: 1px solid var(--color-glass-border);
border-radius: 8px;
```

**Focus state**: amber border + `box-shadow: 0 0 0 3px rgba(201, 135, 58, 0.15)`

**Submit button**: filled amber background (`var(--color-primary)`), dark text (`var(--color-bg)`). Hover lifts `2px` + glow shadow.

**Success state**: transitions to a centered checkmark + confirmation message via Vue `<Transition name="fade" mode="out-in">`.

### Resume Timeline

Left-border vertical timeline:

```css
border-left: 2px solid rgba(201, 135, 58, 0.20);
```

Each entry has a positioned dot:

```css
width: 12px; height: 12px;
border-radius: 50%;
background: var(--color-primary);
box-shadow: 0 0 8px rgba(201, 135, 58, 0.45);
```

The glow on the dot gives it a subtle ember effect against the dark background.

---

## Animation System

### Hero Entrance (`fadeUp`)

Each hero element fades in and rises 24px on page load:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Staggered delays:
| Element | Delay |
|---|---|
| Eyebrow | 0ms |
| H1 name | 150ms |
| Subtitle | 300ms |
| Tagline | 450ms |
| CTA button | 600ms |

### Hero Subtitle Rotation

The subtitle (`Software Engineer` / `Problem Solver` / `Full-Stack Developer`) cycles every 3 seconds. The outgoing text slides up and fades; the incoming text rises from below:

```css
/* Vue Transition: fade-title */
leave-to:    { opacity: 0; transform: translateY(-10px) }
enter-from:  { opacity: 0; transform: translateY( 10px) }
```

### Scroll Reveal

Sections use `useReveal()` composable with `IntersectionObserver` (threshold: 12%). When an element enters the viewport:

```css
/* Initial state */
.reveal          { opacity: 0; transform: translateY(24px); transition: 0.6s ease; }

/* Triggered state */
.reveal.revealed { opacity: 1; transform: translateY(0); }
```

Project cards use staggered delays via inline style: `:style="{ transitionDelay: index * 100 + 'ms' }"`.

### Nav Link Hover

A CSS `@keyframes linkHover` animates nav links from muted text to amber + lifts them `0.2em`:

```css
@keyframes linkHover {
  0%   { color: rgba(240, 235, 227, 0.50); transform: translateY(0) }
  100% { color: var(--color-primary);       transform: translateY(-0.2em) }
}
```

### Scroll-Down Arrow (Hero)

A `bounce` keyframe runs infinitely (2s ease-in-out, 1s delay) on the scroll hint arrow:

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0) }
  50%       { transform: translateY(8px) }
}
```

### Mobile Menu

Vue `<Transition name="slide-down">` on the mobile nav dropdown:

```css
enter-from / leave-to: { opacity: 0; transform: translateY(-8px) }
```

### Contact Form State

Vue `<Transition name="fade" mode="out-in">` swaps between the form and the success message. `mode="out-in"` ensures the old element fully exits before the new one enters.

---

## Header Scroll Behavior

A `window` scroll listener in `Header.vue` toggles `data.scrolled` when `window.scrollY > 40`. The `.scrolled` class increases the header background opacity, making it more opaque as the user scrolls away from the hero:

```
Transparent header over hero image
        ↓ scroll 40px
More opaque header (backdrop readable over content)
```

---

## Accessibility Considerations

- `aria-label` on icon-only links (GitHub, LinkedIn, external demo)
- `aria-label` on hamburger button (locale-aware: "Abrir menu" / "Open menu")
- `aria-label` on language toggle group
- `scroll-margin-top` on all section anchors prevents header overlap
- `novalidate` on contact form — custom validation via Vue before submit
- All interactive elements are keyboard-focusable (native `<a>` and `<button>`)
- SVG icons are decorative and paired with visible text or `aria-label`

---

## Code Style

Enforced via `.prettierrc`:

```json
{
  "tabWidth": 2,
  "semi": false,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "none",
  "vueIndentScriptAndStyle": true
}
```

- No semicolons
- Single quotes
- 2-space indentation
- Script and style blocks inside `.vue` files are indented one level
