<script setup>
import { ref } from 'vue'

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1530985949952217148/GUPlSQ2GAPiLVloLt_7G-2uOh1QSTxEYZCpPuRbRcomo-p65iCF3Iu-Vd97UCM2Wdh9z'

const form = ref({
  name: '',
  email: '',
  sector: '',
  bottleneck: 'Atención al cliente / WhatsApp',
  message: '',
})

const submitting = ref(false)
const success = ref(false)

async function handleSubmit(e) {
  e.preventDefault()
  submitting.value = true

  const payload = {
    content: '🚨 **¡NUEVA SOLICITUD DE AUDITORÍA DESDE LA WEB!** @dev',
    embeds: [
      {
        title: `🏢 ${form.value.name}`,
        color: 65535,
        fields: [
          { name: '📧 Email de contacto', value: form.value.email, inline: true },
          { name: '🛠️ Sector', value: form.value.sector || 'No especificado', inline: true },
          { name: '⚠️ Principal problema', value: form.value.bottleneck, inline: false },
          { name: '💬 Notas adicionales', value: form.value.message || 'Sin mensaje adicional', inline: false },
        ],
        footer: { text: '41ND3X Web Core // Lead capture' },
        timestamp: new Date().toISOString(),
      },
    ],
  }

  try {
    const res = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      success.value = true
      form.value = {
        name: '',
        email: '',
        sector: '',
        bottleneck: 'Atención al cliente / WhatsApp',
        message: '',
      }
    } else {
      alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    }
  } catch {
    alert('Error de conexión al enviar el formulario.')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-16 sm:py-24 border-b-2 border-gray-500/30">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="bg-custom-accent border border-custom-primary/30 rounded-xl p-6 sm:p-10 neon-border">
        <div class="space-y-3 mb-8">
          <p class="font-mono text-custom-primary text-sm tracking-widest uppercase">// Conectar con el equipo dev</p>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Despliega 41ND3X en tu negocio</h2>
          <p class="text-sm text-custom-text/70">
            Cuéntanos brevemente cómo funciona tu PYME y te prepararemos una demo adaptada a tu lógica de trabajo.
          </p>
        </div>

        <form @submit="handleSubmit" class="space-y-6 font-mono text-xs sm:text-sm">
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-white/80 mb-2">&gt; Nombre / Empresa</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Ej. Taller Mecánico Silva"
                class="w-full bg-custom-neutral/60 border border-gray-500/30 rounded p-3 text-white focus:border-custom-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label class="block text-white/80 mb-2">&gt; Email de contacto</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="contacto@tuempresa.com"
                class="w-full bg-custom-neutral/60 border border-gray-500/30 rounded p-3 text-white focus:border-custom-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-white/80 mb-2">&gt; Sector de Actividad</label>
              <input
                v-model="form.sector"
                type="text"
                placeholder="Ej. Comercio, Servicios, Asesoría"
                class="w-full bg-custom-neutral/60 border border-gray-500/30 rounded p-3 text-white focus:border-custom-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label class="block text-white/80 mb-2">&gt; Principal Cuello de Botella</label>
              <select
                v-model="form.bottleneck"
                class="w-full bg-custom-neutral/60 border border-gray-500/30 rounded p-3 text-white focus:border-custom-primary focus:outline-none transition-colors"
              >
                <option value="Atención al cliente / WhatsApp">Atención al cliente / WhatsApp</option>
                <option value="Gestión de citas y agenda">Gestión de citas y agenda</option>
                <option value="Facturación y correo diario">Facturación y correo diario</option>
                <option value="Falta general de tiempo (Todo)">Falta general de tiempo (Todo)</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-white/80 mb-2">&gt; Mensaje / Notas adicionales</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Explícanos brevemente qué procesos te quitan más tiempo..."
              class="w-full bg-custom-neutral/60 border border-gray-500/30 rounded p-3 text-white focus:border-custom-primary focus:outline-none transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full py-4 bg-custom-primary text-custom-neutral font-extrabold uppercase tracking-widest hover:bg-white transition-all duration-300 neon-shadow disabled:opacity-50"
          >
            {{ submitting ? '[ PROCESANDO... ]' : '[ ENVIAR SOLICITUD DE AUDITORÍA ]' }}
          </button>

          <p
            v-if="success"
            class="text-center text-custom-primary font-bold animate-pulse"
          >
            ✓ Solicitud enviada con éxito. El equipo de 41ND3X se pondrá en contacto en breve.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.neon-border {
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2), inset 0 0 10px rgba(0, 240, 255, 0.05);
}
.neon-shadow {
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
}
</style>
