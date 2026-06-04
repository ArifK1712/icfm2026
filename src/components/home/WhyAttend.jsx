import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  HeartPulse,
  Hospital,
  UserRound,
  ClipboardPlus,
  HeartHandshake,
  Building2,
  Accessibility,
  HousePlus,
  Pill,
  IdCard,
  Landmark,
  Network,
  ShieldCheck,
  House,
  HeartPlus,
  HouseHeart,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function WhyAttend() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  const cards = [
    {
      icon: HeartPulse,
      title: 'Family Medicine Physicians',
      desc: 'For family medicine specialists focused on community health, preventive care and primary healthcare improvement.',
    },
    {
      icon: Hospital,
      title: 'Internal Medicine Physicians',
      desc: 'For internal medicine doctors working across chronic care, diagnosis, treatment and patient management.',
    },
    {
      icon: UserRound,
      title: 'Physician Assistants',
      desc: 'For physician assistants involved in clinical support, patient care coordination and healthcare delivery.',
    },
    {
      icon: ClipboardPlus,
      title: 'Nurse Practitioners',
      desc: 'For nurse practitioners contributing to advanced clinical care, assessment, treatment and patient education.',
    },
    {
      icon: HeartHandshake,
      title: 'Nurses',
      desc: 'For nursing professionals supporting patient care, health promotion, care quality and clinical operations.',
    },
    {
      icon: Building2,
      title: 'Medical Clinics',
      desc: 'For medical clinics seeking updates, partnerships and practical insights in primary healthcare services.',
    },
    {
      icon: Accessibility,
      title: 'Rehabilitation Centers',
      desc: 'For medical clinics seeking updates, partnerships and practical insights in primary healthcare services.',
    },
    {
      icon: HousePlus,
      title: 'Primary Care Clinics',
      desc: 'For primary care clinics focused on improving patient access, clinical workflows and preventive healthcare.',
    },
    {
      icon: Pill,
      title: 'Pharmaceutical Companies',
      desc: 'For companies offering family medicine products such as vaccination, diabetes, cancer and chronic care solutions.',
    },
    {
      icon: IdCard,
      title: 'General Practice Providers',
      desc: 'For general practice and primary care providers serving patients across everyday healthcare needs.',
    },
    {
      icon: Landmark,
      title: 'Ministry of Health Officials',
      desc: 'For government and health officials involved in policy, planning, healthcare quality and public health programs.',
    },
    {
      icon: Network,
      title: 'Public & Private Hospitals',
      desc: 'For hospitals aiming to strengthen services, partnerships, clinical excellence and healthcare transformation.',
    },
    {
      icon: ShieldCheck,
      title: 'Health Center Managers',
      desc: 'For managers responsible for healthcare operations, service quality, teams and patient experience.',
    },
    {
      icon: House,
      title: 'Health Insurance Companies',
      desc: 'For insurance organizations working with healthcare providers, patient coverage and care access models.',
    },
    {
      icon: HouseHeart,
      title: 'Home Health Care Officials',
      desc: 'For home healthcare professionals and officials supporting patient care beyond hospitals and clinics.',
    },
    {
      icon: HeartPlus,
      title: 'Specialized Medical Companies',
      desc: 'For specialized medical and health companies in the Kingdom of Saudi Arabia seeking visibility and collaboration.',
    },
  ]

useLayoutEffect(() => {
  const section = sectionRef.current
  const track = trackRef.current

  if (!section || !track) return

  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        const moveDistance = Math.max(
          0,
          track.scrollWidth - section.offsetWidth
        )

        const animation = gsap.to(track, {
          x: -moveDistance,
          ease: 'none',
        })

        ScrollTrigger.create({
          id: 'whyAttendPin',
          trigger: section,
          start: 'top top',
          end: `+=${Math.max(moveDistance, 1200)}`,
          scrub: 0.35,
          pin: true,
          anticipatePin: 1,
          animation,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`
            }
          },
        })
      },

      '(max-width: 991px)': () => {
        gsap.set(track, { clearProps: 'transform' })

        if (progressRef.current) {
          progressRef.current.style.width = '0%'
        }
      },
    })
  }, section)

  return () => {
    ScrollTrigger.getById('whyAttendPin')?.kill(true)
    gsap.killTweensOf(track)
    gsap.set(track, { clearProps: 'all' })
    ctx.revert()
    ScrollTrigger.refresh()
  }
}, [])

  return (
    <>
    <section
      ref={sectionRef}
      id="why-attend"
      className="
        relative overflow-hidden
        py-20 text-white
        lg:h-screen lg:py-0
      "
    >

      {/* Orbs */}
      <div
        className="
          absolute -right-30 top-[8%]
          h-90 w-90
          rounded-full bg-teal-400/10 blur-[3px]
          animate-floatPlain
        "
      />

      <div
        className="
          absolute bottom-[8%] -left-20
          h-65 w-65
          rounded-full bg-yellow-400/10 blur-[3px]
          animate-floatPlain
        "
      />

      <div
        className="
          mx-auto flex h-full min-w-[70%] max-w-7xl flex-col justify-center px-4
        "
      >

        {/* Heading */}
        <div
          className="
            mb-10 grid gap-6
            lg:grid-cols-2 lg:items-end
          "
        >
          <div>
            <div className="subtitle">
              Who Should Attend
            </div>

            <h2 className="text-white">
              Designed for healthcare professionals and organizations
            </h2>
          </div>

          <div>
            <p>
              Scroll down to explore the key audience groups who
              will benefit from attending this conference.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-20 h-1.25 w-full overflow-hidden rounded-full bg-white/10">
          <span
            ref={progressRef}
            className="
              block h-full w-0
              rounded-full
              bg-linear-to-r from-teal-400 to-cyan-400
            "
          />
        </div>

        {/* Cards */}
        <div className="overflow-x-auto overflow-y-visible pb-4 lg:overflow-visible">
          <div
            ref={trackRef}
            className="
              flex w-max gap-7 flex-nowrap
            "
          >

            {cards.map((card, index) => {
              const Icon = card.icon

              return (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-[34px]
                    border border-white/10
                    bg-white/10
                    p-8
                    shadow-[0_26px_75px_rgba(0,0,0,0.22)]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-3 hover:scale-[1.015]
                    hover:shadow-[0_32px_80px_rgba(6,26,53,0.16)]
                    w-[85vw]
                    max-w-105
                    sm:w-105
                    sm:min-h-90
                    shrink-0
                  "
                >

                  {/* Glow */}
                  <div
                    className="
                      absolute -right-22.5 -top-22.5
                      h-52.5 w-52.5
                      rounded-full
                      bg-[radial-gradient(circle,rgba(0,194,184,0.16),transparent_70%)]
                      transition-all duration-300
                      group-hover:scale-125
                    "
                  />

                  {/* Count */}
                  <h2
                    className="
                      absolute right-7 top-5 text-white/15
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </h2>

                  {/* Icon */}
                  <div className="icon-box relative z-10">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      relative z-10 mb-4 text-white
                    "
                  >
                    {card.title}
                  </h4>

                  {/* Text */}
                  <p
                    className="
                      relative z-10
                      text-white/60
                    "
                  >
                    {card.desc}
                  </p>

                </div>
              )
            })}

          </div>
        </div>

      </div>
      
    </section>
    </>
  )
}

export default WhyAttend