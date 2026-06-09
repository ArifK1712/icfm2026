import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { X, MailOpen, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function WelcomeMessage() {
  const sectionRef = useRef(null);
  const modalRef = useRef(null);
  const modalCardRef = useRef(null);

  const hasClosedRef = useRef(false);
  const hasAutoOpenedRef = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (hasClosedRef.current) return;
    if (hasAutoOpenedRef.current) return;

    hasAutoOpenedRef.current = true;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    hasClosedRef.current = true;

    if (modalRef.current && modalCardRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsModalOpen(false);
        },
      });

      tl.to(modalCardRef.current, {
        opacity: 0,
        y: 55,
        scale: 0.94,
        filter: "blur(12px)",
        duration: 0.45,
        ease: "power3.inOut",
      }).to(
        modalRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "-=0.22",
      );
    } else {
      setIsModalOpen(false);
    }
  };

  const openModalManually = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "welcomeInvitationModalTrigger",
        trigger: sectionRef.current,
        start: "top 58%",
        end: "bottom 35%",

        // Auto-open only once while scrolling top to bottom
        onEnter: openModal,

        // Do not auto-open while scrolling bottom to top
        onEnterBack: () => {},

        // Do not reset auto-open state
        onLeave: () => {},
        onLeaveBack: () => {},

        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getById("welcomeInvitationModalTrigger")?.kill(true);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.set(modalRef.current, {
        opacity: 0,
      });

      gsap.set(modalCardRef.current, {
        opacity: 0,
        y: 90,
        scale: 0.9,
        filter: "blur(16px)",
      });

      const tl = gsap.timeline();

      tl.to(modalRef.current, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }).to(
        modalCardRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.15,
          ease: "power4.out",
        },
        "-=0.35",
      );
    }, modalRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        className="
          relative overflow-hidden pb-24 text-white
        "
      >
        <div
          className="
            absolute inset-0 opacity-[0.14]
            bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
            bg-size-[64px_64px]
            animate-gridMove
          "
        />

        {/* Moving Glows */}
        <div
          className="
            absolute -left-24 top-16
            h-80 w-80 rounded-full
            bg-teal-400/15 blur-3xl
            animate-[floatGlow_12s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute -right-24 bottom-10
            h-96 w-96 rounded-full
            bg-cyan-400/15 blur-3xl
            animate-[floatGlow_16s_ease-in-out_infinite_reverse]
          "
        />

        {/* Teaser Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div
            className="
              mx-auto max-w-3xl rounded-[36px]
              border border-white/12
              bg-white/6
              px-6 py-14
              backdrop-blur-2xl
            "
          >
            <div
              className="
                mx-auto mb-6 flex h-16 w-16 items-center justify-center
                rounded-3xl border border-white/15 bg-white/10 text-[#22d3c8]
                shadow-[0_18px_50px_rgba(0,0,0,0.25)]
              "
            >
              <MailOpen size={30} />
            </div>

            <div
              className="
                mb-4 inline-flex items-center gap-2 rounded-full
                border border-white/15 bg-white/10 px-4 py-2
                text-sm font-bold text-cyan-100
                backdrop-blur-xl
              "
            >
              <Sparkles size={15} className="text-[#22d3c8]" />
              Welcome Message
            </div>

            <h2 className="mb-5 text-white">Invitation</h2>

            <p className="mx-auto max-w-2xl text-lg leading-8">
              Dear Colleagues, we are pleased to invite you to participate in
              the 5th International Family Medicine Symposium on Family Medicine
              and Home Health Care 2026.
            </p>

            <button
              type="button"
              onClick={openModalManually}
              className="btn btn-main mt-8"
            >
              Read Invitation
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="
      fixed inset-0 z-999
      flex items-center justify-center
      bg-[#021f22]/86 px-4 py-5
      backdrop-blur-xl
    "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            ref={modalCardRef}
            className="
        relative flex max-h-[90vh] w-full max-w-6xl
        flex-col overflow-hidden rounded-[34px]
        border border-[#25e7dc]/24
        bg-[radial-gradient(circle_at_12%_18%,rgba(22,216,205,0.24),transparent_28%),radial-gradient(circle_at_88%_28%,rgba(37,231,220,0.16),transparent_26%),linear-gradient(135deg,#043d3d,#063f43_58%,#032f34)]
        shadow-[0_40px_140px_rgba(0,0,0,0.58)]
      "
          >
            {/* Modal Background Effects */}
            <div
              className="
          pointer-events-none absolute inset-0 opacity-[0.14]
          bg-[linear-gradient(rgba(37,231,220,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(37,231,220,0.13)_1px,transparent_1px)]
          bg-size-[58px_58px]
        "
            />

            <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#16d8cd]/22 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#25e7dc]/18 blur-3xl" />

            {/* Modal Header */}
            <div
              className="
          relative z-10 flex items-center justify-between gap-4
          border-b border-[#25e7dc]/18 px-5 py-4
          sm:px-7
        "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-2xl border border-[#25e7dc]/25 bg-[#052f34]/75 text-[#25e7dc]
            "
                >
                  <MailOpen size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#9dfff7]/80">
                    Welcome Message
                  </p>
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    Invitation
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-full border border-[#25e7dc]/25 bg-[#052f34]/75
            text-white transition-all duration-300 cursor-pointer
            hover:bg-[#16d8cd] hover:text-[#03363a]
          "
                aria-label="Close invitation modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative z-10 overflow-y-auto px-5 py-6 sm:px-7 lg:px-10">
              <div className="space-y-3">
                <p className="font-bold text-white">Dear Colleagues,</p>

                <p className="text-[#d9fffb]/72">
  On behalf of The{" "}
  <b className="text-white">
    Saudi Society of Family and Community Medicine (SSFCM)
  </b>{" "}
  and the{" "}
  <b className="text-white">
    Prince Sultan Military Medical City (PSMMC) Department of Family and
    Community Medicine
  </b>
  , we are honored to invite your esteemed organization to support and
  participate in the{" "}
  <b className="text-white">
    5th International Family Medicine Symposium on Family Medicine and Home
    Health Care 2026
  </b>
  . This prestigious three-day, expert-led educational event will be held from{" "}
  <b className="text-white">5 to 7 October 2026</b> in Riyadh, Kingdom of Saudi
  Arabia.
</p>

                <p className="text-[#d9fffb]/72">
                  This distinguished 2-days scientific event will take place
                  from 6–7 October 2026 with Pre-Conference Workshops on 5
                  October, 2026 in Riyadh, Kingdom of Saudi Arabia, bringing
                  together leading healthcare professionals, academics, and
                  policymakers from across the region and beyond.
                </p>

                <p className="text-[#d9fffb]/72">
                  Building on the success of previous editions, the 2026
                  symposium aims to serve as a premier platform for the exchange
                  of knowledge, innovation, and best practices in family
                  medicine and home healthcare. The scientific program will
                  feature a diverse and forward-looking agenda, including:
                </p>

                <ul className="mb-4 list-disc space-y-2 pl-4 text-lg text-[#d9fffb]/72">
                  <li>
                    High-level scientific presentations by international and
                    regional experts
                  </li>
                  <li>
                    Interactive panel discussions addressing key challenges and
                    future trends
                  </li>
                  <li>
                    Practical, hands-on workshops designed to enhance clinical
                    skills and healthcare delivery
                  </li>
                </ul>

                <p className="text-[#d9fffb]/72">
                  The symposium is expected to host over 1,000 in-person
                  participants, offering exceptional opportunities for
                  networking, collaboration, and professional development within
                  a dynamic and engaging environment.
                </p>

                <p className="text-[#d9fffb]/72">
                  In addition to the scientific sessions, a comprehensive
                  exhibition will run alongside the program, showcasing the
                  latest advancements in healthcare services, technologies, and
                  solutions.
                </p>

                <p className="text-[#d9fffb]/72">
                  We are pleased to confirm that MCI Saudi Arabia, operating
                  under license from Alrowad Exhibitions and Conferences
                  Organizing Co., has been appointed by SSFCM and PSMMC as the
                  official conference organizer.
                </p>

                <p className="mb-6 text-[#d9fffb]/72">
                  We warmly encourage you to join us for this important event
                  and contribute to advancing the future of family medicine and
                  home healthcare. We look forward to welcoming you in Riyadh.
                </p>

                <div
                  className="
              mt-7 flex flex-wrap items-center justify-between gap-6
              rounded-[26px] border border-[#25e7dc]/18 bg-[#052f34]/70
              p-5
            "
                >
                  <div>
                    <p className="mb-1 text-[#d9fffb]/72">Yours sincerely,</p>

                    <h5 className="mb-1 text-lg font-bold text-white">
                      Organizing Committee
                    </h5>

                    <p className="mb-0 max-w-md text-[#d9fffb]/72">
                      5th International Family Medicine Symposium on Family
                      Medicine and Home Health Care 2026
                    </p>
                  </div>

                  <Link
                    to="/registration"
                    className="btn btn-main"
                    onClick={closeModal}
                  >
                    Join The Conference
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomeMessage;
