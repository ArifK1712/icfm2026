import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'

// import InnerPageHero from '../components/InnerPageHero'
import CommitteeCard from '../components/committee/CommitteeCard'
import committeeMembers from '../data/committee'

function CommitteePage() {

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const committeeCategories = useMemo(() => {
    const categories = {}

    committeeMembers.forEach((member) => {
      member.categories.forEach((category) => {
        if (!categories[category.name]) {
          categories[category.name] = {
            name: category.name,
            categoryOrder: category.categoryOrder,
          }
        }
      })
    })

    return Object.values(categories).sort(
      (a, b) => a.categoryOrder - b.categoryOrder
    )
  }, [])

  const groupedCommittee = useMemo(() => {
    const groups = {}
    const normalizedSearch = searchTerm.trim().toLowerCase()

    committeeMembers.forEach((member) => {
      member.categories.forEach((category) => {
        if (activeCategory !== 'All' && category.name !== activeCategory) {
          return
        }

        const searchableText = [
          member.name,
          member.role,
          member.organization,
          member.email,
          member.contactNumber,
          category.name,
          category.tag,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        if (normalizedSearch && !searchableText.includes(normalizedSearch)) {
          return
        }

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
        members: group.members.sort((a, b) => a.pageOrder - b.pageOrder),
      }))
  }, [searchTerm, activeCategory])

  const clearFilters = () => {
    setSearchTerm('')
    setActiveCategory('All')
  }

  return (
    <>
      {/* <InnerPageHero title="Committee 5th ICFM" /> */}

      <section
        className="
          relative overflow-hidden
          bg-[#063b3d]
          pt-30 py-20 text-white
        "
      >
        

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Page Heading */}
          <div className="mb-12 grid sm:flex gap-5">
            <div>

            <h2 className="mb-4">
              Committee Members
            </h2>

            <p className="mx-auto max-w-3xl text-white/65">
              Search and filter committee members by committee category, name,
              role, organization, email, or contact number.
            </p>
            </div>
            {/* Search & Filter */}
          <div
            className="
              sticky top-24 z-30 mb-16 rounded-[32px]
              border border-[#12c4bb]/22
              bg-[linear-gradient(150deg,rgba(4,63,65,0.88),rgba(7,91,93,0.58))]
              p-4
              shadow-[0_24px_70px_rgba(0,0,0,0.30)]
              backdrop-blur-2xl
              md:p-5
            "
          >
            <div className="grid gap-4 lg:items-center">
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
                <Search size={20} className="shrink-0 text-[#12c4bb]" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search committee member..."
                  className="
                    w-full bg-transparent text-white outline-none
                    placeholder:text-white/42
                  "
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full bg-white/10 text-white/60
                      transition-all duration-300
                      hover:bg-[#12c4bb]/15 hover:text-[#12c4bb]
                    "
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className={`
                  inline-flex items-center gap-2 rounded-full
                  border px-5 py-2.5
                  text-sm font-black uppercase tracking-[1px]
                  transition-all duration-300
                  ${
                    activeCategory === 'All'
                      ? 'border-[#12c4bb]/55 bg-[#12c4bb]/18 text-[#12c4bb] shadow-[0_0_30px_rgba(18,196,187,0.16)]'
                      : 'border-white/10 bg-white/[0.04] text-white/62 hover:border-[#12c4bb]/35 hover:bg-[#12c4bb]/10 hover:text-[#12c4bb]'
                  }
                `}
              >
                <SlidersHorizontal size={15} />
                All
              </button>

              {committeeCategories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`
                    rounded-full border px-5 py-2.5
                    text-sm uppercase tracking-[1px]
                    transition-all duration-300
                    ${
                      activeCategory === category.name
                        ? 'border-[#12c4bb]/55 bg-[#12c4bb]/18 text-[#12c4bb] shadow-[0_0_30px_rgba(18,196,187,0.16)]'
                        : 'border-white/10 bg-white/[0.04] text-white/62 hover:border-[#12c4bb]/35 hover:bg-[#12c4bb]/10 hover:text-[#12c4bb]'
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}

              {(searchTerm || activeCategory !== 'All') && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-red-300/20
                    bg-red-400/10 px-5 py-2.5
                    text-sm font-black uppercase tracking-[1px]
                    text-red-200
                    transition-all duration-300
                    hover:border-red-300/40 hover:bg-red-400/15
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
          {groupedCommittee.length > 0 ? (
            groupedCommittee.map((group) => (
              <div key={group.category} className="mb-24 last:mb-0">
                <div className="mb-12 text-center">
                  <h2 className="text-white">{group.category}</h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {group.members.map((member) => (
                    <CommitteeCard
                      key={`${group.category}-${member.id}`}
                      member={member}
                    />
                  ))}
                </div>
              </div>
            ))
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
                  mx-auto mb-5 flex h-18 w-18 items-center justify-center
                  rounded-full border border-[#12c4bb]/25
                  bg-[#12c4bb]/12 text-[#12c4bb]
                "
              >
                <Search size={34} />
              </div>

              <h3 className="mb-3 text-white">
                No committee members found
              </h3>

              <p className="mb-6 text-white/60">
                Try changing your search keyword or selected committee filter.
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

export default CommitteePage