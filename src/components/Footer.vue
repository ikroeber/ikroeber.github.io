<template>
  <footer>
    <nav>
      <a v-for="link in links" :key="link.key" :href="link.url">
        {{ t(link.key) }}
      </a>
    </nav>
    <p class="copy">{{ t('footer.copyright') }}</p>
  </footer>
</template>

<script>
  import { pages } from '../constants/pages'
  import { useI18n } from '../i18n/index'

  export default {
    setup() {
      const { t } = useI18n()
      return { t }
    },
    data() {
      return {
        links: pages
      }
    }
  }
</script>

<style scoped>
  footer {
    padding: 2rem clamp(16px, 6vw, 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  nav a {
    padding: 0.25em 0.6em;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
  }

  .copy {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: rgba(250, 250, 250, 0.4);
    margin: 0;
    text-align: center;
  }
</style>
