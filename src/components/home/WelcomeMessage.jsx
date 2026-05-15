import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import welcomeImg from '../../assets/images/welcomeimage.jpg'

gsap.registerPlugin(ScrollTrigger)

function WelcomeMessage() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const chairRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.94,
        filter: 'blur(10px)',
      })

      gsap.set(chairRef.current, {
        opacity: 0,
        x: -50,
        rotate: -8,
        scale: 0.9,
      })

      gsap.set(itemsRef.current, {
        opacity: 0,
        y: 30,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      })

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
      })
        .to(
          chairRef.current,
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            duration: 0.85,
            ease: 'back.out(1.5)',
          },
          '-=0.55'
        )
        .to(
          itemsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.42'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20"
    >
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div
          ref={cardRef}
          className="
            relative overflow-hidden rounded-[34px]
            bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
            p-6
            md:p-10 lg:p-12
          "
        >
          <div className="absolute -right-15 -top-15 h-55 w-55 rounded-full bg-teal-400/15" />
          <div className="absolute -bottom-20 -left-20 h-65 w-65 rounded-full bg-cyan-400/10" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[280px_1fr]">
            <div ref={chairRef} className="text-center">
              <img
                src={welcomeImg}
                loading="lazy"
                alt="Conference Chair"
                className="
                  mx-auto h-55 w-55
                  rounded-full border-8 border-white/90
                  object-cover shadow-2xl
                "
              />
            </div>

            <div>
              <div
                ref={addItemRef}
                className="subtitle"
              >
                Welcome Message
              </div>

              <h2 ref={addItemRef} className="mb-6 text-white">
                Welcome to ICFM 2026
              </h2>

              <p
                ref={addItemRef}
                className="mb-4"
              >
                It is our great pleasure to welcome you to the International
                Conference for Community Health & Primary Healthcare in Riyadh,
                Saudi Arabia.
              </p>

              <p
                ref={addItemRef}
                className="mb-6"
              >
                Through keynote sessions, workshops, scientific presentations
                and networking opportunities, we aim to create a meaningful
                platform that encourages collaboration and innovation.
              </p>

              <div
                ref={addItemRef}
                className="mt-6 flex flex-wrap items-center gap-6"
              >
                <div>
                  <h5 className="mb-1 text-lg font-bold text-white">
                    Dr. Conference Chair Name
                  </h5>

                  <p className="mb-0">
                    Conference Chairperson
                  </p>
                </div>

                <a
                  href="#registration"
                  className="btn btn-main"
                >
                  Join The Conference
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeMessage