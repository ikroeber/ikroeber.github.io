<template>
  <section id="sobre-mim" ref="sectionRef">
    <div class="container">
      <div class="grid">
        <div class="photo-col reveal">
          <div class="photo-frame">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-icon">
              <circle cx="60" cy="45" r="22" stroke="rgba(201,135,58,0.45)" stroke-width="2" fill="rgba(201,135,58,0.08)"/>
              <path d="M18 105c0-23.196 18.804-42 42-42s42 18.804 42 42" stroke="rgba(201,135,58,0.45)" stroke-width="2" fill="rgba(201,135,58,0.05)"/>
            </svg>
          </div>
        </div>

        <div class="text-col">
          <SectionTitle :title="t('about.title')" class="reveal" />
          <p class="bio reveal">{{ t('about.bio1') }}</p>
          <p class="bio reveal">
            {{ t('about.bio2') }}
            <a href="#contato">{{ t('about.bio2Link') }}</a>
          </p>

          <h3 class="skills-heading reveal">{{ t('about.techHeading') }}</h3>
          <div class="skills-grid reveal">
            <SkillBadge v-for="skill in skills" :key="skill" :label="skill" />
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
  import SkillBadge from '../shared/SkillBadge.vue'

  export default {
    name: 'AboutSection',
    components: { SectionTitle, SkillBadge },
    setup() {
      const sectionRef = ref(null)
      useReveal(sectionRef)
      const { t } = useI18n()
      return { sectionRef, t }
    },
    data() {
      return {
        skills: [
          'Vue.js', 'React', 'Node.js', 'TypeScript', 'JavaScript',
          'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'REST APIs'
        ]
      }
    }
  }
</script>

<style scoped>
  section {
    padding: var(--section-padding);
    scroll-margin-top: var(--header-height);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 4rem;
    align-items: start;
  }

  .photo-col {
    display: flex;
    justify-content: center;
  }

  .photo-frame {
    width: 260px;
    height: 260px;
    border-radius: 16px;
    border: 2px solid rgba(201, 135, 58, 0.25);
    background: rgba(201, 135, 58, 0.04);
    box-shadow: 0 0 48px rgba(201, 135, 58, 0.09);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .avatar-icon {
    width: 120px;
    height: 120px;
  }

  .bio {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(240, 235, 227, 0.78);
    margin: 0 0 1rem;
  }

  .bio a {
    color: var(--color-primary);
    text-decoration: none;
    border-bottom: 1px solid rgba(201, 135, 58, 0.35);
    transition: border-color 0.2s;
  }

  .bio a:hover {
    border-color: var(--color-primary);
  }

  .skills-heading {
    font-family: 'Staatliches', sans-serif;
    font-size: 24px;
    margin: 1.5rem 0 0.75rem;
    color: var(--color-text);
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .photo-col {
      order: -1;
    }

    .photo-frame {
      width: 180px;
      height: 180px;
    }
  }
</style>
