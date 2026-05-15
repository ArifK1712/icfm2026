import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import InnerPageHero from '../components/InnerPageHero'
import CommitteeCard from '../components/committee/CommitteeCard'
import committeeMembers from '../data/committee'

gsap.registerPlugin(ScrollTrigger)

function CommitteePage() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const groupedCommittee = useMemo(() => {
    const groups = {}

    committeeMembers.forEach((member) => {
      member.categories.forEach((category) => {
        if (!groups[category.name]) {
          groups[category.name] = {
            category: category.name,
            categoryOrder: category.categoryOrder,
            members: [],
          }
        }

        groups[category.name].members.push({
          ...member,
          tag: category.tag,
          pageOrder: category.pageOrder,
        })
      })
    })

    return Object.values(groups)
      .sort((a, b) => a.categoryOrder - b.categoryOrder)
      .map((group) => ({
        ...group,
        members: group.members.sort(
          (a, b) => a.pageOrder - b.pageOrder
        ),
      }))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 90,
          scale: 0.92,
          filter: 'blur(14px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.65,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
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
      <InnerPageHero
        subtitle="Home / Committee"
        title="Our Committee"
      />

      <section
        ref={sectionRef}
        className="bg-white py-20"
      >
        <div className="mx-auto min-w-[70%] max-w-7xl px-4">
          {groupedCommittee.map((group) => (
            <div
              key={group.category}
              className="mb-24 last:mb-0"
            >
              <div className="mb-12 text-center">
                <div className="subtitle">
                  Leadership & Expertise
                </div>

                <h2>
                  {group.category}
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.members.map((member) => {
                  const currentIndex = cardIndex
                  cardIndex += 1

                  return (
                    <CommitteeCard
                      key={`${group.category}-${member.id}`}
                      member={member}
                      cardRef={(el) => {
                        cardsRef.current[currentIndex] = el
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

export default CommitteePage