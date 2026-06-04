import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import psmmcLogo from "../assets/images/psmmc-logo.png";
import ssfcmLogo from "../assets/images/ssfcm-logo.png";

gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const aboutPageRef = useRef(null);
  const headingRef = useRef(null);
  const journeyCardsRef = useRef([]);
  const partnerCardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Journey cards animation
      gsap.fromTo(
        journeyCardsRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.94,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: journeyCardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Partner cards animation
      gsap.fromTo(
        partnerCardsRef.current,
        {
          opacity: 0,
          y: 90,
          scale: 0.92,
          rotateX: 8,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.22,
          ease: "power4.out",
          scrollTrigger: {
            trigger: partnerCardsRef.current[0],
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutPageRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={aboutPageRef}>
      {/* Section 1: About Conference */}
      <section
        className="
          relative overflow-hidden
          pt-30 py-16 text-white
        "
      >

        {/* Grid Background */}
        <div
          className="
            absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:58px_58px]
          "
        />

        {/* Moving Glows */}
        <div
          className="
            absolute -left-24 top-20
            h-80 w-80 rounded-full
            bg-teal-400/15 blur-3xl
            animate-[floatGlow_12s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute -right-24 bottom-20
            h-96 w-96 rounded-full
            bg-cyan-400/15 blur-3xl
            animate-[floatGlow_16s_ease-in-out_infinite_reverse]
          "
        />

        

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Top Heading */}
          <div
            ref={headingRef}
            className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div>
              <div className="subtitle">Conference Journey</div>
              <h2 className="text-white">About Conference</h2>
            </div>
          </div>

          {/* Journey Cards */}
          <div className="relative">
            <div>
              {[
                {
                  text: `The First International Conference on Family Medicine (ICFM) was organized by Prince Sultan Military Medical City (PSMMC), Department of Family and Community Medicine, from 23–25 April 2019 at the Hilton Riyadh Hotel & Residences, Saudi Arabia. The conference was held under the theme “Raising the Standard in Primary Care” and encompassed a wide range of disciplines within Family Medicine. The event was highly successful, attracting over 1,000 delegates.`,
                },
                {
                  text: `The Second ICFM was conducted virtually in December 2020 and received an overwhelming response, with more than 2,000 delegates in attendance. The conference focused on the theme “Innovations in Primary Care.” Subsequently, the Third and Fourth ICFM were hosted at the Fairmont Hotel, Riyadh, further strengthening the conference’s reputation as a leading platform for Family Medicine professionals.`,
                },
                {
                  text: `This year, the conference will be held jointly under the auspices of the Saudi Society of Family and Community Medicine (SSFCM), in collaboration with the longstanding host, Prince Sultan Military Medical City (PSMMC). United by a shared commitment to advancing healthcare, the conference serves as a vital forum for the dissemination and exchange of knowledge.`,
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Row Card */}
                  <div
                    ref={(el) => {
                      journeyCardsRef.current[index] = el;
                    }}
                    className="
                      group relative overflow-hidden
                      rounded-4xl
                      border border-white/12
                      bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                      p-5
                      shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-teal-300/35
                      hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
                      md:p-7
                    "
                  >
                    {/* Hover Shine Sweep */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 z-30
                        translate-x-[-120%] skew-x-[-18deg]
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)]
                        opacity-0 blur-[1px]
                        transition-all duration-[450ms] ease-out
                        group-hover:translate-x-[120%]
                        group-hover:opacity-100
                      "
                    />

                    {/* Card Glow */}
                    <div
                      className="
                        absolute -right-20 -top-20
                        h-56 w-56 rounded-full
                        bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)]
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        absolute -left-20 bottom-0
                        h-52 w-52 rounded-full
                        bg-[radial-gradient(circle,rgba(71,215,255,0.12),transparent_70%)]
                      "
                    />

                    {/* Inner Shine */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_42%,rgba(34,211,200,0.08))]
                      "
                    />

                    <div
                      className="
                        relative z-10 grid gap-6
                        lg:items-center
                      "
                    >
                      {/* Right Content */}
                      <div>
                        <p className="text-white/72">{item.text}</p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className="
                        absolute bottom-0 left-0 right-0 h-1
                        bg-gradient-to-r from-transparent via-[#22d3c8] to-transparent
                        opacity-50 transition-all duration-500
                        group-hover:h-1.5 group-hover:opacity-100
                        group-hover:shadow-[0_0_28px_rgba(34,211,200,0.75)]
                      "
                    />
                  </div>

                  {/* Journey Connector */}
                  {index !== 2 && (
                    <div
                      className="
                        mx-auto h-10 w-px
                        bg-gradient-to-b from-teal-400 to-cyan-400
                        shadow-[0_0_20px_rgba(34,211,200,0.55)]
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: PSMMC / Society */}
      <section
        className="
          relative overflow-hidden
          py-20
        "
      >

        {/* Floating Glows */}
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

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Card 1: PSMMC */}
            <div
              ref={(el) => {
                partnerCardsRef.current[0] = el;
              }}
              className="
                group relative flex h-full flex-col overflow-hidden
                rounded-4xl
                border border-white/12
                bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
                p-7
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:border-teal-300/35
                hover:shadow-[0_34px_95px_rgba(0,0,0,0.30)]
                md:p-9
              "
            >
              {/* Card Glow */}
              <div
                className="
                  absolute -right-24 -top-24
                  h-72 w-72 rounded-full
                  bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_70%)]
                  transition-all duration-300
                  group-hover:scale-125
                "
              />

              {/* Shine Effect */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-full
                  bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.12)_45%,transparent_75%)]
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              {/* Logo Box */}
              <div className="relative z-10 mb-8 flex items-center justify-center p-0">
                <img
                  src={psmmcLogo}
                  alt="Prince Sultan Military Medical City"
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-40 w-auto object-contain
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1 text-center">
                <h3 className="mb-5 text-3xl font-black text-white">PSMMC</h3>

                <p className="text-justify text-white/70 [text-align-last:center]">
                  Prince Sultan Military Medical City provides healthcare
                  services at the primary, secondary, and specialized levels in
                  accordance with international quality standards for employees
                  of the Ministry of Defense, their families, and other eligible
                  groups. This is achieved through providing a distinguished
                  work environment, attracting top human resources, and
                  promoting a culture of teamwork, professional development, and
                  scientific research.
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  mt-8 h-1.5 w-full rounded-full
                  bg-linear-to-r from-teal-400 via-cyan-400 to-teal-500
                "
              />
            </div>

            {/* Card 2: Society */}
            <div
              ref={(el) => {
                partnerCardsRef.current[1] = el;
              }}
              className="
                group relative flex h-full flex-col overflow-hidden
                rounded-4xl
                border border-white/12
                bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
                p-7
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:border-cyan-300/35
                hover:shadow-[0_34px_95px_rgba(0,0,0,0.30)]
                md:p-9
              "
            >
              {/* Card Glow */}
              <div
                className="
                  absolute -right-24 -top-24
                  h-72 w-72 rounded-full
                  bg-[radial-gradient(circle,rgba(71,215,255,0.22),transparent_70%)]
                  transition-all duration-300
                  group-hover:scale-125
                "
              />

              {/* Shine Effect */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-full
                  bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.12)_45%,transparent_75%)]
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              {/* Logo Box */}
              <div className="relative z-10 mb-8 flex items-center justify-center p-0">
                <img
                  src={ssfcmLogo}
                  alt="Saudi Society of Family and Community Medicine"
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-40 w-auto object-contain
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1 text-center">
                <h3 className="mb-5 text-3xl font-black text-white">
                  About the Society
                </h3>

                <p className="text-justify text-white/70 [text-align-last:center]">
                  Saudi Society of Family and Community Medicine was established
                  under the umbrella of King Faisal University in 1411H. The
                  Honorary President of the Society is His Royal Highness Prince
                  Talal bin Abdulaziz Al Saud. The Society has 12 branches
                  across the Kingdom of Saudi Arabia, aiming to fulfill its
                  mission of developing family medicine, community medicine, and
                  primary healthcare services throughout the Kingdom.
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  mt-8 h-1.5 w-full rounded-full
                  bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-500
                "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;