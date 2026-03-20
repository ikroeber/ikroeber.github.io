<template>
  <section id="contato" ref="sectionRef">
    <div class="container">
      <SectionTitle
        title="Contato"
        subtitle="Vamos conversar? Estou sempre aberto a novas oportunidades."
        class="reveal"
      />
      <div class="grid">
        <div class="form-col reveal">
          <Transition name="fade" mode="out-in">
            <form v-if="!submitted" key="form" @submit.prevent="handleSubmit" novalidate>
              <div class="field">
                <label for="name">Nome</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  autocomplete="name"
                />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  autocomplete="email"
                />
              </div>
              <div class="field">
                <label for="message">Mensagem</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Como posso te ajudar?"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn" :disabled="sending">
                {{ sending ? 'Enviando...' : 'Enviar mensagem' }}
              </button>
            </form>
            <div v-else key="success" class="success-msg">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Mensagem enviada!</h3>
              <p>Obrigado pelo contato. Retornarei em breve.</p>
            </div>
          </Transition>
        </div>

        <div class="social-col reveal">
          <h3 class="social-heading">Me encontre em</h3>
          <ul class="social-list">
            <li v-for="social in socials" :key="social.label">
              <a :href="social.url" target="_blank" rel="noopener" class="social-link">
                <span class="social-icon" v-html="social.icon"></span>
                <span>{{ social.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { useReveal } from '../../composables/useReveal'
  import SectionTitle from '../shared/SectionTitle.vue'

  const githubIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
  const linkedinIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  const emailIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`

  export default {
    name: 'ContactSection',
    components: { SectionTitle },
    setup() {
      const sectionRef = ref(null)
      useReveal(sectionRef)
      return { sectionRef }
    },
    data() {
      return {
        form: { name: '', email: '', message: '' },
        submitted: false,
        sending: false,
        socials: [
          { label: 'GitHub', url: 'https://github.com/ikroeber', icon: githubIcon },
          { label: 'LinkedIn', url: 'https://linkedin.com/in/igor-kroeber', icon: linkedinIcon },
          { label: 'igor.kroeber@gmail.com', url: 'mailto:igor.kroeber@gmail.com', icon: emailIcon }
        ]
      }
    },
    methods: {
      async handleSubmit() {
        if (!this.form.name || !this.form.email || !this.form.message) return
        this.sending = true
        await new Promise((resolve) => setTimeout(resolve, 800))
        this.sending = false
        this.submitted = true
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
    grid-template-columns: 1fr 340px;
    gap: 4rem;
    align-items: start;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  label {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: rgba(250, 250, 250, 0.65);
    letter-spacing: 0.04em;
  }

  input,
  textarea {
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    border-radius: 8px;
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: vertical;
    width: 100%;
    box-sizing: border-box;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(250, 250, 250, 0.25);
  }

  input:focus,
  textarea:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(51, 255, 184, 0.15);
  }

  .submit-btn {
    background: var(--color-primary);
    color: var(--color-bg);
    border: none;
    border-radius: 6px;
    padding: 0.75rem 2rem;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(51, 255, 184, 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .success-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 2rem;
    color: var(--color-primary);
    gap: 0.75rem;
  }

  .success-msg h3 {
    font-size: 28px;
    margin: 0;
    color: var(--color-text);
  }

  .success-msg p {
    font-family: 'Inter', sans-serif;
    color: rgba(250, 250, 250, 0.65);
    margin: 0;
  }

  .social-heading {
    font-family: 'Staatliches', sans-serif;
    font-size: 28px;
    margin: 0 0 1.25rem;
  }

  .social-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(250, 250, 250, 0.65);
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    transition: color 0.2s;
  }

  .social-link:hover {
    color: var(--color-primary);
    animation: none;
  }

  .social-icon {
    display: flex;
    align-items: center;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
