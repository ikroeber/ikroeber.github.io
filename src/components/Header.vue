<template>
  <header :class="{ scrolled }">
    <a href="#" class="logo" @click.prevent="scrollToTop">IK</a>
    <nav class="desktop-nav">
      <a v-for="link in links" :key="link.key" :href="link.url">
        {{ t(link.key) }}
      </a>
    </nav>
    <div class="header-right">
      <div class="lang-toggle" role="group" :aria-label="locale === 'pt' ? 'Idioma' : 'Language'">
        <button
          :class="{ active: locale === 'pt' }"
          @click="setLocale('pt')"
        >PT</button>
        <span class="lang-sep">|</span>
        <button
          :class="{ active: locale === 'en' }"
          @click="setLocale('en')"
        >EN</button>
      </div>
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-label="locale === 'pt' ? 'Abrir menu' : 'Open menu'"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <Transition name="slide-down">
      <nav v-show="menuOpen" class="mobile-nav">
        <a
          v-for="link in links"
          :key="link.key"
          :href="link.url"
          @click="menuOpen = false"
        >
          {{ t(link.key) }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script>
  import { pages } from '../constants/pages'
  import { useI18n } from '../i18n/index'

  export default {
    setup() {
      const { t, locale, setLocale } = useI18n()
      return { t, locale, setLocale }
    },
    data() {
      return {
        links: pages,
        scrolled: false,
        menuOpen: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    unmounted() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        this.scrolled = window.scrollY > 40
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--header-height);
    padding: 0 clamp(16px, 4vw, 48px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: rgba(10, 10, 11, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(240, 235, 227, 0.05);
    transition: background 0.3s, border-color 0.3s;
  }

  header.scrolled {
    background: rgba(10, 10, 11, 0.96);
    border-bottom-color: rgba(240, 235, 227, 0.09);
  }

  .logo {
    color: var(--color-text);
    font-family: 'Staatliches', sans-serif;
    font-size: 32px;
    text-decoration: none;
    padding: 0 0.25em;
    transition: color 0.2s;
    line-height: 1;
    animation: none;
  }

  .logo:hover {
    color: var(--color-primary);
    animation: none;
  }

  .desktop-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .desktop-nav a {
    padding: 0.25em 0.75em;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .lang-toggle {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .lang-toggle button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: rgba(240, 235, 227, 0.35);
    padding: 0.2em 0.3em;
    transition: color 0.2s;
  }

  .lang-toggle button:hover,
  .lang-toggle button.active {
    color: var(--color-primary);
  }

  .lang-sep {
    color: rgba(240, 235, 227, 0.18);
    font-size: 11px;
    user-select: none;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    width: 32px;
  }

  .hamburger span {
    display: block;
    height: 2px;
    background: var(--color-text);
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: rgba(10, 10, 11, 0.98);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  .mobile-nav a {
    padding: 0.875rem clamp(16px, 4vw, 48px);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .mobile-nav a:last-child {
    border-bottom: none;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  @media screen and (max-width: 800px) {
    .desktop-nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
</style>
