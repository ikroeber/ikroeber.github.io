import { onMounted, onUnmounted } from 'vue'

export function useReveal(targetRef) {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    if (targetRef.value) {
      const elements = targetRef.value.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
