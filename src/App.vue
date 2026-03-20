<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Content
    }
  }
</script>

<style src="./vendor/sanitize.css"></style>

<style>
  :root {
    --color-bg: #0A0A0B;
    --color-primary: #C9873A;
    --color-warning: #9E7B6B;
    --color-text: #F0EBE3;
    --color-text-muted: #7A7068;
    --color-glass: rgba(240, 235, 227, 0.03);
    --color-glass-border: rgba(240, 235, 227, 0.07);
    --section-padding: clamp(64px, 10vw, 120px) clamp(16px, 6vw, 80px);
    --header-height: 5em;
  }

  html {
    scroll-behavior: smooth;
    min-height: 100%;
  }

  body {
    background-color: var(--color-bg);
    background-image:
      radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201, 135, 58, 0.07) 0%, transparent 70%),
      radial-gradient(ellipse 55% 45% at 85% 92%, rgba(201, 135, 58, 0.04) 0%, transparent 60%);
    min-height: 100%;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-family: 'Staatliches', sans-serif;
    font-weight: 400;
  }

  #app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  @keyframes linkHover {
    0% {
      color: rgba(240, 235, 227, 0.5);
      transform: translateY(0)
    }

    100% {
      color: var(--color-primary);
      transform: translateY(-0.2em)
    }
  }

  nav a {
    color: rgba(240, 235, 227, 0.5);
    text-decoration: none;
    position: relative;
    transition: color 0.25s, transform 0.25s;
    display: inline-block;
  }

  nav a:hover {
    animation: linkHover 0.25s both;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
</style>
