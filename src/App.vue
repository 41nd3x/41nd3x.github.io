<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import FooterComponent from './components/layout/FooterComponent.vue';
import HeroSection from './components/content/HeroSection.vue';
import AboutSection from './components/content/AboutSection.vue';
import AboutSection2 from './components/content/AboutSection2.vue';
import ContactSection from './components/content/ContactSection.vue';
</script>

<template>
  <HeaderComponent />
  <main>
    <HeroSection />
    <AboutSection />
    <AboutSection2 />
    <ContactSection />
  </main>
  <FooterComponent />
</template>
