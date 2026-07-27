<script setup>
import { ref, onMounted } from 'vue'

const visibleLines = ref(0)

onMounted(() => {
  ;[400, 900, 1300, 1700].forEach((delay, i) => {
    setTimeout(() => { visibleLines.value = i + 1 }, delay)
  })
})
</script>

<template>
  <section id="home" class="min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto border-b-2 border-gray-500/30">
    <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
      <div class="md:col-span-7 space-y-6">
        <p class="font-mono text-custom-primary text-xs sm:text-sm tracking-widest flex items-center gap-2">
          <span class="inline-block w-2 h-2 bg-custom-primary rounded-full animate-ping"></span>
          IA AUTÓNOMA PARA PYMES Y PEQUEÑOS NEGOCIOS
        </p>
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          El tiempo de tu empresa
          <br class="hidden sm:inline">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-primary via-white to-custom-primary">
            no se negocia.
          </span>
        </h1>
        <p class="text-base sm:text-lg text-custom-text/80 max-w-xl">
          Las PYMEs son las que menos tiempo tienen y más ocupadas están. Integramos un agente IA a medida que entiende la lógica real de tu negocio, asume las operaciones diarias y asesora la toma de decisiones.
        </p>
        <div class="pt-2 flex flex-col sm:flex-row gap-4 font-mono text-xs sm:text-sm">
          <a
            href="#contact"
            class="text-center px-6 py-3.5 bg-custom-primary text-custom-neutral font-bold hover:bg-white transition-all neon-shadow"
          >
            [ SOLICITAR AUDITORÍA IA ]
          </a>
          <a
            href="#about"
            class="text-center px-6 py-3.5 border border-white/20 text-white hover:border-custom-primary transition-all"
          >
            > EXPLORAR CONCEPTO
          </a>
        </div>
      </div>

      <div class="md:col-span-5 mt-6 md:mt-0 animate-enter">
        <div class="bg-custom-accent border border-custom-primary/30 rounded-lg p-4 sm:p-5 font-mono text-xs shadow-2xl relative overflow-hidden group animate-glow">
          <div class="absolute inset-0 pointer-events-none z-10 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,1)_2px,rgba(0,240,255,1)_4px)]"></div>
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style="animation-delay:0.1s"></div>
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse" style="animation-delay:0.2s"></div>
            </div>
            <span class="text-white/40 text-[10px] sm:text-xs">41nd3x-core_v1.0.sh</span>
          </div>
          <div class="space-y-2.5 break-words">
            <p v-if="visibleLines >= 1" class="text-custom-primary animate-line">&gt; initializing 41ND3X agent...</p>
            <p v-if="visibleLines >= 2" class="text-white/70 animate-line">&gt; loading business logic context... <span class="text-custom-primary">[OK]</span></p>
            <p v-if="visibleLines >= 3" class="text-white/70 animate-line">&gt; connecting operations & CRM... <span class="text-custom-primary">[OK]</span></p>
            <p v-if="visibleLines >= 4" class="text-custom-primary animate-line inline">
              &gt; Status: 4 Devs / 1 Agent / 3 Pillars
            </p>
            <span v-if="visibleLines >= 4" class="inline-block w-2 h-4 bg-custom-primary animate-blink ml-0.5 align-middle"></span>
            <div v-if="visibleLines >= 4" class="p-3 bg-custom-neutral/60 border border-custom-primary/30 text-custom-primary rounded mt-4 text-[11px] leading-relaxed animate-line">
              "Optimizando agenda, respondiendo clientes y analizando margen de ventas en tiempo real."
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.neon-shadow {
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
}
.neon-shadow:hover {
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.5);
}

@keyframes enter {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes line-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 8px rgba(0, 240, 255, 0.15); }
  50%      { box-shadow: 0 0 22px rgba(0, 240, 255, 0.35); }
}

.animate-enter {
  animation: enter 0.8s ease-out forwards;
}

.animate-line {
  animation: line-in 0.4s ease-out both;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

.animate-glow:hover {
  animation-duration: 1.5s;
}
</style>