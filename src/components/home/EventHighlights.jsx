import { useEffect, useRef, useState } from 'react'
import {
  Users,
  Mic,
  Building2,
  Presentation,
} from 'lucide-react'

function EventHighlights() {
  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'DELEGATES',
    },
    {
      icon: Mic,
      number: 30,
      suffix: '+',
      label: 'SPEAKERS',
    },
    {
      icon: Building2,
      number: 20,
      suffix: '+',
      label: 'SPONSORS & EXHIBITORS',
    },
    {
      icon: Presentation,
      number: 10,
      suffix: '+',
      label: 'WORKSHOPS',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.35,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="event-numbers"
      className="
        
        py-20
      "
    >
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="mx-auto mb-14 text-center">
          <div className="subtitle">
            Event Highlights
          </div>

          <h2 className="text-white mb-5">
            Bringing the healthcare community together
          </h2>

          <p>
            A powerful platform for learning, networking,
            partnerships and scientific exchange.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="
                  motion-card text-center
                  border border-white/15
                  bg-white/10
                  text-white
                  shadow-[0_24px_70px_rgba(0,0,0,0.18)]
                  backdrop-blur-[18px]
                "
              >
                <div className="icon-box mx-auto">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-6xl font-black tracking-[-2px]">
                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                    start={startCount}
                  />
                </h3>

                <p className="text-sm">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Counter({ end, suffix = '', start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    const duration = 2000
    const stepTime = 50
    const totalSteps = duration / stepTime
    const increment = end / totalSteps

    const timer = setInterval(() => {
      current += increment

      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end, start])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default EventHighlights