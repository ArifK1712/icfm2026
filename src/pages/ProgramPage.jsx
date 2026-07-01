// import InnerPageHero from "../components/InnerPageHero";
import { Coffee, Utensils, Images } from "lucide-react";

const colorGuide = [
  "Opening Ceremony",
  "Workshops (Day 1)",
  "Clinical Excellence",
  "Preventive & Lifestyle",
  "Home Healthcare",
  "Women's Health",
  "Quality & Patient Experience",
  "Mental Health",
  "Research",
  "Breaks / Admin",
];

const programDays = [
  {
    day: "DAY 0",
    date: "Monday, 5 October 2026",
    title: "Pre-Conference Workshops",
    subtitle: "2 Meeting Rooms for the whole day · Capacity: 25 per workshop",
    sessions: [
      {
        time: "09:00 – 12:00",
        theme: "Research",
        moderator: "Dr. Ghada Al Arfaj",
        topic: "Research Methods & Evidence-Based Medicine",
        details: [
          "Study designs",
          "Statistics for non-statisticians",
          "Responsible AI use in research: ethical considerations",
        ],
        speakers: ["Prof. Mostafa Kofi", "Prof. Tarek Al Saied"],
      },
      {
        time: "09:00 – 12:00",
        theme: "Lifestyle Medicine",
        moderator: "Dr. Hanan Taib / Dr. Reem Al Aqeel",
        topic: "Sleep Medicine in Primary Care: A Case-Based Approach",
        details: [
          "Sleep 101: why sleep matters",
          "Early birds or night owls? Understanding your chronotype",
          "Circadian rhythm disruption",
          "Caffeine, naps & melatonin: what really helps?",
          "Sleep medications: helpful or harmful?",
        ],
        speakers: ["Dr. Hamza Dhafar"],
      },
      {
        time: "",
        theme: "Breaks / Admin",
        moderator: "",
        topic: "🍽️ Lunch Break (60 minutes)",
        details: [],
        speakers: [],
      },
      {
        time: "13:00 – 16:00",
        theme: "Urgent Cases in Family Medicine",
        moderator: "Dr. Najla Al Oda / Dr. Shahed Al Wathnani",
        topic: "Hands-on Stations",
        details: [
          "Station 1 — Bedside maneuvers (Modified Valsalva, Dix-Hallpike & Epley)",
          "Station 2 — Vascular ultrasound in urgent care",
          "Station 3 — Joint injections",
        ],
        speakers: [
          "Dr. Nawaf Basleeb",
          "Dr. Abdullah Abdulmomen",
          "Dr. Fatimah Hakami",
        ],
      },
      {
        time: "13:00 – 16:00",
        theme: "AI in Primary Care",
        moderator: "Prof. Ayman Afifi / Dr. Lina Al Olaiwi",
        topic:
          "Practical Applications of Artificial Intelligence in General Primary Care.",
        details: [],
        speakers: ["Prof. Mohammed Hassanien"],
      },
    ],
  },

  {
    day: "DAY 1",
    date: "Tuesday, 6 October 2026",
    title: "Conference – Opening & Clinical Excellence",
    subtitle: "",
    sessions: [
      {
        time: "08:35 – 08:55",
        theme: "Health System Transformation & the Future of Primary Care",
        moderator: "Dr. Mishal Al Otaiba",
        topic: "Reimagining Primary Care: The Future Beyond Clinic Walls",
        details: [],
        speakers: ["Dr. Khalid Al Qumaizi"],
      },
      {
        time: "09:00 – 09:20",
        theme: "Health System Transformation & the Future of Primary Care",
        moderator: "Dr. Mishal Al Otaiba",
        topic: "Proactive Population Health Management: From Insight to Impact",
        details: [],
        speakers: ["Dr. Saad Al Battal"],
      },
      {
        time: "09:25 – 09:45",
        theme: "",
        moderator: "",
        topic: "TBA",
        details: [],
        speakers: [],
      },
      {
        time: "09:45 – 10:00",
        theme: "Breaks / Admin",
        moderator: "",
        topic: "☕ Coffee Break",
        details: [],
        speakers: [],
      },
      {
        time: "10:00 – 10:20",
        theme: "Health System Transformation & the Future of Primary Care",
        moderator: "Dr. Mishal Al Otaiba",
        topic: "Building a World Class Primary Care Research Ecosystem",
        details: [],
        speakers: ["Prof. Waleed Al Hazzan"],
      },
      {
        time: "10:25 – 10:55",
        theme: "",
        moderator: "",
        topic: "TBA",
        details: [],
        speakers: [],
      },
      {
        time: "11:00 – 12:00",
        theme: "Opening Ceremony",
        moderator: "Dr. Moawad Al-Otaibi",
        topic: "Opening Ceremony",
        details: [
          "Welcome & Introduction of the ICFM 2026 — Dr. Moawad Al Otaibi , Chairperson, Scientific Committee",
          "Welcoming remarks – Dr.Turki Al Harbi, Chairman, Organizing Committee",
          "General Manager for Strategic Partnerships",
          "Future Vision of the Family Medicine Department at PSMMC  —  Dr.Azzam Al Otaib, Chairperson of the International Conference of Family Medicine and Home Care",
          "Recognition Awards for Conference Committee Members —  Dr. Ali Al Shehri, General Executive Director of PSMMC ",
          "Honorable Address by the Director General of MODHS  —  Introduced by Dr. Khalid Al Abdulkareem",
        ],
        speakers: [],
      },
      {
        time: "12:00 – 13:00",
        theme: "Breaks / Admin",
        moderator: "",
        topic: "🍽️ Lunch Break",
        details: [],
        speakers: [],
      },
      {
        time: "13:00 – 13:20",
        theme: "Clinical Excellence in Modern Practice",
        moderator: "Dr. Mohammed Al Eissa",
        topic:
          "Diabetes Beyond Sugar: The Rise of Cardio-Renal-Metabolic Medicine",
        details: [],
        speakers: ["Dr. Mohammed Al Mehthel"],
      },
      {
        time: "13:25 – 13:45",
        theme: "Clinical Excellence in Modern Practice",
        moderator: "Dr. Mohammed Al Eissa",
        topic: "MASLD: The Silent Disease Hiding in Your Daily Clinic",
        details: [],
        speakers: ["Dr. Jeffrey Lazarus"],
      },
      {
        time: "13:50 – 14:10",
        theme: "Clinical Excellence in Modern Practice",
        moderator: "Dr. Mohammed Al Eissa",
        topic: "Not Just LDL: The New Conversation in Lipids",
        details: [],
        speakers: ["Dr. Abdulaziz Aldheshi"],
      },
      {
        time: "14:15 – 14:35",
        theme: "Clinical Excellence in Modern Practice",
        moderator: "Dr. Mohammed Al Eissa",
        topic: "Sweet Bones: Are We Missing Bone Fragility in Diabetes?",
        details: [],
        speakers: ["Dr. Yasser Al Hakami"],
      },
      {
        time: "14:40 – 15:00",
        theme:
          "Investing in Life: KSA’s Population Health Framework & GCC’s Health Future",
        moderator: "Dr. Safa Sedrah \\ Dr. Lara Al Namlah",
        topic: "Integration of Lifestyle Medicine into Saudi Primary Care",
        details: [],
        speakers: ["Prof. Saleh Al Rajhi"],
      },
      {
        time: "15:05 – 15:25",
        theme:
          "Investing in Life: KSA’s Population Health Framework & GCC’s Health Future",
        moderator: "Dr. Safa Sedrah \\ Dr. Lara Al Namlah",
        topic:
          "Leveraging AI & Wearables: Personalized Lifestyle Prescriptions in Family Practice",
        details: [],
        speakers: ["Prof. Amro Jamal"],
      },
      {
        time: "15:30 – 15:50",
        theme:
          "Investing in Life: KSA’s Population Health Framework & GCC’s Health Future",
        moderator: "Dr. Safa Sedrah \\ Dr. Lara Al Namlah",
        topic:
          "Health Beyond Healthcare: Building Saudi Arabia's National Population Health Framework",
        details: [],
        speakers: ["Dr. Abdullah Al Arifi"],
      },
      {
        time: "15:55 – 16:15",
        theme:
          "Investing in Life: KSA’s Population Health Framework & GCC’s Health Future",
        moderator: "Dr. Safa Sedrah \\ Dr. Lara Al Namlah",
        topic: "The Future of Population Health Financing in the GCC",
        details: [],
        speakers: ["Dr. Sami Al Mudarra"],
      },
    ],
  },

  {
    day: "DAY 2",
    date: "Wednesday, 7 October 2026",
    title: "Conference – Home Healthcare & Quality of Care",
    subtitle: "Home Healthcare & Quality of Care  •  Dr. Ahmed Al Nashri",
    sessions: [
      {
        time: "08:30 – 08:50",
        theme: "The Future of Home Healthcare & Integrated Care",
        moderator: "",
        topic:
          "Community Geriatrics and Home-Based Care: Redesigning Care for Aging Populations",
        details: [],
        speakers: ["Dr. Suliman Kassar"],
      },
      {
        time: "08:55 – 09:10",
        theme: "The Future of Home Healthcare & Integrated Care",
        moderator: "",
        topic:
          "Advanced Home Health Nursing: Building Competencies for High-Quality Care Beyond Hospital Walls",
        details: [],
        speakers: ["Dr. Hana Al Othiemin"],
      },
      {
        time: "09:15 – 09:45",
        theme: "The Future of Home Healthcare & Integrated Care",
        moderator: "",
        topic:
          "A Risk Stratification and Clinical Intervention Model for Predicting Wound Healing Success in Home Healthcare Settings",
        details: [],
        speakers: ["Dr. Medhat Maher"],
      },
      {
        time: "09:50 – 10:10",
        theme: "The Future of Home Healthcare & Integrated Care",
        moderator: "",
        topic:
          "Panel Discussion: Home Healthcare 2035: Shaping the Future of Home Healthcare & Integrated Care",
        details: [],
        speakers: [
          "Dr. Aysha Al Saqeer",
          "Dr. Ahmed Al Nashri",
          "Dr. Nour Al Huda",
        ],
      },
      {
        time: "10:15 – 10:40",
        theme: "Women's Health Across the Lifespan: Family Medicne Prospective",
        moderator: "Dr. Al Johara Al Osimi",
        topic: "HPV Vaccination: From Evidance to Practice",
        details: [],
        speakers: ["Dr. Fatimah Al Hamlan"],
      },
      {
        time: "10:40 – 11:00",
        theme: "Women's Health Across the Lifespan: Family Medicne Prospective",
        moderator: "Dr. Al Johara Al Osimi",
        topic: "Hormone-Free Menopause: From Evidence to Excellence",
        details: [],
        speakers: ["Dr. Nimsha Al Hajiri"],
      },
      {
        time: "11:05 – 11:25",
        theme: "Women's Health Across the Lifespan: Family Medicne Prospective",
        moderator: "Dr. Al Johara Al Osimi",
        topic: "Clinical Excellence in Antenatal Care",
        details: [],
        speakers: ["Dr. Maha Al Nemr"],
      },
      {
        time: "11:30 – 11:50",
        theme: "Women's Health Across the Lifespan: Family Medicne Prospective",
        moderator: "Dr. Al Johara Al Osimi",
        topic: "Breast Cancer Prevention and Early Detection in Primary Care",
        details: [],
        speakers: ["Dr. Muna Al Mohri"],
      },
      {
        time: "12:00 – 13:00",
        theme: "Breaks / Admin",
        moderator: "",
        topic: "🍽️ Lunch Break",
        details: [],
        speakers: [],
      },
      {
        time: "13:00 – 13:20",
        theme: "Quality of Care & Patient Experience",
        moderator: "Dr. Mashael Al Barqawi",
        topic:
          "The Primary Care Paradox in Saudi Arabia: The Urgent Case for Rebuilding Saudi Primary Healthcare",
        details: [],
        speakers: ["Dr. Yasser Al Otaibi"],
      },
      {
        time: "13:25 – 13:45",
        theme: "Quality of Care & Patient Experience",
        moderator: "Dr. Mashael Al Barqawi",
        topic:
          "Designing Smarter Primary Care Clinics: Access, Flow & Digital Experience",
        details: [],
        speakers: ["Dr. Maram Al Sharani"],
      },
      {
        time: "13:50 – 14:10",
        theme: "Quality of Care & Patient Experience",
        moderator: "Dr. Mashael Al Barqawi",
        topic: "Measuring What Matters: PROMs in Modern Healthcare",
        details: [],
        speakers: ["Mrs. Naseem Allmulla"],
      },
      {
        time: "14:15 – 14:35",
        theme: "Quality of Care & Patient Experience",
        moderator: "Dr. Mashael Al Barqawi",
        topic: "Quality at Home: Understanding CBAHI Home Healthcare Standards",
        details: [],
        speakers: ["Dr. Maher Al Sakkak"],
      },
      {
        time: "14:40 – 15:00",
        theme: "Minds Matter in Primary Care",
        moderator: "Dr. Abdulrahman Al Khalifah",
        topic: "Collaborative Model of Care",
        details: [],
        speakers: ["Dr. Abdulgader Al Jarad"],
      },
      {
        time: "15:05 – 15:25",
        theme: "Minds Matter in Primary Care",
        moderator: "Dr. Abdulrahman Al Khalifah",
        topic: "Psychopharmacology for the Primary Care Physician",
        details: [],
        speakers: ["Dr. Abdulellah Al Osaimi"],
      },
      {
        time: "15:30 – 15:50",
        theme: "Minds Matter in Primary Care",
        moderator: "Dr. Abdulrahman Al Khalifah",
        topic: "Practical Mental Health for Family Physicians",
        details: [],
        speakers: ["Dr. Tameem Al Homaid"],
      },
      {
        time: "15:55 – 16:15",
        theme: "Research Posters Showcase & Presentations",
        moderator: "Dr. Mostafa Kofi",
        topic: "Top 3 Winning Posters",
        details: [
          "Presentation of the top 3 selected abstracts",
          "Panel: Conducting research in service-oriented settings",
          "Panel: Dr. Mirvat Al Asnag · Dr. Haifa Al Otaibi",
        ],
        speakers: [],
      },
    ],
  },
];

const themeStyles = {
  "Opening Ceremony": {
    accent: "#facc15",
    bg: "rgba(250,204,21,0.16)",
    border: "rgba(250,204,21,0.42)",
  },
  "Workshops (Day 1)": {
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.14)",
    border: "rgba(6,182,212,0.38)",
  },
  "Clinical Excellence": {
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.14)",
    border: "rgba(56,189,248,0.38)",
  },
  "Clinical Excellence in Modern Practice": {
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.14)",
    border: "rgba(56,189,248,0.38)",
  },
  "Preventive & Lifestyle": {
    accent: "#84cc16",
    bg: "rgba(132,204,22,0.14)",
    border: "rgba(132,204,22,0.38)",
  },
  "Investing in life: KSA’s Population Health Framework &GCC’s Health Future": {
    accent: "#84cc16",
    bg: "rgba(132,204,22,0.14)",
    border: "rgba(132,204,22,0.38)",
  },
  "Home Healthcare": {
    accent: "#2dd4bf",
    bg: "rgba(45,212,191,0.14)",
    border: "rgba(45,212,191,0.38)",
  },
  "The Future of Home Healthcare & Integrated Care": {
    accent: "#2dd4bf",
    bg: "rgba(45,212,191,0.14)",
    border: "rgba(45,212,191,0.38)",
  },
  "Women's Health": {
    accent: "#ec4899",
    bg: "rgba(236,72,153,0.14)",
    border: "rgba(236,72,153,0.38)",
  },
  "Women's Health Across the Lifespan: Family Medicne Prospective: family medicne prospective": {
    accent: "#ec4899",
    bg: "rgba(236,72,153,0.14)",
    border: "rgba(236,72,153,0.38)",
  },
  "Quality & Patient Experience": {
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.14)",
    border: "rgba(245,158,11,0.38)",
  },
  "Quality of Care & Patient Experience": {
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.14)",
    border: "rgba(245,158,11,0.38)",
  },
  "Mental Health": {
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.14)",
    border: "rgba(167,139,250,0.38)",
  },
  "Minds Matter in Primary Care": {
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.14)",
    border: "rgba(167,139,250,0.38)",
  },
  Research: {
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.14)",
    border: "rgba(139,92,246,0.38)",
  },
  "Research Posters Showcase & Presentations": {
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.14)",
    border: "rgba(139,92,246,0.38)",
  },
  "Breaks / Admin": {
    accent: "#94a3b8",
    bg: "rgba(148,163,184,0.12)",
    border: "rgba(148,163,184,0.32)",
  },
  "Lifestyle Medicine": {
    accent: "#22c55e",
    bg: "rgba(34,197,94,0.14)",
    border: "rgba(34,197,94,0.38)",
  },
  "Urgent Cases in Family Medicine": {
    accent: "#f97316",
    bg: "rgba(249,115,22,0.14)",
    border: "rgba(249,115,22,0.38)",
  },
  "AI in Primary Care": {
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.14)",
    border: "rgba(6,182,212,0.38)",
  },
  "Health System Transformation & the Future of Primary Care": {
    accent: "#14b8a6",
    bg: "rgba(20,184,166,0.14)",
    border: "rgba(20,184,166,0.38)",
  },
  "Investing in Life: KSA’s Population Health Framework & GCC’s Health Future": {
    accent: "#84cc16",
    bg: "rgba(132,204,22,0.14)",
    border: "rgba(132,204,22,0.38)",
  },
};

const getThemeStyle = (theme) =>
  themeStyles[theme] || {
    accent: "#12c4bb",
    bg: "rgba(18,196,187,0.14)",
    border: "rgba(18,196,187,0.38)",
  };

const getBreakIcon = (topic) => {
  if (topic.toLowerCase().includes("coffee")) return Coffee;
  if (topic.toLowerCase().includes("lunch")) return Utensils;
  if (
    topic.toLowerCase().includes("exhibition") ||
    topic.toLowerCase().includes("poster")
  ) {
    return Images;
  }

  return Coffee;
};

const cleanBreakTopic = (topic) =>
  topic.replace("☕", "").replace("🍽️", "").trim();

function ProgramPage() {
  return (
    <>
      {/* <InnerPageHero title="Program 5th ICFM" /> */}

      <section
        className="
          relative overflow-hidden
          bg-[#063b3d]
          pt-30 py-20 text-white
        "
      >
        

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-4 max-w-5xl mx-auto">
              5th International Symposium Family Medicine & Home Healthcare
            </h2>
          </div>

          <div className="mb-12">

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {colorGuide.map((theme) => {
                const style = getThemeStyle(theme);

                return (
                  <div
                    key={theme}
                    className="
                      rounded-2xl border px-4 py-3
                      text-sm font-bold
                      backdrop-blur-2xl
                    "
                    style={{
                      borderColor: style.border,
                      background: style.bg,
                      color: style.accent,
                    }}
                  >
                    {theme}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-10">
            {programDays.map((dayItem) => (
              <div
                key={dayItem.day}
                className="
                  relative overflow-hidden rounded-[38px]
                  border border-[#12c4bb]/22
                  bg-[linear-gradient(150deg,rgba(4,63,65,0.78),rgba(7,91,93,0.42))]
                  p-5
                  shadow-[0_34px_100px_rgba(0,0,0,0.34)]
                  backdrop-blur-2xl
                  md:p-8
                "
              >
                <div
                  className="
                    absolute -right-24 -top-24
                    h-72 w-72 rounded-full
                    bg-[radial-gradient(circle,rgba(18,196,187,0.22),transparent_70%)]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mb-8 flex flex-col gap-5
                      border-b border-white/10 pb-7
                      lg:flex-row lg:items-end lg:justify-between
                    "
                  >
                    <div>
                      <div
                        className="
                          mb-4 inline-flex rounded-full
                          border border-[#12c4bb]/30
                          bg-[#043f41]/45
                          px-5 py-2
                          text-sm font-black uppercase tracking-[1.5px]
                          text-[#12c4bb]
                        "
                      >
                        {dayItem.day}
                      </div>

                      <h3 className="mb-2 text-3xl font-black text-white md:text-4xl">
                        {dayItem.title}
                      </h3>

                      {dayItem.subtitle && (
                        <p className="text-white/65">{dayItem.subtitle}</p>
                      )}
                    </div>

                    <div
                      className="
                        rounded-3xl
                        border border-[#12c4bb]/20
                        bg-[#043f41]/50
                        px-5 py-4
                        text-left
                      "
                    >
                      <p className="text-sm font-bold uppercase tracking-[1.5px] text-white/45">
                        Date
                      </p>

                      <h4 className="text-xl font-black text-[#12c4bb]">
                        {dayItem.date}
                      </h4>
                    </div>
                  </div>

                  <div className="grid gap-5">
                    {dayItem.sessions.map((session, index) => {
                      const style = getThemeStyle(session.theme);
                      const isBreak = session.theme === "Breaks / Admin";
                      const BreakIcon = isBreak
                        ? getBreakIcon(session.topic)
                        : null;

                      return (
                        <div
                          key={index}
                          className="
                            group relative overflow-hidden rounded-[30px]
                            border
                            p-5
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]
                            md:p-6
                          "
                          style={{
                            borderColor: style.border,
                            background: `linear-gradient(135deg, ${style.bg}, rgba(4,63,65,0.52))`,
                          }}
                        >
                          <div
                            className="
                              absolute -right-20 -top-20
                              h-56 w-56 rounded-full blur-3xl
                              transition-all duration-300
                              group-hover:scale-125
                            "
                            style={{
                              backgroundColor: style.accent,
                              opacity: 0.18,
                            }}
                          />

                          {isBreak ? (
                            <div className="relative z-10 flex items-center justify-start">
                              <div
                                className="sm:flex items-center gap-5"
                              >
                                <div
                                  className="absolute -top-16 h-36 w-36 rounded-full blur-3xl"
                                  style={{
                                    backgroundColor: style.accent,
                                    opacity: 0.2,
                                  }}
                                />

                                

                                {session.time && (
                                  <p
                                    className="relative mb-2 text-lg font-black"
                                    style={{ color: style.accent }}
                                  >
                                    {session.time}
                                  </p>
                                )}

                                {BreakIcon && (
                                  <div
                                    className="
            relative flex h-16 w-16 items-center justify-center
            rounded-full border shadow-[0_18px_45px_rgba(0,0,0,0.22)]
          "
                                    style={{
                                      borderColor: style.border,
                                      backgroundColor: style.bg,
                                      color: style.accent,
                                    }}
                                  >
                                    <BreakIcon size={34} strokeWidth={2.3} />
                                  </div>
                                )}

                                <h4 className="relative text-2xl font-black text-white md:text-3xl">
                                  {cleanBreakTopic(session.topic)}
                                </h4>
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`
      relative z-10 grid gap-6 lg:items-start
      ${
        session.speakers.length > 0
          ? "lg:grid-cols-[180px_1fr_260px]"
          : "lg:grid-cols-[180px_1fr]"
      }
    `}
                            >
                              <div>
                                {session.time && (
                                  <div
                                    className="
            inline-flex rounded-2xl
            text-lg font-black
          "
                                    style={{
                                      color: style.accent,
                                    }}
                                  >
                                    {session.time}
                                  </div>
                                )}
                              </div>

                              <div>
                                <div className="mb-3 flex flex-wrap gap-2">
                                  {session.theme && session.theme !== "Breaks / Admin" && (
                                    <span
                                      className="rounded-full px-4 py-1.5 font-bold"
                                      style={{
                                        backgroundColor: style.bg,
                                        color: style.accent,
                                        border: `1px solid ${style.border}`,
                                      }}
                                    >
                                      {session.theme}
                                    </span>
                                  )}

                                  {session.moderator && (
                                    <span
                                      className="
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-1.5 font-bold text-white/65
            "
                                    >
                                      Moderator: {session.moderator}
                                    </span>
                                  )}
                                </div>

                                <h4 className="mb-4 text-2xl font-black text-white">
                                  {session.topic}
                                </h4>

                                {session.details.length > 0 && (
                                  <ul className="space-y-2 text-white/68">
                                    {session.details.map((detail) => (
                                      <li key={detail} className="flex gap-3">
                                        <span
                                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
                                          style={{
                                            backgroundColor: style.accent,
                                          }}
                                        />
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>

                              {session.speakers.length > 0 && (
                                <div
                                  className="
          rounded-[24px]
          border
          bg-white/[0.04]
          p-4
        "
                                  style={{
                                    borderColor: style.border,
                                  }}
                                >
                                  <p className="text-xs font-black uppercase tracking-[1.5px] text-white/45">
                                    Speaker(s)
                                  </p>

                                  <div className="space-y-2">
                                    {session.speakers.map((speaker) => (
                                      <p
                                        key={speaker}
                                        className="font-semibold text-white/75"
                                      >
                                        {speaker}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          <div
                            className="
                              absolute bottom-0 left-0 right-0 h-1
                              opacity-80 transition-all duration-300
                              group-hover:h-1.5
                            "
                            style={{
                              background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            Closing Remarks & Farewell — Summary of Key Takeaways & Acknowledgements · Dr. Mowad AL Otaibi
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramPage;
