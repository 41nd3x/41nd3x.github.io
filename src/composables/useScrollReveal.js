import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.1) {
  const el = ref(null)

  let observer = null

  onMounted(() => {
    if (!el.value) return

    el.value.classList.add('reveal-hidden')

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.value?.classList.add('revealed')
          observer?.unobserve(el.value)
        }
      },
      { threshold }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { el }
}
