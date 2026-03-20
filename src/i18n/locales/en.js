export default {
  nav: {
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resume'
  },
  hero: {
    eyebrow: "Hello, I'm",
    subtitles: ['Software Engineer', 'Problem Solver', 'Full-Stack Developer'],
    tagline: 'Building elegant solutions for complex problems.',
    cta: 'See my work'
  },
  about: {
    title: 'About Me',
    bio1: "I'm a Software Engineer passionate about creating digital experiences that make a difference. I enjoy learning new technologies and adapting to the market pace.",
    bio2: 'I deliver well-designed solutions while keeping projects on schedule and to a high standard. Want to talk about a project?',
    bio2Link: 'Get in touch!',
    techHeading: 'Technologies'
  },
  projects: {
    title: 'Projects',
    subtitle: 'Some projects I have developed recently.',
    items: [
      {
        title: 'Personal Portfolio',
        description:
          'This very site! Built with Vue 3, modern glassmorphism design, CSS animations and fully responsive.'
      },
      {
        title: 'Node.js REST API',
        description:
          'Full API with JWT authentication, user CRUD and PostgreSQL database integration.'
      },
      {
        title: 'React Dashboard',
        description:
          'Admin dashboard with real-time data visualization and role-based permission system.'
      },
      {
        title: 'Python CLI Tool',
        description:
          'Command-line tool to automate repetitive development and deployment tasks.'
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's talk! I'm always open to new opportunities.",
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'How can I help you?',
    send: 'Send message',
    sending: 'Sending...',
    successTitle: 'Message sent!',
    successText: 'Thank you for reaching out. I will get back to you soon.',
    socialHeading: 'Find me on'
  },
  resume: {
    title: 'Resume',
    download: 'Download Resume (PDF)',
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    experience: [
      {
        period: '2022 — Present',
        title: 'Software Engineer',
        company: 'Current Company',
        description:
          'Full-stack web application development, microservices architecture and technical squad leadership. Technologies: Vue.js, Node.js, AWS.'
      },
      {
        period: '2020 — 2022',
        title: 'Frontend Developer',
        company: 'Previous Company',
        description:
          'Building responsive UIs with React and Vue.js, REST API integration and performance optimization.'
      },
      {
        period: '2019 — 2020',
        title: 'Junior Developer',
        company: 'First Company',
        description:
          'Career start focused on web development with HTML, CSS, JavaScript and PHP.'
      }
    ],
    education: [
      {
        period: '2016 — 2020',
        title: 'Bachelor of Computer Science',
        institution: 'Federal University',
        description:
          'Solid grounding in computer science fundamentals, algorithms, data structures and software engineering.'
      }
    ]
  },
  footer: {
    copyright: 'Copyright © Igor Kroeber 2025. All rights reserved.'
  }
}
