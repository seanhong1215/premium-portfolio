<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import CommandMenu from '@/components/common/CommandMenu.vue'
import DockNavigation from '@/components/layout/DockNavigation.vue'
import ScrollProgress from '@/components/layout/ScrollProgress.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
</script>

<template>
  <ScrollProgress />
  <AppNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <AppFooter />
  <DockNavigation />
  <CommandMenu />
</template>
