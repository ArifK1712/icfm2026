import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//import InnerPageHero from '../components/InnerPageHero'
import SpeakerCard from '../components/speakers/SpeakerCard'
import speakers from '../data/speakers'

gsap.registerPlugin(ScrollTrigger)

function SpeakerPage() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(new Map())

const groupedSpeakers = useMemo(() => {
  const groups = {}

  speakers.forEach((speaker) => {
    speaker.categories.forEach((category) => {
      if (!groups[category.name]) {
        groups[category.name] = {
          category: category.name,
          categoryOrder: category.categoryOrder,
          speakers: [],
        }
      }

      groups[category.name].speakers.push({
        ...speaker,
        tag: category.tag,
        pageOrder: category.pageOrder,
      })
    })
  })

  return Object.values(groups)
    .sort((a, b) => a.categoryOrder - b.categoryOrder)
    .map((group) => ({
      ...group,
      speakers: group.speakers.sort(
        (a, b) => a.pageOrder - b.pageOrder
      ),
    }))
}, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(cardsRef.current.values()),
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
          duration: 0.5,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  let cardIndex = 0

  return (
    <>
      {/* <InnerPageHero
        title="Our Speakers"
      /> */}
      <h2 class="text-center h-100 flex items-center justify-center">Coming Soon...</h2>
      <section
        ref={sectionRef}
        id="speakers"
        className="bg-white py-20 hidden"
      >
        <div className="min-w-[70%] max-w-7xl mx-auto px-4">
          {groupedSpeakers.map((group) => (
            <div
              key={group.category}
              className="mb-20 last:mb-0"
            >
              {/* Category Heading */}
              <div className="mb-10 text-center">
                <div className="subtitle">
                  Distinguished Faculty
                </div>

                <h2>
                  {group.category}
                </h2>
              </div>

              {/* Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {group.speakers.map((speaker) => {
                  const currentIndex = cardIndex
                  cardIndex += 1

                  return (
                    <SpeakerCard
                      key={speaker.id}
                      speaker={speaker}
                      cardRef={(el) => {
  const key = `${group.category}-${speaker.id}`

  if (el) {
    cardsRef.current.set(key, el)
  } else {
    cardsRef.current.delete(key)
  }
}}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default SpeakerPage