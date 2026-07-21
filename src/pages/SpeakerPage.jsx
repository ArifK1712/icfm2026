import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'

// import InnerPageHero from '../components/InnerPageHero'
import SpeakerCard from '../components/speakers/SpeakerCard'
import speakers from '../data/speakers'

const speakerDays = [
  'Day 0 Workshop',
  'Day 1',
  'Day 2',
]

const speakerDayOrder = {
  'Day 0 Workshop': 1,
  'Day 1': 2,
  'Day 2': 3,
}

function SpeakerPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeDay, setActiveDay] = useState('All')

  const filteredSpeakers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return speakers
      .filter((speaker) => {
        const matchesDay =
          activeDay === 'All' || speaker.day === activeDay

        const searchableText = [
          speaker.name,
          speaker.role,
          speaker.day,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        const matchesSearch =
          !normalizedSearch ||
          searchableText.includes(normalizedSearch)

        return matchesDay && matchesSearch
      })
      .sort((a, b) => {
        const dayDifference =
          speakerDayOrder[a.day] - speakerDayOrder[b.day]

        if (dayDifference !== 0) {
          return dayDifference
        }

        return a.pageOrder - b.pageOrder
      })
  }, [searchTerm, activeDay])

  const clearFilters = () => {
    setSearchTerm('')
    setActiveDay('All')
  }

  return (
    <>
      {/* <InnerPageHero title="Our Speakers" /> */}

      <section
        id="speakers"
        className="
          relative overflow-clip
          bg-[#063b3d]
          py-20 pt-30
          text-white
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute -right-50 top-10
            h-125 w-125 rounded-full
            bg-[radial-gradient(circle,rgba(18,196,187,0.16),transparent_68%)]
          "
        />

        <div
          className="
            pointer-events-none absolute -left-50 bottom-20
            h-125 w-125 rounded-full
            bg-[radial-gradient(circle,rgba(6,169,159,0.12),transparent_68%)]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Page Heading and Filters */}
          <div
  className="
    md:sticky top-20 z-40 mb-8
    grid gap-6 py-5
    backdrop-blur-3xl
    md:grid-cols-[1fr_1.4fr]
    md:items-start
    md:px-4
  "
>
            <div>
              <div className="subtitle">
                Distinguished Faculty
              </div>

              <h2 className="mb-4 text-white">
                Speakers
              </h2>

              <p className="max-w-xl text-white/65">
                Search speakers by name, role or job description.
              </p>
            </div>

            {/* Search and Filter */}
            <div
              className="
                sticky top-24 z-30
                backdrop-blur-2xl
              "
            >
              {/* Search */}
              <div
                className="
                  flex items-center gap-3 rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                  px-4 py-3
                  transition-all duration-300
                  focus-within:border-[#12c4bb]/45
                  focus-within:bg-[#12c4bb]/10
                "
              >
                <Search
                  size={20}
                  className="shrink-0 text-[#12c4bb]"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search speaker..."
                  className="
                    w-full bg-transparent
                    text-white outline-none
                    placeholder:text-white/42
                  "
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center rounded-full
                      bg-white/10 text-white/60
                      transition-all duration-300
                      hover:bg-[#12c4bb]/15
                      hover:text-[#12c4bb]
                    "
                    aria-label="Clear speaker search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Day Filters */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveDay('All')}
                  className={`
                    inline-flex items-center gap-2
                    rounded-full border
                    px-5 py-2.5
                    text-sm font-black uppercase tracking-[1px]
                    transition-all duration-300
                    ${
                      activeDay === 'All'
                        ? 'border-[#12c4bb]/55 bg-[#12c4bb]/18 text-[#12c4bb] shadow-[0_0_30px_rgba(18,196,187,0.16)]'
                        : 'border-white/10 bg-white/[0.04] text-white/62 hover:border-[#12c4bb]/35 hover:bg-[#12c4bb]/10 hover:text-[#12c4bb]'
                    }
                  `}
                >
                  <SlidersHorizontal size={15} />
                  All
                </button>

                {speakerDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setActiveDay(day)}
                    className={`
                      rounded-full border
                      px-5 py-2.5
                      text-sm uppercase tracking-[1px]
                      transition-all duration-300
                      ${
                        activeDay === day
                          ? 'border-[#12c4bb]/55 bg-[#12c4bb]/18 text-[#12c4bb] shadow-[0_0_30px_rgba(18,196,187,0.16)]'
                          : 'border-white/10 bg-white/[0.04] text-white/62 hover:border-[#12c4bb]/35 hover:bg-[#12c4bb]/10 hover:text-[#12c4bb]'
                      }
                    `}
                  >
                    {day}
                  </button>
                ))}

                {(searchTerm || activeDay !== 'All') && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="
                      inline-flex items-center gap-2
                      rounded-full border border-red-300/20
                      bg-red-400/10 px-5 py-2.5
                      text-sm font-black uppercase tracking-[1px]
                      text-red-200
                      transition-all duration-300
                      hover:border-red-300/40
                      hover:bg-red-400/15
                    "
                  >
                    <X size={15} />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredSpeakers.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSpeakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                />
              ))}
            </div>
          ) : (
            <div
              className="
                rounded-[34px]
                border border-[#12c4bb]/22
                bg-[linear-gradient(150deg,rgba(4,63,65,0.82),rgba(7,91,93,0.44))]
                p-10 text-center
                shadow-[0_28px_80px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
              "
            >
              <div
                className="
                  mx-auto mb-5 flex h-18 w-18
                  items-center justify-center rounded-full
                  border border-[#12c4bb]/25
                  bg-[#12c4bb]/12 text-[#12c4bb]
                "
              >
                <Search size={34} />
              </div>

              <h3 className="mb-3 text-white">
                No speakers found
              </h3>

              <p className="mb-6 text-white/60">
                Try changing your search keyword or selected day filter.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  rounded-full border border-[#12c4bb]/35
                  bg-[#12c4bb]/12 px-6 py-3
                  font-black text-[#12c4bb]
                  transition-all duration-300
                  hover:bg-[#12c4bb]/18
                "
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SpeakerPage