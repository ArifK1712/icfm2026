function CommitteeCard({ member, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-4xl
        border border-slate-900/5
        shadow-[0_22px_65px_rgba(6,26,53,0.08)]
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_36px_90px_rgba(6,26,53,0.16)]
      "
    >
      {/* Top background glow */}
      <div
        className="
          absolute -right-20 -top-20
          h-56 w-56
          rounded-full
          bg-[radial-gradient(circle,rgba(20,184,166,0.16),transparent_70%)]
          transition-all duration-500
          group-hover:scale-125
        "
      />

      {/* Image area */}
      <div
        className="
          relative mx-5 mt-5 overflow-hidden
          rounded-[30px]
          bg-[linear-gradient(135deg,#ecfeff,#f0fdfa)]
        "
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="
            h-50 w-full object-cover object-center
            transition-all duration-700
            group-hover:scale-105
          "
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-7 pb-7 pt-6 text-center">
        <h5 className="mb-2">
          {member.name}
        </h5>

        <p className="mb-2 font-semibold text-teal-600">
          {member.role}
        </p>

        {member.organization && (
          <p className="text-sm leading-6 text-slate-500">
            {member.organization}
          </p>
        )}
      </div>

      {/* Bottom accent */}
      <div
        className="
          mt-auto h-1.5 w-full
          bg-linear-to-r from-teal-400 via-cyan-400 to-teal-500
          opacity-80
          transition-all duration-500
          group-hover:opacity-100
        "
      />
    </div>
  )
}

export default CommitteeCard