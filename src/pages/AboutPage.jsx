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
        },
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
        },
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
        },
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
            bg-[linear-gradient(rgba(37,231,220,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,231,220,0.12)_1px,transparent_1px)]
            bg-size-[58px_58px]
          "
        />

        {/* Moving Glows */}
        <div
          className="
            absolute -left-24 top-20
            h-80 w-80 rounded-full
            bg-[#16d8cd]/18 blur-3xl
            animate-[floatGlow_12s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute -right-24 bottom-20
            h-96 w-96 rounded-full
            bg-[#25e7dc]/14 blur-3xl
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
              <h2>About Conference</h2>
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
                      border border-[#25e7dc]/18
                      bg-[linear-gradient(150deg,rgba(5,79,81,0.72),rgba(3,47,52,0.58))]
                      p-5
                      shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-1
                     hover:border-[#25e7dc]/45
hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(37,231,220,0.2)]
                      md:p-7
                    "
                  >
                    {/* Hover Shine Sweep */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 z-30
                        translate-x-[-120%] skew-x-[-18deg]
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),rgba(37,231,220,0.22),transparent)]
                        opacity-0 blur-[1px]
                        transition-all duration-450 ease-out
                        group-hover:translate-x-[120%]
                        group-hover:opacity-100
                      "
                    />

                    {/* Card Glow */}
                    <div
                      className="
                        absolute -right-20 -top-20
                        h-56 w-56 rounded-full
                        bg-[radial-gradient(circle,rgba(22,216,205,0.22),transparent_70%)]
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        absolute -left-20 bottom-0
                        h-52 w-52 rounded-full
                        bg-[radial-gradient(circle,rgba(37,231,220,0.14),transparent_70%)]
                      "
                    />

                    {/* Inner Shine */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(37,231,220,0.1))]
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
                        <p className="text-[#d9fffb]/75">{item.text}</p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className="
                        absolute bottom-0 left-0 right-0 h-1
                        bg-linear-to-r from-transparent via-[#25e7dc] to-transparent
                        opacity-50 transition-all duration-500
                        group-hover:h-1.5 group-hover:opacity-100
                        group-hover:shadow-[0_0_28px_rgba(37,231,220,0.75)]
                      "
                    />
                  </div>

                  {/* Journey Connector */}
                  {index !== 2 && (
                    <div
                      className="
                        mx-auto h-10 w-px
                        bg-linear-to-b from-[#16d8cd] to-[#25e7dc]
                        shadow-[0_0_20px_rgba(37,231,220,0.55)]
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
    bg-[#064447]
  "
>
  {/* Main background like attached image */}
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(ellipse_at_82%_84%,rgba(15,205,192,0.98)_0%,rgba(13,173,164,0.82)_28%,rgba(8,109,107,0.55)_48%,rgba(6,68,71,0)_72%)]
    "
  />

  {/* Soft right-side teal wash */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(90deg,rgba(6,68,71,0.98)_0%,rgba(6,68,71,0.94)_38%,rgba(7,104,101,0.72)_64%,rgba(13,184,174,0.68)_100%)]
    "
  />

  {/* Dark left depth */}
  <div
    className="
      absolute left-0 top-0 h-full w-[58%]
      bg-[linear-gradient(90deg,rgba(5,55,58,0.98)_0%,rgba(5,55,58,0.88)_58%,rgba(5,55,58,0)_100%)]
    "
  />

  {/* Bright bottom-right glow */}
  <div
    className="
      absolute -right-36 -bottom-44
      h-[640px] w-[880px] rounded-full
      bg-[#13d3c6]/70 blur-3xl
    "
  />

  {/* Subtle dark overlay for text readability */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(180deg,rgba(4,55,58,0.14)_0%,rgba(4,55,58,0.05)_45%,rgba(4,55,58,0.08)_100%)]
    "
  />

  {/* Floating Glows */}
  <div
    className="
      absolute -left-24 top-16
      h-80 w-80 rounded-full
      bg-[#0fb9b1]/12 blur-3xl
      animate-[floatGlow_12s_ease-in-out_infinite]
    "
  />

  <div
    className="
      absolute -right-24 bottom-10
      h-96 w-96 rounded-full
      bg-[#25e7dc]/18 blur-3xl
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
          border border-[#16d8cd]/24
          bg-[linear-gradient(135deg,rgba(5,67,70,0.58),rgba(4,56,59,0.42))]
          p-7
          backdrop-blur-2xl
          transition-all duration-500
          hover:-translate-y-2
          hover:scale-[1.01]
          hover:border-[#25e7dc]/45
          hover:shadow-[0_34px_95px_rgba(0,0,0,0.30)]
          md:p-9
        "
      >
        {/* Card Glow */}
        <div
          className="
            absolute -right-24 -top-24
            h-72 w-72 rounded-full
            bg-[radial-gradient(circle,rgba(22,216,205,0.22),transparent_70%)]
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

          <p className="text-justify text-white/88 [text-align-last:center]">
            Prince Sultan Military Medical City provides healthcare services at
            the primary, secondary, and specialized levels in accordance with
            international quality standards for employees of the Ministry of
            Defense, their families, and other eligible groups. This is achieved
            through providing a distinguished work environment, attracting top
            human resources, and promoting a culture of teamwork, professional
            development, and scientific research.
          </p>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            mt-8 h-1.5 w-full rounded-full
            bg-linear-to-r from-[#0fb9b1] via-[#25e7dc] to-[#16d8cd]
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
          border border-[#16d8cd]/24
          bg-[linear-gradient(135deg,rgba(5,67,70,0.52),rgba(4,56,59,0.36))]
          p-7
          backdrop-blur-2xl
          transition-all duration-500
          hover:-translate-y-2
          hover:scale-[1.01]
          hover:border-[#25e7dc]/45
          hover:shadow-[0_34px_95px_rgba(0,0,0,0.30)]
          md:p-9
        "
      >
        {/* Card Glow */}
        <div
          className="
            absolute -right-24 -top-24
            h-72 w-72 rounded-full
            bg-[radial-gradient(circle,rgba(37,231,220,0.2),transparent_70%)]
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

          <p className="text-justify text-white/88 [text-align-last:center]">
            Saudi Society of Family and Community Medicine was established under
            the umbrella of King Faisal University in 1411H. The Honorary
            President of the Society is His Royal Highness Prince Talal bin
            Abdulaziz Al Saud. The Society has 12 branches across the Kingdom of
            Saudi Arabia, aiming to fulfill its mission of developing family
            medicine, community medicine, and primary healthcare services
            throughout the Kingdom.
          </p>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            mt-8 h-1.5 w-full rounded-full
            bg-linear-to-r from-[#25e7dc] via-[#16d8cd] to-[#0fb9b1]
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
