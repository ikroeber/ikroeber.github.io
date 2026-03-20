<template>
  <section id="curriculo" ref="sectionRef">
    <div class="container">
      <SectionTitle :title="t('resume.title')" class="reveal" />

      <div class="cv-btn-wrap reveal">
        <a href="#" class="cv-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {{ t('resume.download') }}
        </a>
      </div>

      <div class="timeline-block reveal">
        <h3 class="timeline-heading">{{ t('resume.experienceHeading') }}</h3>
        <div class="timeline">
          <div v-for="exp in t('resume.experience')" :key="exp.title" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">{{ exp.period }}</span>
              <h4 class="timeline-title">{{ exp.title }}</h4>
              <span class="timeline-company">{{ exp.company }}</span>
              <p class="timeline-desc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-block reveal">
        <h3 class="timeline-heading">{{ t('resume.educationHeading') }}</h3>
        <div class="timeline">
          <div v-for="edu in t('resume.education')" :key="edu.title" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">{{ edu.period }}</span>
              <h4 class="timeline-title">{{ edu.title }}</h4>
              <span class="timeline-company">{{ edu.institution }}</span>
              <p class="timeline-desc">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { useReveal } from '../../composables/useReveal'
  import { useI18n } from '../../i18n/index'
  import SectionTitle from '../shared/SectionTitle.vue'

  export default {
    name: 'ResumeSection',
    components: { SectionTitle },
    setup() {
      const sectionRef = ref(null)
      useReveal(sectionRef)
      const { t } = useI18n()
      return { sectionRef, t }
    }
  }
</script>

<style scoped>
  section {
    padding: var(--section-padding);
    scroll-margin-top: var(--header-height);
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  .cv-btn-wrap {
    margin-bottom: 3rem;
  }

  .cv-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    border: 2px solid var(--color-primary);
    border-radius: 6px;
    color: var(--color-primary);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    background: transparent;
    transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .cv-btn:hover {
    background: var(--color-primary);
    color: var(--color-bg);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 135, 58, 0.2);
    animation: none;
  }

  .timeline-block {
    margin-bottom: 3rem;
  }

  .timeline-heading {
    font-family: 'Staatliches', sans-serif;
    font-size: 28px;
    color: var(--color-text);
    margin: 0 0 1.5rem;
  }

  .timeline {
    border-left: 2px solid rgba(201, 135, 58, 0.2);
    padding-left: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .timeline-item {
    position: relative;
  }

  .timeline-dot {
    position: absolute;
    left: calc(-1.75rem - 6px);
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-primary);
    box-shadow: 0 0 8px rgba(201, 135, 58, 0.45);
  }

  .timeline-date {
    font-family: 'Staatliches', sans-serif;
    font-size: 15px;
    letter-spacing: 0.06em;
    color: var(--color-primary);
    text-transform: uppercase;
  }

  .timeline-title {
    font-family: 'Staatliches', sans-serif;
    font-size: 24px;
    color: var(--color-text);
    margin: 0.25rem 0 0;
  }

  .timeline-company {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-warning);
  }

  .timeline-desc {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: rgba(240, 235, 227, 0.58);
    margin: 0.5rem 0 0;
  }
</style>
