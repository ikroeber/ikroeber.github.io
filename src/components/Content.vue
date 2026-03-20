<template>
  <main id="contentWrapper">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <ResumeSection />
  </main>
</template>

<script>
  import HeroSection from './sections/HeroSection.vue'
  import AboutSection from './sections/AboutSection.vue'
  import ProjectsSection from './sections/ProjectsSection.vue'
  import ContactSection from './sections/ContactSection.vue'
  import ResumeSection from './sections/ResumeSection.vue'

  export default {
    components: {
      HeroSection,
      AboutSection,
      ProjectsSection,
      ContactSection,
      ResumeSection
    }
  }
</script>

<style>
  #contentWrapper {
    width: 100%;
  }
</style>
