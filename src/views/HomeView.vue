<template>
  <div class="container">
  <section class="row" id="home">
      <LandingSection />
  </section>

  <section class="row" id="about">
     <AboutSection />
  </section>
  
  <section class="row" id="resume">
     <ResumeSection />
  </section>  
  <section class="row" id="projects">
     <ProjectSection />
  </section>

  <section class="row" id="contact">
     <ContactSection />
  </section>
  
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection,
   AboutSection,
   ResumeSection,
   ProjectSection,
   ContactSection
   
  }
}
</script>
