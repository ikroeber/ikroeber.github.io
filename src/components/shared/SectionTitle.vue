<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <span class="accent-bar"></span>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped>
  .section-title {
    margin-bottom: 3rem;
  }

  h2 {
    font-family: 'Staatliches', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    color: var(--color-text);
    margin: 0 0 0.5rem;
    line-height: 1;
  }

  .accent-bar {
    display: block;
    width: 48px;
    height: 3px;
    background: var(--color-primary);
    border-radius: 2px;
  }

  .subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: rgba(250, 250, 250, 0.65);
    margin: 0.75rem 0 0;
    line-height: 1.6;
  }
</style>
