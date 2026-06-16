import { Building2, UserRound } from 'lucide-react'

function CommitteeCard({ member }) {
  return (
    <div
      className="
        group relative h-full overflow-hidden rounded-[34px]
        border border-[#12c4bb]/90
        bg-[linear-gradient(150deg,rgba(4,63,65,0.82),rgba(7,91,93,0.44))]
        p-5 text-white
        shadow-[0_28px_80px_rgba(0,0,0,0.34)]
        backdrop-blur-2xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#12c4bb]/55
        hover:shadow-[0_38px_110px_rgba(0,0,0,0.45),0_0_45px_rgba(18,196,187,0.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute -right-20 -top-20 h-64 w-64 rounded-full
          bg-[radial-gradient(circle,rgba(18,196,187,0.24),transparent_70%)]
          transition-all duration-500
          group-hover:scale-125
        "
      />

      <div
        className="
          absolute -left-24 bottom-10 h-60 w-60 rounded-full
          bg-[radial-gradient(circle,rgba(6,169,159,0.18),transparent_70%)]
        "
      />

      {/* Shine */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_42%,rgba(18,196,187,0.12))]
        "
      />

      {/* Hover sweep */}
      <div
        className="
          pointer-events-none absolute inset-0 z-30
          translate-x-[-120%] skew-x-[-18deg]
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),rgba(18,196,187,0.18),transparent)]
          opacity-0 blur-[1px]
          transition-all duration-700 ease-out
          group-hover:translate-x-[120%]
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 grid h-full content-between">
        <div>
        {/* Image */}
        <div
          className="
            relative mx-auto mb-6 flex h-42 w-42 items-end justify-center
            overflow-hidden rounded-full
            border border-[#12c4bb]/25
            bg-[radial-gradient(circle_at_50%_30%,rgba(18,196,187,0.30),rgba(4,63,65,0.75)_58%,rgba(4,63,65,0.95))]
            shadow-[0_22px_60px_rgba(0,0,0,0.30)]
          "
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              decoding="async"
              className="
                h-full w-full object-cover
                transition-all duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <UserRound size={58} className="mb-10 text-[#12c4bb]" />
          )}

          <div
            className="
              absolute bottom-0 left-0 right-0 h-16
              bg-linear-to-t from-[#043f41] to-transparent
            "
          />
        </div>

        {/* Name */}
        <h3
          className="
            mb-3 text-center 
            transition-colors duration-300
            group-hover:text-[#12c4bb]
          "
        >
          {member.name}
        </h3>
        {/* Type Badge */}
        {member.tag && (
          <div className="mb-4 text-center">
            <span
              className="
                inline-flex items-center justify-center rounded-full
                border border-[#12c4bb]/35
                bg-[#12c4bb]/12
                px-4 py-1.5 font-semibold uppercase tracking-[1.4px]
                text-[#12c4bb]
                shadow-[0_0_24px_rgba(18,196,187,0.12)]
                transition-all duration-300
                group-hover:border-[#12c4bb]/60
                group-hover:bg-[#12c4bb]/18
              "
            >
              {member.tag}
            </span>
          </div>
        )}
        {/* Role */}
        {member.role && (
          <p className="mb-4 text-center leading-6 text-white/68">
            {member.role}
          </p>
        )}
        </div>
        <div>
        {/* Organization */}
        {member.organization && (
          <div
            className="
              mb-4 flex items-start gap-3 rounded-2xl
              border border-white/10
              bg-white/[0.04]
              p-3
            "
          >
            <Building2 size={18} className="mt-0.5 shrink-0 text-[#12c4bb]" />

            <p className="leading-6">
              {member.organization}
            </p>
          </div>
        )}

        {/* Contact */}
        {(member.email || member.contactNumber) && (
          <div className="space-y-3">

            
          </div>
        )}
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-1
          bg-linear-to-r from-transparent via-[#12c4bb] to-transparent
          opacity-60 transition-all duration-500
          group-hover:h-1.5 group-hover:opacity-100
          group-hover:shadow-[0_0_28px_rgba(18,196,187,0.75)]
        "
      />
    </div>
  )
}

export default CommitteeCard