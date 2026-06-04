import { Link } from 'react-router-dom'
import SpeakerCard from '../speakers/SpeakerCard'
import speakers from '../../data/speakers'

function Speakers() {
  const featuredSpeakers = speakers
  .filter((speaker) => speaker.featured)
  .sort((a, b) => a.homeOrder - b.homeOrder)
  .slice(0, 4)
  .map((speaker) => ({
    ...speaker,
    tag: speaker.categories?.[0]?.tag || 'Speaker',
  }))

  return (
    <section id="speakers" className="py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="subtitle">
              Featured Speakers
            </div>

            <h2 className="text-white">
              Meet the voices shaping healthcare
            </h2>
          </div>

          <div className="lg:text-right">
            <Link to="/speakers" className="btn btn-main">
              View All Speakers
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers