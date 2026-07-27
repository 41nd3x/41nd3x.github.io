<script setup></script>

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

      <div class="md:col-span-5 mt-6 md:mt-0">
        <div class="bg-custom-accent border border-custom-primary/30 rounded-lg p-4 sm:p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-white/40 text-[10px] sm:text-xs">41nd3x-core_v1.0.sh</span>
          </div>
          <div class="space-y-2.5 break-words">
            <p class="text-custom-primary">&gt; initializing 41ND3X agent...</p>
            <p class="text-white/70">&gt; loading business logic context... <span class="text-custom-primary">[OK]</span></p>
            <p class="text-white/70">&gt; connecting operations & CRM... <span class="text-custom-primary">[OK]</span></p>
            <p class="text-custom-primary">&gt; Status: 4 Devs / 1 Agent / 3 Pillars</p>
            <div class="p-3 bg-custom-neutral/60 border border-custom-primary/30 text-custom-primary rounded mt-4 text-[11px] leading-relaxed">
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
</style>