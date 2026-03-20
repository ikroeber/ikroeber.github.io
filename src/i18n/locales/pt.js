export default {
  nav: {
    about: 'Sobre Mim',
    projects: 'Projetos',
    contact: 'Contato',
    resume: 'Currículo'
  },
  hero: {
    eyebrow: 'Olá, eu sou',
    subtitles: ['Software Engineer', 'Problem Solver', 'Full-Stack Developer'],
    tagline: 'Construindo soluções elegantes para problemas complexos.',
    cta: 'Ver meu trabalho'
  },
  about: {
    title: 'Sobre Mim',
    bio1: 'Sou um Engenheiro de Software apaixonado por criar experiências digitais que fazem a diferença. Tenho facilidade em aprender novas tecnologias e me adaptar ao ritmo do mercado.',
    bio2: 'Ofereço soluções bem projetadas, mantendo os projetos dentro do prazo e com alto padrão de qualidade. Quer conversar sobre um projeto?',
    bio2Link: 'Entre em contato!',
    techHeading: 'Tecnologias'
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Alguns projetos que desenvolvi recentemente.',
    items: [
      {
        title: 'Portfolio Pessoal',
        description:
          'Este mesmo site! Construído com Vue 3, design moderno com glassmorphism, animações CSS e totalmente responsivo.'
      },
      {
        title: 'API REST Node.js',
        description:
          'API completa com autenticação JWT, CRUD de usuários e integração com banco de dados PostgreSQL.'
      },
      {
        title: 'Dashboard React',
        description:
          'Dashboard administrativo com visualização de dados em tempo real e sistema de permissões por perfil de usuário.'
      },
      {
        title: 'CLI Tool Python',
        description:
          'Ferramenta de linha de comando para automação de tarefas repetitivas de desenvolvimento e deploy.'
      }
    ]
  },
  contact: {
    title: 'Contato',
    subtitle: 'Vamos conversar? Estou sempre aberto a novas oportunidades.',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'Email',
    emailPlaceholder: 'seu@email.com',
    message: 'Mensagem',
    messagePlaceholder: 'Como posso te ajudar?',
    send: 'Enviar mensagem',
    sending: 'Enviando...',
    successTitle: 'Mensagem enviada!',
    successText: 'Obrigado pelo contato. Retornarei em breve.',
    socialHeading: 'Me encontre em'
  },
  resume: {
    title: 'Currículo',
    download: 'Baixar Currículo (PDF)',
    experienceHeading: 'Experiência',
    educationHeading: 'Educação',
    experience: [
      {
        period: '2022 — Presente',
        title: 'Software Engineer',
        company: 'Empresa Atual',
        description:
          'Desenvolvimento de aplicações web full-stack, arquitetura de microsserviços e liderança técnica de squad. Tecnologias: Vue.js, Node.js, AWS.'
      },
      {
        period: '2020 — 2022',
        title: 'Frontend Developer',
        company: 'Empresa Anterior',
        description:
          'Criação de interfaces responsivas com React e Vue.js, integração com APIs REST e otimização de performance.'
      },
      {
        period: '2019 — 2020',
        title: 'Junior Developer',
        company: 'Primeira Empresa',
        description:
          'Início de carreira focado em desenvolvimento web com HTML, CSS, JavaScript e PHP.'
      }
    ],
    education: [
      {
        period: '2016 — 2020',
        title: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Federal',
        description:
          'Formação sólida em fundamentos de computação, algoritmos, estrutura de dados e engenharia de software.'
      }
    ]
  },
  footer: {
    copyright: 'Copyright © Igor Kroeber 2025. Todos os direitos reservados.'
  }
}
