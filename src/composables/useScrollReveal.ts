import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export function useScrollReveal(target: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const element = target.value
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(element, { autoAlpha: 1, y: 0 })
      return
    }

    gsap.set(element, { autoAlpha: 0, y: 6, force3D: true, willChange: 'opacity' })

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(element, {
            autoAlpha: 1,
            y: 0,
            duration: 0.32,
            ease: 'power1.out',
            clearProps: 'willChange,transform',
          })
          observer?.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.08 },
    )

    observer.observe(element)
  })

  onUnmounted(() => observer?.disconnect())
}
