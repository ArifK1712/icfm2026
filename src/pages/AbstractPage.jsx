// import InnerPageHero from "../components/InnerPageHero";

import {
  AlertCircle,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mail,
  Mic,
} from "lucide-react";

import { Link } from "react-router-dom";

function AbstractPage() {
  const presentationFormats = [
    {
      title: "Oral presentation",
      description:
        "Oral presentation (articles/research reports of interesting/ complex cases, ethical/clinical dilemmas in the Expert Panel Discussion Sessions)",
      icon: Mic,
    },
    {
      title: "Poster presentation",
      description: "Poster presentation during poster presentation tours",
      icon: FileText,
    },
  ];

  const submissionRules = [
    "Abstracts must contain original scientific data collected by the author(s).",
    "Language: All abstracts are to be written in English. The Scientific Committee reserves the right to edit abstracts where the English structure makes comprehension difficult.",
    "Submission: All abstracts must be submitted via the Online Abstract Portal.",
    "Abstracts should be limited to a maximum of 250 words and should include the following:",
  ];

  const abstractDetails = [
    "Title of abstract",
    "Names and contact details of author(s) organisation, city /country, email, phone numbers, fax numbers and mailing address}. Please indicate the name of the presenting author and provide a 3-line biography.",
    "The abstract must include the following headings clearly: Introduction, Aim, Methods, Results, and Conclusions (Please provide evidence of ethical approval and funding acknowledgements if any).",
  ];

  const abstractCategories = ["Oral presentation", "Poster presentation"];

  const selectionCriteria = [
    "Pertinence: Originality, Actuality, Useful Results",
    "Structure: Introduction, Aim, Material & Methods, Results, Discussion, Conclusion",
  ];

  const terms = [
    "The scientific committee reserves the right to make the final decision about abstract acceptance and its scheduling into the program based on topics and time constraints.",
    "All abstracts must be prepared using the abstract submission guidelines.",
    "Each abstract submission must indicate if the material was published or presented in any prior conferences or if it received any awards.",
    "All presenters must register to attend the conference within a maximum of 2 weeks of acceptance of the abstract and be present at the time of the conference.",
    "A certificate of appreciation will be given to presenting Author (Only) to honour their presentation.",
    "Presenters must not use the session as a marketing opportunity for products/equipment.",
  ];

  const importantDates = [
    {
      title: "Submission Start Date",
      date: "01 July 2026",
    },
    {
      title: "Submission End Date",
      date: "01 September 2026",
    },
    {
      title: "Abstract Acceptance Notification",
      date: "10 September 2026",
    },
  ];

  return (
    <>
      {/* 1. CALL FOR ABSTRACT / Abstract Submission */}
      <section className="relative overflow-hidden pt-30 py-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <span className="subtitle">CALL FOR ABSTRACT</span>
            <h2>
              Call for research / improvement projects in Primary Healthcare
              Centre
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.7fr]">
            <div className="space-y-4">
              <h3 className="text-white">Abstract Submission</h3>
              <p className="text-white/70">
                5th International Family Medicine Symposium on Family Medicine
                and Home Healthcare 2026 invites free paper / scientific
                research / abstracts to be presented in the conference. The
                scientific committee shall review each abstract and the
                presenters shall be notified of the outcomes, and successful
                authors shall be invited to present POSTER papers depending upon
                originality and appeal of the scientific work.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-[#25e7dc]/16 bg-[#052f34]/70 p-5 sm:flex-row sm:items-center">
              <div className="space-y-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#25e7dc]/16 bg-white/10 text-[#25e7dc]">
                  <CalendarDays size={22} />
                </div>
                <p className="font-semibold text-white">
                  The deadline for abstracts submission:
                </p>
                <p className="text-[#d9fffb]/75">01 September 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPORTANT INSTRUCTIONS & GUIDELINES / Presentation Formats */}
      <section
        id="abstract-guidelines"
        className="relative overflow-hidden py-16 text-white"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center sm:text-start sm:flex justify-between items-center">
            <div>
              <h2 className="text-white mb-3">Important instructions & guidelines</h2>
              <p className="mx-auto  text-white/70">
              2 forms of presentations abstracts will be considered for
            </p>
            </div>
            <div className="inline-flex items-center gap-2 text-nowrap rounded-full border border-white/20 bg-white/10 px-5 py-2 text-lg font-semibold text-white backdrop-blur-xl">
              <span>Presentation Formats</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {presentationFormats.map((format) => {
              const Icon = format.icon;

              return (
                <div
                  key={format.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-300/35"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-white">{format.title}</h3>
                  <p className="text-white/70">{format.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Submission Rules */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[#25e7dc]/18 bg-[radial-gradient(circle_at_12%_20%,rgba(22,216,205,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(37,231,220,0.16),transparent_28%),linear-gradient(135deg,#043d3d,#063f43_55%,#032f34)] p-7 text-white backdrop-blur-2xl">
            <div className="mb-5 flex items-center gap-3">
              <ClipboardList className="text-[#25e7dc]" size={26} />
              <h3 className="text-white">Submission Rules</h3>
            </div>

            <ul className="space-y-4">
              {submissionRules.map((rule) => (
                <li key={rule} className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#25e7dc]"
                  />
                  <span className="text-[#d9fffb]/75">{rule}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-[#25e7dc]/16 bg-[#052f34]/70 p-5">
              <ul className="space-y-3 text-[#d9fffb]/75">
                {abstractDetails.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#25e7dc]"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[#d9fffb]/75">
                You will be notified of receipt of your abstract by email. If
                you do not receive an email within two weeks of submission or if
                you have any additional queries, please contact at{" "}
                <a
                  href="mailto:office@icfmconference.com"
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-[#25e7dc]"
                >
                  office@icfmconference.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Abstract Categories */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2>Abstract Categories</h2>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {abstractCategories.map((category, index) => {
              const Icon = index === 0 ? Mic : FileText;

              return (
                <div
                  key={category}
                  className="rounded-3xl border border-white/12 bg-white/[0.07] p-7 text-center backdrop-blur-2xl"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-white">{category}</h3>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-8 text-center backdrop-blur-2xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
            <BadgeCheck size={28} />
          </div>
          <h3 className="mb-4">Theme Options</h3>
          <p className="text-white/70">
            All topics related to Family Medicine Speciality
          </p>
        </div>
        <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-8 backdrop-blur-2xl">
          <h3 className="mb-4 text-white">Selection Criteria</h3>

          <p className="mb-5 text-white/70">
            Abstracts will be evaluated by the scientific committee through a
            blind review process and scored based upon the following criteria:
          </p>

          <ul className="space-y-4">
            {selectionCriteria.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-[#22d3c8]"
                />
                <span className="text-white/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
          </div>

        </div>
      </section>
      {/* 7. Terms and Conditions */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2>Terms and Conditions</h2>
          </div>

          <div className="">
            <ul className="grid gap-4 md:grid-cols-2">
              {terms.map((term) => (
                <li key={term} className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#22d3c8]"
                  />
                  <span className="text-white/70">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Important dates */}
      <section
        id="important-dates"
        className="relative overflow-hidden py-16 text-white"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2>Important dates</h2>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="relative">
              <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-teal-300/30 md:block" />

              <div className="space-y-5">
                {importantDates.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-2xl md:ml-12"
                  >
                    <div className="absolute -left-12 top-7 hidden h-10 w-10 items-center justify-center rounded-full bg-[#0aa6a6] text-sm font-bold text-white shadow-[0_0_24px_rgba(34,211,200,0.45)] md:flex">
                      {index + 1}
                    </div>

                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-white">{item.title}</h3>
                      <span className="inline-flex w-fit rounded-full border border-white/12 bg-white/10 px-4 py-2 font-bold text-[#22d3c8] shadow-sm">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Abstract Submission Link */}
      {/* <section className="relative pb-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <Link
            to="https://abstract.congenie.com/abstract/icfm2026/abstract/login.php"
            target="_blank"
            className="btn btn-main"
          >
            Submit Abstract
          </Link>
        </div>
      </section> */}
    </>
  );
}

export default AbstractPage;
