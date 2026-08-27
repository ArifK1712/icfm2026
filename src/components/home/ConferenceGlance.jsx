import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CalendarDays, Mic, Presentation, Wrench } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const conferenceStats = [
  { value: 35, display: '35', label: 'Speakers', icon: Mic },
  { value: 8, display: '08', label: 'Sessions', icon: CalendarDays },
  { value: 30, display: '30', label: 'Lectures', icon: Presentation },
  { value: 4, display: '04', label: 'Workshops', icon: Wrench },
]

function ConferenceGlance() {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const statRefs = useRef([])
  const numberRefs = useRef([])

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return undefined

    numberRefs.current.forEach((numberElement) => {
      if (numberElement) numberElement.textContent = '00'
    })

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      timeline.from(
        panelRef.current,
        {
          autoAlpha: 0,
          y: 20,
          duration: 0.75,
          ease: 'power3.out',
        }
      )
        .from(
          statRefs.current,
          {
            autoAlpha: 0,
            y: 12,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.42'
        )

      conferenceStats.forEach((stat, index) => {
        const counter = { value: 0 }

        timeline.to(
          counter,
          {
            value: stat.value,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
              const numberElement = numberRefs.current[index]
              if (numberElement) {
                numberElement.textContent = String(
                  Math.round(counter.value)
                ).padStart(2, '0')
              }
            },
          },
          0.35 + index * 0.08
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 text-white sm:py-20 bg-[#032f34]/88"
    >
      <div className="pointer-events-none absolute inset-x-[20%] top-1/2 h-36 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(37,231,220,0.09),transparent_70%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div
          ref={panelRef}
          className="overflow-hidden"
        >
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {conferenceStats.map((stat, index) => {
              const Icon = stat.icon
              const mobileVerticalDivider =
                index === 0 || index === 2
                  ? 'after:absolute after:bottom-5 after:right-0 after:top-5 after:w-px after:bg-linear-to-b after:from-transparent after:via-[#25e7dc]/22 after:to-transparent'
                  : ''
              const mobileHorizontalDivider =
                index < 2
                  ? 'before:absolute before:bottom-0 before:left-5 before:right-5 before:h-px before:bg-linear-to-r before:from-transparent before:via-[#25e7dc]/22 before:to-transparent md:before:hidden'
                  : ''
              const desktopDivider =
                index < 3
                  ? 'md:after:absolute md:after:bottom-7 md:after:right-0 md:after:top-7 md:after:w-px md:after:bg-linear-to-b md:after:from-transparent md:after:via-[#25e7dc]/22 md:after:to-transparent'
                  : 'md:after:hidden'

              return (
                <li
                  key={stat.label}
                  ref={(element) => {
                    statRefs.current[index] = element
                  }}
                  aria-label={`${stat.display} ${stat.label}`}
                  className={`group relative flex min-h-40 flex-col items-center justify-center text-center transition-colors duration-300 lg:min-h-48 lg:hover:bg-[radial-gradient(circle,rgba(37,231,220,0.06),transparent_68%)] ${mobileVerticalDivider} ${mobileHorizontalDivider} ${desktopDivider}`}
                >
                  <div className="mb-10 flex items-center justify-center" aria-hidden="true">
                    <Icon
                      className="h-14 w-14 text-[#25e7dc]/70 transition-all duration-300 lg:group-hover:text-[#7ef7ef] lg:group-hover:drop-shadow-[0_0_8px_rgba(37,231,220,0.22)]"
                      strokeWidth={1.2}
                    />
                  </div>

                  <span
                    ref={(element) => {
                      numberRefs.current[index] = element
                    }}
                    aria-hidden="true"
                    className="text-[42px] font-black leading-none tracking-[-0.04em] text-[#efffff] transition-all duration-300 sm:text-5xl md:text-[52px] lg:text-[60px] lg:group-hover:-translate-y-0.5 lg:group-hover:text-white"
                  >
                    {stat.display}
                  </span>

                  <span className="mt-5 text-lg uppercase tracking-[0.2em] text-[#bceeea]/68">
                    {stat.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ConferenceGlance
