<template>
  <section class="hero">
    <div class="hero-decor" aria-hidden="true">IK</div>
    <div class="hero-content">
      <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
      <h1>Igor Kroeber</h1>
      <div class="subtitle-wrapper">
        <Transition name="fade-title" mode="out-in">
          <h2 :key="currentSubtitle" class="subtitle">{{ currentSubtitle }}</h2>
        </Transition>
      </div>
      <p class="tagline">{{ t('hero.tagline') }}</p>
      <a href="#sobre-mim" class="cta-btn">{{ t('hero.cta') }}</a>
    </div>
    <a href="#sobre-mim" class="scroll-hint" :aria-label="locale === 'pt' ? 'Rolar para baixo' : 'Scroll down'">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </a>
  </section>
</template>

<script>
  import { useI18n } from '../../i18n/index'

  export default {
    name: 'HeroSection',
    setup() {
      const { t, locale } = useI18n()
      return { t, locale }
    },
    data() {
      return {
        subtitleIndex: 0,
        intervalId: null
      }
    },
    computed: {
      currentSubtitle() {
        const subtitles = this.t('hero.subtitles')
        return subtitles[this.subtitleIndex % subtitles.length]
      }
    },
    mounted() {
      this.intervalId = setInterval(() => {
        const len = this.t('hero.subtitles').length
        this.subtitleIndex = (this.subtitleIndex + 1) % len
      }, 3000)
    },
    unmounted() {
      clearInterval(this.intervalId)
    }
  }
</script>

<style scoped>
  .hero {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 clamp(16px, 6vw, 80px);
    overflow: hidden;
  }

  .hero-decor {
    position: absolute;
    font-family: 'Staatliches', sans-serif;
    font-size: clamp(200px, 30vw, 400px);
    color: var(--color-primary);
    opacity: 0.04;
    user-select: none;
    pointer-events: none;
    line-height: 1;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-primary);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0;
    animation: fadeUp 0.6s ease both;
    animation-delay: 0ms;
  }

  h1 {
    font-family: 'Staatliches', sans-serif;
    font-size: clamp(56px, 10vw, 96px);
    line-height: 1;
    margin: 0;
    animation: fadeUp 0.6s ease both;
    animation-delay: 150ms;
  }

  .subtitle-wrapper {
    height: clamp(32px, 4vw, 44px);
    display: flex;
    align-items: center;
    animation: fadeUp 0.6s ease both;
    animation-delay: 300ms;
  }

  .subtitle {
    font-family: 'Staatliches', sans-serif;
    font-size: clamp(24px, 4vw, 40px);
    color: rgba(250, 250, 250, 0.65);
    margin: 0;
  }

  .tagline {
    font-family: 'Inter', sans-serif;
    font-size: clamp(14px, 2vw, 17px);
    color: rgba(250, 250, 250, 0.55);
    margin: 0.5rem 0 0;
    max-width: 480px;
    line-height: 1.6;
    animation: fadeUp 0.6s ease both;
    animation-delay: 450ms;
  }

  .cta-btn {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 2rem;
    background: var(--color-primary);
    color: var(--color-bg);
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    animation: fadeUp 0.6s ease both;
    animation-delay: 600ms;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(51, 255, 184, 0.3);
    animation: none;
    color: var(--color-bg);
  }

  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    color: rgba(250, 250, 250, 0.3);
    animation: fadeUp 0.6s ease both, bounce 2s ease-in-out 1s infinite;
    transition: color 0.2s;
  }

  .scroll-hint:hover {
    color: var(--color-primary);
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0) }
    50% { transform: translateY(8px) }
  }

  .fade-title-enter-active,
  .fade-title-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .fade-title-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .fade-title-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
