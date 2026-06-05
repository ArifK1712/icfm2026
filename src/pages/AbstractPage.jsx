// import InnerPageHero from "../components/InnerPageHero";

import {
  CalendarDays,
  ClipboardList,
  FileText,
  Mail,
  Mic,
  CheckCircle2,
  AlertCircle,
  BadgeCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

function AbstractPage() {
  const importantDates = [
    {
      title: "Abstract Submission Opens",
      date: "June 15, 2026",
    },
    {
      title: "Abstract Submission Deadline",
      date: "July 30, 2026",
    },
    {
      title: "Abstract Review Process",
      date: "August 20, 2026",
    },
    {
      title: "Abstract Acceptance Notification",
      date: "August 24, 2026",
    },
    {
      title: "Deadline for Authors to Register",
      date: "August 30, 2026",
    },
  ];

  const submissionRules = [
    "Abstracts must contain original scientific data collected by the author(s).",
    "All abstracts must be written in English.",
    "The Scientific Committee reserves the right to edit abstracts where the English structure makes comprehension difficult.",
    "All abstracts must be submitted via the Online Abstract Portal.",
    "Abstracts should be limited to a maximum of 250 words.",
  ];

  const abstractHeadings = [
    "Introduction",
    "Aim",
    "Methods",
    "Results",
    "Conclusions",
  ];

  const selectionCriteria = [
    "Pertinence: Originality, Actuality, Useful Results",
    "Structure: Introduction, Aim, Material & Methods, Results, Discussion, Conclusion",
  ];

  const terms = [
    "The scientific committee reserves the right to make the final decision about abstract acceptance and scheduling into the program based on topics and time constraints.",
    "All abstracts must be prepared using the abstract submission guidelines.",
    "Each abstract submission must indicate if the material was published or presented in any prior conferences or received any awards.",
    "All presenters must register to attend the conference within a maximum of 2 weeks of acceptance of the abstract.",
    "Presenters must be present at the time of the conference.",
    "A certificate of appreciation will be given to the presenting author only.",
    "Presenters must not use the session as a marketing opportunity for products or equipment.",
  ];

  return (
    <>
      <section
        className="
          relative overflow-hidden pt-30 py-16 text-white
        "
      >

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)] opacity-0 blur-[1px] transition-all duration-450 ease-out group-hover:translate-x-[120%] group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)] transition-all duration-300 group-hover:scale-125" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <CalendarDays size={28} />
              </div>

              <h3 className="relative z-10 text-white">Submission Deadline</h3>

              <p className="relative z-10 text-white/75">
                <b className="text-white">July 30, 2026</b>
              </p>

              <p className="relative z-10 text-white/70">
                Abstracts must be submitted before the deadline via the Online
                Abstract Portal.
              </p>
            </div>

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)] opacity-0 blur-[1px] transition-all duration-450 ease-out group-hover:translate-x-[120%] group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)] transition-all duration-300 group-hover:scale-125" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <Mic size={28} />
              </div>

              <h3 className="relative z-10 text-white">Presentation Formats</h3>

              <p className="relative z-10 text-white/70">
                Abstracts will be considered for oral presentation and poster
                presentation during poster presentation tours.
              </p>
            </div>

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <BadgeCheck size={28} />
              </div>

              <h3 className="relative z-10 text-white">Theme Options</h3>

              <p className="relative z-10 text-white/70">
                All topics related to the Family Medicine speciality are welcome
                for submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="abstract-guidelines"
        className="relative overflow-hidden py-16 text-white"
      >

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="subtitle">Abstract Submission</span>

              <h2 className="mb-6 text-white">
                Important Instructions & Guidelines
              </h2>

              <p className="text-white/70">
                The conference invites free paper, scientific research, and
                abstracts to be presented during the conference. The scientific
                committee shall review each abstract and presenters shall be
                notified of the outcomes.
              </p>

              <p className="text-white/70">
                Successful authors shall be invited to present poster papers
                depending upon the originality and appeal of the scientific
                work.
              </p>

              <div
                className="
                  mt-8 rounded-3xl border border-white/12
                  bg-white/[0.07] p-6
                  backdrop-blur-2xl
                "
              >
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="text-[#22d3c8]" size={24} />
                  <h3 className="text-white">Abstract Requirements</h3>
                </div>

                <p className="text-white/70">
                  Abstracts should include the title, author details,
                  organisation, city, country, email, phone numbers, fax numbers,
                  mailing address, presenting author name, and a 3-line
                  biography.
                </p>

                <div className="my-3 flex flex-wrap gap-2">
                  {abstractHeadings.map((heading) => (
                    <span
                      key={heading}
                      className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-[#22d3c8] shadow-sm"
                    >
                      {heading}
                    </span>
                  ))}
                </div>

                <p className="text-white/70">
                  Please provide evidence of ethical approval and funding
                  acknowledgements, if any.
                </p>
              </div>
            </div>

            <div
              className="
                rounded-3xl border border-white/12
                bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
                p-7 text-white
                backdrop-blur-2xl
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="text-cyan-300" size={26} />
                <h3 className="text-white">Submission Rules</h3>
              </div>

              <ul className="space-y-4">
                {submissionRules.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-cyan-300"
                    />
                    <span className="text-white/75">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-white/75">
                  <b className="text-white">For queries, contact:</b>
                </p>

                <a
                  href="mailto:ajay.gupta@wearemci.com"
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-cyan-200"
                >
                  <Mail size={18} />
                  ajay.gupta@wearemci.com
                </a>

                <p className="text-white/75">
                  You will be notified of receipt of your abstract by email. If
                  you do not receive an email within two weeks of submission,
                  please contact the above email address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Presentation Formats</span>

            <h2 className="text-white">Abstract Categories</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12 bg-white/[0.07] p-8
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
              "
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <Mic size={28} />
              </div>

              <h3 className="text-white">Oral Presentation</h3>

              <p className="text-white/70">
                Articles, research reports of interesting or complex cases, and
                ethical or clinical dilemmas may be considered for expert panel
                discussion sessions.
              </p>
            </div>

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12 bg-white/[0.07] p-8
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
              "
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <FileText size={28} />
              </div>

              <h3 className="text-white">Poster Presentation</h3>

              <p className="text-white/70">
                Selected abstracts may be presented as poster presentations
                during dedicated poster presentation tours at the conference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="important-dates"
        className="relative overflow-hidden py-16 text-white"
      >

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Important Dates</span>

            <h2 className="text-white">Abstract Timeline</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-teal-300/30 md:block" />

              <div className="space-y-5">
                {importantDates.map((item, index) => (
                  <div
                    key={item.title}
                    className="
                      relative rounded-3xl border border-white/12
                      bg-white/[0.07] p-6
                      backdrop-blur-2xl
                      md:ml-12
                    "
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

      <section className="relative overflow-hidden  py-16 text-white">
        <div
          className="
            absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-size-[58px_58px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div
              className="
                rounded-3xl border border-white/12
                bg-white/[0.07] p-8
                backdrop-blur-2xl
              "
            >
              <h3 className="mb-3 text-white">Selection Criteria</h3>

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

            <div
              className="
                rounded-3xl border border-white/12
                bg-white/[0.07] p-8
                backdrop-blur-2xl
              "
            >
              <h3 className="mb-3 text-white">Theme Options</h3>

              <p className="text-white/70">
                Abstracts may be submitted under all topics related to{" "}
                <b className="text-white">Family Medicine Speciality</b>.
              </p>

              <div className="mt-5 rounded-2xl border border-white/12 bg-white/10 p-5 text-white/75">
                Abstracts will be evaluated by the scientific committee through a
                blind review process.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden  py-16 text-white">

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Terms and Conditions</span>

            <h2 className="text-white">Before You Submit</h2>
          </div>

          <div
            className="
              mx-auto max-w-5xl rounded-3xl
              border border-white/12 bg-white/[0.07]
              p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)]
              backdrop-blur-2xl md:p-8
            "
          >
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

          <div className="mt-10 text-center">
            <Link
              to="https://abstract.congenie.com/abstract/icfm2026/abstract/login.php"
              target="_blank"
              className="btn btn-main"
            >
              Submit Abstract
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AbstractPage;