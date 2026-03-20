<template>
  <section id="projetos" ref="sectionRef">
    <div class="container">
      <SectionTitle
        title="Projetos"
        subtitle="Alguns projetos que desenvolvi recentemente."
        class="reveal"
      />
      <div class="grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="card reveal"
          :style="{ transitionDelay: index * 100 + 'ms' }"
        >
          <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.description }}</p>
          <div class="card-tags">
            <SkillBadge
              v-for="tag in project.tags"
              :key="tag"
              :label="tag"
              variant="small"
            />
          </div>
          <div class="card-links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              aria-label="Ver no GitHub"
              class="icon-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              aria-label="Ver demo"
              class="icon-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { useReveal } from '../../composables/useReveal'
  import SectionTitle from '../shared/SectionTitle.vue'
  import SkillBadge from '../shared/SkillBadge.vue'

  export default {
    name: 'ProjectsSection',
    components: { SectionTitle, SkillBadge },
    setup() {
      const sectionRef = ref(null)
      useReveal(sectionRef)
      return { sectionRef }
    },
    data() {
      return {
        projects: [
          {
            title: 'Portfolio Pessoal',
            description:
              'Este mesmo site! Construído com Vue 3, design moderno com glassmorphism, animações CSS e totalmente responsivo.',
            tags: ['Vue 3', 'CSS3', 'GitHub Pages'],
            github: 'https://github.com/ikroeber/ikroeber.github.io',
            demo: 'https://ikroeber.github.io'
          },
          {
            title: 'API REST Node.js',
            description:
              'API completa com autenticação JWT, CRUD de usuários e integração com banco de dados PostgreSQL.',
            tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            github: 'https://github.com/ikroeber',
            demo: null
          },
          {
            title: 'Dashboard React',
            description:
              'Dashboard administrativo com visualização de dados em tempo real e sistema de permissões por perfil de usuário.',
            tags: ['React', 'TypeScript', 'Chart.js'],
            github: 'https://github.com/ikroeber',
            demo: null
          },
          {
            title: 'CLI Tool Python',
            description:
              'Ferramenta de linha de comando para automação de tarefas repetitivas de desenvolvimento e deploy.',
            tags: ['Python', 'Click', 'Docker'],
            github: 'https://github.com/ikroeber',
            demo: null
          }
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .card {
    position: relative;
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    border-radius: 12px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    cursor: default;
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(51, 255, 184, 0.4);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  .card-number {
    position: absolute;
    top: 1.25rem;
    right: 1.5rem;
    font-family: 'Staatliches', sans-serif;
    font-size: 48px;
    color: var(--color-primary);
    opacity: 0.12;
    line-height: 1;
  }

  .card-title {
    font-family: 'Staatliches', sans-serif;
    font-size: 26px;
    margin: 0;
    color: var(--color-text);
    line-height: 1.1;
  }

  .card-desc {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: rgba(250, 250, 250, 0.65);
    margin: 0;
    flex: 1;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .card-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }

  .icon-link {
    color: rgba(250, 250, 250, 0.45);
    transition: color 0.2s;
    display: flex;
    align-items: center;
  }

  .icon-link:hover {
    color: var(--color-primary);
    animation: none;
  }
</style>
