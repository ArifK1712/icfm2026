import { useEffect, useRef } from 'react'
import { Hospital, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutImg from '../../assets/images/aboutImg.jpg'

gsap.registerPlugin(ScrollTrigger)


function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {

  const ctx = gsap.context(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -90,
      rotate: -20,
      filter: 'blur(20px)',
      scale: 0.1,
      stagger: 0.15,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 150%',
        scrub: 0.5,
          invalidateOnRefresh: false,
      },
    });

    gsap.from(contentRef.current.children, {
        opacity: 0,
        x: 90,
        y: 20,
        filter: 'blur(20px)',
        duration: 0.1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
          start: 'top 150%',
        },
      })

  }, sectionRef)

  return () => ctx.revert()

}, [])

  return (
    <section ref={sectionRef} id="about" className="overflow-x-hidden bg-white py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div ref={imageRef} className="relative">
            <img
              src={aboutImg}
              alt="Conference audience"
              className="
                w-full h-150 rounded-[38px] object-cover
                shadow-[0_25px_65px_rgba(6,26,53,0.18)]
              "
            />
          </div>
          <div ref={contentRef}>
            <div className="subtitle">
              About The Conference
            </div>
            <h2 className="mb-5">
              Where healthcare leadership meets practical innovation
            </h2>
            <p className="text-slate-500">
              ICFM brings together experts in family medicine,
              community health, public health and healthcare
              transformation with a strong focus on real clinical
              value and networking.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="motion-card group">
                <div className="icon-box">
                  <Hospital strokeWidth={1} size={30} />
                </div>
                <h6 className="mb-2">
                  Clinical Excellence
                </h6>
                <p className="text-slate-500">
                  Relevant sessions for modern care delivery.
                </p>
              </div>
              <div className="motion-card group">
                <div className="icon-box">
                  <Users size={30} strokeWidth={1} />
                </div>
                <h6 className="mb-2">
                  Global Network
                </h6>
                <p className="text-slate-500">
                  Connect with healthcare professionals and partners.
                </p>
              </div>
            </div>
            <a href="#" className="btn btn-main mt-8">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About