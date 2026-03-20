# Website Structure

Personal portfolio for Igor Kroeber — built with Vue 3, deployed to GitHub Pages.

---

## File Tree

```
ikroeber.github.io/
├── .github/
│   └── workflows/
│       └── main.yml              # CI/CD: build + deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.ico
│   └── index.html                # HTML entry point; loads Google Fonts
├── src/
│   ├── assets/
│   │   ├── background.svg        # Legacy asset (no longer used in background)
│   │   └── logo.png
│   ├── components/
│   │   ├── Content.vue           # Main content wrapper — orchestrates all 5 sections
│   │   ├── Footer.vue            # Site footer with nav links and copyright
│   │   ├── Header.vue            # Fixed header: logo, nav, language toggle, mobile menu
│   │   ├── sections/
│   │   │   ├── HeroSection.vue       # Full-viewport intro (#)
│   │   │   ├── AboutSection.vue      # Bio + skills (#sobre-mim)
│   │   │   ├── ProjectsSection.vue   # Project cards (#projetos)
│   │   │   ├── ContactSection.vue    # Contact form + socials (#contato)
│   │   │   └── ResumeSection.vue     # Timeline + CV download (#curriculo)
│   │   └── shared/
│   │       ├── SectionTitle.vue  # Reusable heading with accent underline bar
│   │       ├── SkillBadge.vue    # Tech tag chip (default and small variants)
│   │       ├── LinkList.vue      # Reusable nav link list (horizontal/vertical)
│   │       └── Text.vue          # Stub (unused)
│   ├── composables/
│   │   └── useReveal.js          # IntersectionObserver scroll-reveal composable
│   ├── constants/
│   │   ├── colors.js             # JS color constants (mirrors CSS vars)
│   │   └── pages.js              # Navigation items: i18n key + anchor URL
│   ├── i18n/
│   │   ├── index.js              # Custom i18n: createI18n, provideI18n, useI18n
│   │   └── locales/
│   │       ├── pt.js             # Portuguese strings (default locale)
│   │       └── en.js             # English strings
│   ├── vendor/
│   │   └── sanitize.css          # CSS normalization (loaded via App.vue)
│   ├── App.vue                   # Root component: layout shell + global styles
│   └── main.js                   # App entry: createApp, provideI18n, mount
├── .prettierrc                   # Code formatting config
├── babel.config.js               # Babel preset for Vue 3
├── package.json
└── vue.config.js                 # Vue CLI config (empty — defaults used)
```

---

## Application Architecture

```
main.js
 └─ createApp(App)
     └─ provideI18n(app)          ← injects i18n into the Vue component tree
     └─ app.mount('#app')

App.vue
 ├─ <Header />                    ← fixed, always visible
 ├─ <Content />                   ← scrollable page body
 │   ├─ <HeroSection />
 │   ├─ <AboutSection />
 │   ├─ <ProjectsSection />
 │   ├─ <ContactSection />
 │   └─ <ResumeSection />
 └─ <Footer />
```

The layout is a standard vertical stack. There is no client-side router — navigation is purely anchor-based (`href="#section-id"`) with `scroll-behavior: smooth` on `<html>`.

---

## Page Sections

| Order | Component | Anchor | Description |
|---|---|---|---|
| 1 | `HeroSection` | _(top of page)_ | Full-viewport intro with name, rotating subtitle, CTA |
| 2 | `AboutSection` | `#sobre-mim` | Avatar, bio text, skill badges |
| 3 | `ProjectsSection` | `#projetos` | Grid of 4 project cards |
| 4 | `ContactSection` | `#contato` | Contact form + social links |
| 5 | `ResumeSection` | `#curriculo` | Experience/education timeline, CV download |

All section roots include `scroll-margin-top: var(--header-height)` to compensate for the fixed header when jumping to anchors.

---

## Navigation

Navigation items are defined in `src/constants/pages.js`:

```js
export const pages = [
  { key: 'nav.about',    url: '#sobre-mim' },
  { key: 'nav.projects', url: '#projetos' },
  { key: 'nav.contact',  url: '#contato' },
  { key: 'nav.resume',   url: '#curriculo' }
]
```

The `key` field is an i18n lookup key. Both `Header` and `Footer` import this array and call `t(link.key)` to render the translated label. Adding or reordering nav items only requires editing this file.

---

## Internationalization (i18n)

A custom, zero-dependency i18n system built with Vue 3's provide/inject.

### How it works

```
main.js
  provideI18n(app)
    └─ createI18n()
        ├─ locale = ref('pt')        ← reads from localStorage on init
        ├─ t(keyPath)                ← dot-notation string lookup, reactive
        └─ setLocale(lang)           ← updates locale + persists to localStorage

Any component
  const { t, locale, setLocale } = useI18n()
```

`t('hero.eyebrow')` splits the key on `.`, walks the active locale object, and returns the resolved string. Because it reads from a `ref`, Vue's reactivity system re-renders templates automatically when the locale changes.

### Locale files

Both `src/i18n/locales/pt.js` and `src/i18n/locales/en.js` export a single default object with the same shape:

```
{
  nav:      { about, projects, contact, resume }
  hero:     { eyebrow, subtitles[], tagline, cta }
  about:    { title, bio1, bio2, bio2Link, techHeading }
  projects: { title, subtitle, items[{ title, description }] }
  contact:  { title, subtitle, name, namePlaceholder, email, emailPlaceholder,
              message, messagePlaceholder, send, sending,
              successTitle, successText, socialHeading }
  resume:   { title, download, experienceHeading, educationHeading,
              experience[{ period, title, company, description }],
              education[{ period, title, institution, description }] }
  footer:   { copyright }
}
```

Adding a new language requires: creating a new locale file, adding it to the `messages` map in `src/i18n/index.js`, and adding a toggle button in `Header.vue`.

### Language toggle

The `Header` renders PT/EN buttons. Clicking one calls `setLocale(lang)`, which updates the reactive `locale` ref and persists the choice to `localStorage`. The entire app re-renders to the new language instantly.

---

## Scroll-Reveal Animations

`src/composables/useReveal.js` exposes a single `useReveal(targetRef)` function:

1. On `onMounted`, creates an `IntersectionObserver` (threshold 12%)
2. Finds all `.reveal` elements inside `targetRef`
3. Observes each — when one intersects the viewport, adds `.revealed` to it and stops observing that element
4. On `onUnmounted`, disconnects the observer

Every section component calls `useReveal(sectionRef)` and marks individual child elements with `class="reveal"`. The transition CSS lives globally in `App.vue`:

```css
.reveal          { opacity: 0; transform: translateY(24px); transition: … }
.reveal.revealed { opacity: 1; transform: translateY(0); }
```

Staggered entrance (e.g., project cards) is achieved with inline `:style="{ transitionDelay: index * 100 + 'ms' }"`.

---

## State Management

No Vuex or Pinia. State is handled at the minimal necessary scope:

| State | Location | Mechanism |
|---|---|---|
| Active locale | `src/i18n/index.js` | `ref` + `provide/inject` |
| Locale persistence | `localStorage` | Written on `setLocale()` |
| Mobile menu open/closed | `Header.vue` | Local `data.menuOpen` |
| Header scrolled class | `Header.vue` | Local `data.scrolled` + scroll listener |
| Contact form fields | `ContactSection.vue` | Local `data.form` reactive object |
| Form submitted state | `ContactSection.vue` | Local `data.submitted` flag |
| Hero subtitle index | `HeroSection.vue` | Local `data.subtitleIndex` + `setInterval` |

---

## Build & Deployment

### Local development
```bash
npm install
npm run serve      # dev server at localhost:8080
npm run build      # production build → dist/
npm run lint       # ESLint
```

### CI/CD Pipeline

Push to `main` triggers `.github/workflows/main.yml`:

1. **build** job — runs `thefrustrateddev/vue-deploy-github-pages@v1.0.0`, which runs `npm run build` and pushes the `dist/` output to the `gh-pages` branch; then uploads the branch as a Pages artifact
2. **deploy** job — runs `actions/deploy-pages@v4` to publish the artifact to GitHub Pages

Live site: `https://ikroeber.github.io`

### Browser targets
Defined in `package.json` browserslist: `> 1%`, `last 2 versions`, `not dead`, `not ie <= 8`.

---

## Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `vue` | `^3.2.36` | Framework |
| `core-js` | `^3.8.3` | Polyfills |
| `@vue/cli-service` | `~5.0.8` | Build tooling (webpack) |
| `@vue/compiler-sfc` | `^3.2.37` | SFC compilation |
| `@vue/cli-plugin-babel` | `~5.0.0` | Babel integration |

No routing library, no state management library, no i18n library, no animation library, no UI component library.
