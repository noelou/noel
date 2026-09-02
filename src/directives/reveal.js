// v-reveal: fades + slides an element into view the first time it hits the viewport.
// Respects prefers-reduced-motion (falls back to an instant show).

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer

function ensureObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  return observer
}

export default {
  mounted(el, binding) {
    if (prefersReducedMotion) {
      el.classList.add('is-revealed')
      return
    }
    el.classList.add('reveal')
    if (binding.value != null) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    ensureObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
