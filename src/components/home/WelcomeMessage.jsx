import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { X, MailOpen, Quote, Sparkles } from "lucide-react";
import ceoimage from "../../assets/images/ceo.png";
import conferencePresidentImage from "../../assets/images/committee/azzam-al-odhayani.webp";

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
      <div
        className="
          group relative mx-auto max-w-5xl overflow-hidden
          rounded-4xl
          border border-[#12c4bb]/25
          p-6 text-white
          backdrop-blur-2xl
          md:p-8
          mt-10
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute -right-24 -top-24
            h-72 w-72 rounded-full
            bg-[radial-gradient(circle,rgba(18,196,187,0.22),transparent_70%)]
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-28 -left-24
            h-72 w-72 rounded-full
            bg-[radial-gradient(circle,rgba(6,169,159,0.16),transparent_70%)]
          "
        />

        <div
          className="
            relative z-10 grid items-center gap-8
            lg:grid-cols-[1fr_280px]
            lg:gap-20
          "
        >
          {/* Content — Left Side */}
          <div dir="rtl" className="order-2 text-right lg:order-1">
            <blockquote
              className="
                relative mb-8 text-xl font-medium leading-[2]
                text-white/90
                md:text-2xl
                inline-block
              "
            ><Quote
                aria-hidden="true"
                className="pointer-events-none absolute right-1 -top-5 h-5 w-5 text-[#22d3c8]/35 md:-right-8 md:top-auto md:h-7 md:w-7"
                size={28}
                strokeWidth={1.7}
              />
              
             نسعى إلى تقديم رعاية صحية متكاملة تتمحور حول الإنسان،<br />
             وتعزز جودة الحياة من خلال التميز المهني والابتكار والمعرفة
              <Quote
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 left-1 mt-0 h-5 w-5 rotate-180 text-[#22d3c8]/35 md:bottom-auto md:-left-10 md:-mt-10 md:h-7 md:w-7"
                size={28}
                strokeWidth={1.7}
              />
            </blockquote>

            <div className="border-r-4 border-[#12c4bb] pr-5">
              <h3 className="mb-2 text-teal-400">
                سعادة الدكتور علي بن محمد الشهري
              </h3>

              <p className="mb-0 leading-7 text-white/65">
                المدير العام التنفيذي لمدينة الأمير سلطان الطبية العسكرية
              </p>
            </div>
          </div>

          {/* Person Image — Right Side */}
          <div className="order-1 mx-auto w-full max-w-[280px] lg:order-2">
            <div
              className="
                relative overflow-hidden rounded-[26px]
                border border-[#12c4bb]/30
                bg-[#043f41]
                shadow-[0_24px_60px_rgba(0,0,0,0.30)]
              "
            >
              <img
                src={ceoimage}
                loading="lazy"
                decoding="async"
                alt="سعادة الدكتور علي بن محمد الشهري"
                className="
                  aspect-square w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0 h-20
                  bg-linear-to-t from-[#043f41]/70 to-transparent
                "
              />
            </div>
          </div>
        </div>
      </div>
      <section
        ref={sectionRef}
        className="
          relative overflow-hidden py-18 text-white
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
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(260px,0.75fr)_minmax(0,1.65fr)]">
            {/* Conference President — Left */}
            <div className="mx-auto w-full max-w-sm text-center lg:mx-0 rounded-4xl
          border border-[#12c4bb]/25
          p-6 text-white
          backdrop-blur-2xl">
              <div className="relative mx-auto mb-6 w-full max-w-[270px]">
                <div className="absolute -inset-4 rounded-full bg-teal-300/10 blur-2xl" />
                <div
                  className="
                    relative overflow-hidden rounded-[30px]
                    border border-teal-200/25 bg-[#063b3d]/45
                    shadow-[0_28px_70px_rgba(0,0,0,0.28)]
                  "
                >
                  <img
                    src={conferencePresidentImage}
                    loading="lazy"
                    decoding="async"
                    alt="Dr. Azzam Al Odhayani"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#063b3d]/70 to-transparent" />
                </div>

                <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full border border-teal-200/20" />
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-teal-200/10" />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#7ee9e2]">
                Conference President
              </p>
              <h3 className="mb-2 text-white">Dr. Azzam Al Odhayani</h3>
              <p className="mx-auto mb-0 max-w-xs leading-6 text-white/65">
                Director of the Family and Community Medicine Department
              </p>
            </div>

            {/* Existing Welcome Content — Right */}
            <div className="text-center">

              <div
                className="
                  mb-4 inline-flex items-center gap-2 rounded-full
                  border border-white/15 bg-white/10 md:px-4 py-2
                  text-sm font-bold text-cyan-100
                  backdrop-blur-xl
                "
              >
                <Sparkles size={15} className="text-[#22d3c8]" />
                Welcome Message
              </div>

              <h2 className="mb-5 text-white">Invitation</h2>

              <p className="mx-auto max-w-7xl text-lg leading-8 text-justify [text-align-last:center]">
                Dear Colleagues,
On behalf of the Department of Family and Community Medicine at Prince Sultan Military Medical City (PSMMC), in collaboration with the Saudi Society of Family and Community Medicine (SSFCM), it is my great pleasure to welcome you to the <b>5th International Family Medicine Symposium on Family Medicine and Home Health Care 2026</b>, taking place in Riyadh, Kingdom of Saudi Arabia, on <b>6–7 October 2026</b>, with Pre-Conference Workshops on <b>5 October 2026</b>.
This symposium brings together healthcare professionals, researchers, academics, and industry leaders from around the world to exchange knowledge, share best practices, and explore the latest advancements in family medicine and home healthcare. Through an outstanding scientific programme, interactive discussions, practical workshops, and a comprehensive healthcare exhibition, we aim to foster collaboration, innovation, and excellence in patient care.
The Symposium also provides an exceptional platform for professional networking, multidisciplinary collaboration, and meaningful partnerships that contribute to improving healthcare outcomes and shaping the future of family medicine.
We are honoured to welcome you to this distinguished international event and look forward to your valuable participation in Riyadh

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
                    Welcome Message
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
                  On behalf of the Department of Family and Community Medicine at{" "}
                  <b className="text-white">
                    Prince Sultan Military Medical City (PSMMC)
                  </b>, in collaboration with the{" "}
                  <b className="text-white">
                    Saudi Society of Family and Community Medicine (SSFCM)
                  </b>
                  , it is my great pleasure to welcome you to the{" "}
                  <b className="text-white">
                    5th International Family Medicine Symposium on Family Medicine and Home Health Care 2026
                  </b>, taking place in Riyadh, Kingdom of Saudi Arabia, on{" "}
                  <b className="text-white">6–7 October 2026</b>, with Pre-Conference Workshops on{" "}
                  <b className="text-white">5 October 2026</b>.
                </p>

                <p className="text-[#d9fffb]/72">
                  This symposium brings together healthcare professionals, researchers, academics, and industry leaders from around the world to exchange knowledge, share best practices, and explore the latest advancements in family medicine and home healthcare. Through an outstanding scientific programme, interactive discussions, practical workshops, and a comprehensive healthcare exhibition, we aim to foster collaboration, innovation, and excellence in patient care.
                </p>

                <p className="text-[#d9fffb]/72">
                  The Symposium also provides an exceptional platform for professional networking, multidisciplinary collaboration, and meaningful partnerships that contribute to improving healthcare outcomes and shaping the future of family medicine.
                </p>

                <p className="mb-6 text-[#d9fffb]/72">
                  We are honoured to welcome you to this distinguished international event and look forward to your valuable participation in Riyadh.
                </p>

                <div
                  className="
                    mt-7 flex flex-wrap items-center justify-between gap-6
                    rounded-[26px] border border-[#25e7dc]/18 bg-[#052f34]/70
                    p-5
                  "
                >
                  <div>

                    <h5 className="mb-1 text-lg font-bold text-white">
                      Dr. Azzam Al Odhayani
                    </h5>

                    <p className="mb-0 max-w-lg text-[#d9fffb]/72">
                      Director of the Family and Community Medicine Department
                      <br />
                      <b className="text-white">Conference President</b>
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
