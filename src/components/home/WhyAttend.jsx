import {
  HeartPulse,
  Hospital,
  UserRound,
  ClipboardPlus,
  HeartHandshake,
  Building2,
  Accessibility,
  HousePlus,
  Pill,
  IdCard,
  Landmark,
  Network,
  ShieldCheck,
  House,
  HeartPlus,
  HouseHeart,
} from "lucide-react";

function WhyAttend() {
  const cards = [
    {
      icon: HeartPulse,
      title: "Family Medicine Physicians",
      desc: "For family medicine specialists focused on community health, preventive care and primary healthcare improvement.",
    },
    {
      icon: Hospital,
      title: "Internal Medicine Physicians",
      desc: "For internal medicine doctors working across chronic care, diagnosis, treatment and patient management.",
    },
    {
      icon: UserRound,
      title: "Physician Assistants",
      desc: "For physician assistants involved in clinical support, patient care coordination and healthcare delivery.",
    },
    {
      icon: ClipboardPlus,
      title: "Nurse Practitioners",
      desc: "For nurse practitioners contributing to advanced clinical care, assessment, treatment and patient education.",
    },
    {
      icon: HeartHandshake,
      title: "Nurses",
      desc: "For nursing professionals supporting patient care, health promotion, care quality and clinical operations.",
    },
    {
      icon: Building2,
      title: "Medical Clinics",
      desc: "For medical clinics seeking updates, partnerships and practical insights in primary healthcare services.",
    },
    {
      icon: Accessibility,
      title: "Rehabilitation Centers",
      desc: "For medical clinics seeking updates, partnerships and practical insights in primary healthcare services.",
    },
    {
      icon: HousePlus,
      title: "Primary Care Clinics",
      desc: "For primary care clinics focused on improving patient access, clinical workflows and preventive healthcare.",
    },
    {
      icon: Pill,
      title: "Pharmaceutical Companies",
      desc: "For companies offering family medicine products such as vaccination, diabetes, cancer and chronic care solutions.",
    },
    {
      icon: IdCard,
      title: "General Practice Providers",
      desc: "For general practice and primary care providers serving patients across everyday healthcare needs.",
    },
    {
      icon: Landmark,
      title: "Ministry of Health Officials",
      desc: "For government and health officials involved in policy, planning, healthcare quality and public health programs.",
    },
    {
      icon: Network,
      title: "Public & Private Hospitals",
      desc: "For hospitals aiming to strengthen services, partnerships, clinical excellence and healthcare transformation.",
    },
    {
      icon: ShieldCheck,
      title: "Health Center Managers",
      desc: "For managers responsible for healthcare operations, service quality, teams and patient experience.",
    },
    {
      icon: House,
      title: "Health Insurance Companies",
      desc: "For insurance organizations working with healthcare providers, patient coverage and care access models.",
    },
    {
      icon: HouseHeart,
      title: "Home Health Care Officials",
      desc: "For home healthcare professionals and officials supporting patient care beyond hospitals and clinics.",
    },
    {
      icon: HeartPlus,
      title: "Specialized Medical Companies",
      desc: "For specialized medical and health companies in the Kingdom of Saudi Arabia seeking visibility and collaboration.",
    },
  ];

  const scrollingCards = [...cards, ...cards];

  return (
    <section
      id="why-attend"
      className="
        relative overflow-hidden py-20 text-white
        lg:py-28
      "
    >
      {/* Orbs */}
      <div
        className="
          absolute -right-30 top-[8%]
          h-90 w-90
          rounded-full bg-teal-400/10 blur-[3px]
          animate-floatPlain
        "
      />

      <div
        className="
          absolute bottom-[8%] -left-20
          h-65 w-65
          rounded-full bg-yellow-400/10 blur-[3px]
          animate-floatPlain
        "
      />

      <div className="relative z-10 mx-auto min-w-[80%] max-w-7xl px-4">
        {/* Heading */}
        <div
          className="
            mb-12 grid gap-6
            lg:grid-cols-2 lg:items-end
          "
        >
          <div>
            <div className="subtitle">Who Should Attend</div>

            <h2>
              Designed for healthcare professionals and organizations
            </h2>
          </div>

          <div>
            <p>
              This conference brings together medical experts, healthcare
              leaders, researchers, and organizations to exchange knowledge,
              discover opportunities, and strengthen collaboration across the
              healthcare ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Auto Scrolling Cards */}
      <div className="relative z-10 overflow-hidden">
        <div className="why-attend-marquee flex w-max gap-7 py-4">
          {scrollingCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
  key={`${card.title}-${index}`}
  className="
    group relative shrink-0 overflow-hidden
    rounded-[34px]
    bg-[linear-gradient(180deg,#25e7dc_0%,#08d8cf_45%,rgba(8,216,207,0.28)_100%)]
    p-[3px]
    transition-all duration-300
    hover:-translate-y-3 hover:scale-[1.015]
    hover:shadow-[0_32px_80px_rgba(0,0,0,0.28),0_0_34px_rgba(8,216,207,0.35)]
    w-[85vw]
    max-w-105
    sm:w-105
    sm:min-h-90
  "
>
  <div
    className="
      relative h-full min-h-full overflow-hidden rounded-[31px]
      bg-[#04383b]/95
      p-8
      backdrop-blur-xl
    "
  >
    {/* Hover Shine Sweep */}
    <div
      className="
        pointer-events-none absolute inset-0 z-30
        translate-x-[-120%] skew-x-[-18deg]
        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)]
        opacity-0 blur-[1px]
        transition-all duration-450 ease-out
        group-hover:translate-x-[120%]
        group-hover:opacity-100
      "
    />

    {/* Glow */}
    <div
      className="
        absolute -right-22.5 -top-22.5
        h-52.5 w-52.5
        rounded-full
        bg-[radial-gradient(circle,rgba(0,194,184,0.16),transparent_70%)]
        transition-all duration-300
        group-hover:scale-125
      "
    />

    {/* Count */}
    <h2 className="absolute right-7 top-5 text-white/15">
      {String((index % cards.length) + 1).padStart(2, "0")}
    </h2>

    {/* Icon */}
    <div className="icon-box relative z-10">
      <Icon size={30} strokeWidth={1.5} />
    </div>

    {/* Title */}
    <h4 className="relative z-10 mb-4 text-white">{card.title}</h4>

    {/* Text */}
    <p className="relative z-10 text-white/60">{card.desc}</p>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyAttend;
