<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-custom-neutral/90 backdrop-blur-md border-b border-custom-primary/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <img src="@/assets/logo_41nd3x.webp" alt="41ND3X" class="h-8" />
        <span class="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 border border-custom-secondary text-custom-secondary rounded-sm before:inline-block before:w-1.5 before:h-1.5 before:bg-custom-secondary before:rounded-full before:animate-pulse before:mr-1.5 before:align-middle">
          SYS_ONLINE
        </span>
      </a>

      <div class="hidden md:flex gap-8 font-mono text-xs tracking-wider">
        <a href="#home" class="hover:text-custom-primary transition-colors">// INICIO</a>
        <a href="#about" class="hover:text-custom-primary transition-colors">// ORIGEN</a>
        <a href="#pilars" class="hover:text-custom-primary transition-colors">// ARQUITECTURA [3]</a>
        <a href="#contact" class="hover:text-custom-primary transition-colors">// CONTACTO</a>
      </div>

      <a
        href="#contact"
        class="hidden md:inline-block font-mono text-xs font-bold uppercase tracking-widest px-4 py-2 border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-custom-neutral transition-all duration-300"
      >
        [ DESPLEGAR AGENTE ]
      </a>

      <button @click="toggleMenu" class="md:hidden text-custom-primary p-2" aria-label="Menú">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <Transition
      enter-from-class="max-h-0 opacity-0"
      enter-active-class="overflow-hidden transition-all duration-300 ease-in-out"
      enter-to-class="max-h-60 opacity-100"
      leave-from-class="max-h-60 opacity-100"
      leave-active-class="overflow-hidden transition-all duration-300 ease-in-out"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="menuOpen" class="md:hidden bg-custom-accent border-b border-custom-primary/20 px-6 py-4 font-mono text-sm space-y-4">
        <a @click="closeMenu" href="#about" class="block text-white hover:text-custom-primary">// ORIGEN</a>
        <a @click="closeMenu" href="#pilars" class="block text-white hover:text-custom-primary">// ARQUITECTURA [3]</a>
        <a @click="closeMenu" href="#contact" class="block text-white hover:text-custom-primary">// CONTACTO</a>
        <a @click="closeMenu" href="#contact" class="block text-center py-2 border border-custom-primary text-custom-primary font-bold uppercase text-xs">
          [ DESPLEGAR AGENTE ]
        </a>
      </div>
    </Transition>
  </nav>

  <div class="h-16"></div>
</template>
