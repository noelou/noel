<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteNav />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -3rem;
  z-index: 100;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 600;
  transition: top 0.25s var(--spring);
}

.skip-link:focus {
  top: 1rem;
}
</style>
