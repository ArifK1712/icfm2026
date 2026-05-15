function SpeakerCard({ speaker, cardRef }) {
  return (
    <div
      ref={cardRef}
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
          decoding="async"
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
        <h5 className="mb-1">
          {speaker.name}
        </h5>

        <p className="mb-0 text-slate-500">
          {speaker.role}
        </p>
      </div>
    </div>
  )
}

export default SpeakerCard