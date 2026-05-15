import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import speaker1 from '../../assets/images/speakers/1.jpg'
import speaker2 from '../../assets/images/speakers/2.jpg'
import speaker3 from '../../assets/images/speakers/3.jpg'
import speaker4 from '../../assets/images/speakers/4.jpg'

gsap.registerPlugin(ScrollTrigger)

function Speakers() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const speakers = [
    {
      image: speaker1,
      tag: 'Keynote',
      name: 'Dr. Speaker Name',
      role: 'Family Medicine Consultant',
    },
    {
      image: speaker2,
      tag: 'Panelist',
      name: 'Dr. Speaker Name',
      role: 'Public Health Specialist',
    },
    {
      image: speaker3,
      tag: 'Workshop',
      name: 'Dr. Speaker Name',
      role: 'Healthcare Researcher',
    },
    {
      image: speaker4,
      tag: 'Speaker',
      name: 'Dr. Speaker Name',
      role: 'Primary Care Expert',
    },
  ]

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 120,
        scale: 0.85,
        rotateY: 25,
        filter: 'blur(20px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        filter: 'blur(0px)',
        duration: 0.50,
        stagger: 0.20,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, sectionRef)

  return () => ctx.revert()
}, [])

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} id="speakers" className="bg-white py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="subtitle">
              Featured Speakers
            </div>

            <h2>
              Meet the voices shaping healthcare
            </h2>
          </div>

          <div className="lg:text-right">
            <a href="#" className="btn btn-main">
              View All Speakers
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div
              ref={addCardRef}
              key={index}
              className="
                group relative h-full overflow-hidden
                rounded-[30px]
                border border-[#061a35]/5
                bg-white p-4
                shadow-[0_18px_55px_rgba(6,26,53,0.08)]
                transition-all duration-300
                hover:-translate-y-2.5
                hover:shadow-[0_28px_70px_rgba(6,26,53,0.14)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -right-13.75 -top-13.75
                  h-40 w-40
                  rounded-full
                  bg-[radial-gradient(circle,rgba(0,194,184,0.13),transparent_70%)]
                  transition-all duration-300
                  group-hover:scale-150
                "
              />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={speaker.image}
                  loading="lazy"
                  alt={speaker.name}
                  className="
                    h-65 w-full object-cover
                    transition-all duration-500
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    absolute bottom-4 left-4
                    rounded-full bg-white/80
                    px-3 py-2
                    text-xs font-black text-teal-700
                    backdrop-blur-2xl
                  "
                >
                  {speaker.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5">
                <h5 className="mb-1 text-lg font-bold text-[#061a35]">
                  {speaker.name}
                </h5>

                <p className="mb-0 text-slate-500">
                  {speaker.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers