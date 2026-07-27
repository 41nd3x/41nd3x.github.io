<script setup>
const pilars = [
  {
    number: '01',
    title: 'Asistencia Operativa',
    description:
      'Atención automatizada al cliente, filtrado e interpretación de correos, gestión de citas y emisión de facturación básica. Liberación inmediata de carga diaria.',
    color: 'primary',
  },
  {
    number: '02',
    title: 'Lógica de Negocio',
    description:
      'No es una IA genérica. Entiende tus catálogos, tus precios, tus reglas internas y tus flujos de trabajo. Habla e interpreta los datos exactamente como tú lo harías.',
    color: 'secondary',
  },
  {
    number: '03',
    title: 'Asesoría Estratégica',
    description:
      'Un copiloto de dirección. Analiza la evolución de los datos en tiempo real, detecta cuellos de botella y te sugiere decisiones clave para optimizar costes.',
    color: 'tertiary',
  },
]
</script>

<template>
  <section class="py-24 border-b-2 border-gray-500/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <p class="font-mono text-custom-primary text-sm tracking-widest uppercase">// Arquitectura de producto</p>
        <h2 class="text-4xl font-bold text-white">¿Por qué el "3" en 41ND3X?</h2>
        <p class="text-custom-text/70">
          Un enfoque en tres capas diseñado específicamente para salvar la falta de tiempo de las PYMEs.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(pilar, i) in pilars"
          :key="i"
          class="group p-8 border border-gray-500/20 bg-custom-accent rounded-lg space-y-4 transition-all duration-300"
          :class="{
            'neon-primary': pilar.color === 'primary',
            'neon-secondary': pilar.color === 'secondary',
            'neon-tertiary': pilar.color === 'tertiary',
          }"
        >
          <div
            class="font-mono text-4xl font-extrabold opacity-50 group-hover:opacity-100 transition-opacity"
            :class="{
              'text-custom-primary': pilar.color === 'primary',
              'text-custom-secondary': pilar.color === 'secondary',
              'text-custom-tertiary': pilar.color === 'tertiary',
            }"
          >
            {{ pilar.number }}
          </div>
          <h3 class="text-xl font-bold text-white text-shadow-none">{{ pilar.title }}</h3>
          <p class="text-sm text-custom-text/80 leading-relaxed text-shadow-none">{{ pilar.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
