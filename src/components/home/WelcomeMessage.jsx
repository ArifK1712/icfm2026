import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import welcomeImg from "../../assets/images/welcomeimage.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function WelcomeMessage() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const chairRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.94,
        filter: "blur(10px)",
      });

      gsap.set(chairRef.current, {
        opacity: 0,
        x: -50,
        rotate: -8,
        scale: 0.9,
      });

      gsap.set(itemsRef.current, {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      })
        .to(
          chairRef.current,
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            duration: 0.85,
            ease: "back.out(1.5)",
          },
          "-=0.55",
        )
        .to(
          itemsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.42",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-0 py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div
          ref={cardRef}
          className="
            relative overflow-hidden rounded-[34px]
            bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
            p-6
            md:p-10 lg:p-12
          "
        >
          <div className="absolute -right-15 -top-15 h-55 w-55 rounded-full bg-teal-400/15" />
          <div className="absolute -bottom-20 -left-20 h-65 w-65 rounded-full bg-cyan-400/10" />

          <div className="relative z-10 grid items-start gap-10"> 
            {/* lg:grid-cols-[280px_1fr] <div ref={chairRef} className="text-center">
              <img
                src={welcomeImg}
                loading="lazy"
                alt="Conference Chair"
                className="
                  mx-auto h-55 w-55
                  rounded-full border-8 border-white/90
                  object-cover shadow-2xl
                "
              />
            </div> */}

            <div className="space-y-3">
              <div ref={addItemRef} className="subtitle text-center">
                Invitation
              </div>

              <h2 ref={addItemRef} className="mb-6 text-white text-center">
                Welcome Message
              </h2>

              <p className="font-bold" ref={addItemRef}>
                Dear Colleagues,
              </p>

              <p ref={addItemRef}>
                On behalf of the{" "}
                <b>Saudi Society of Family and Community Medicine (SSFCM)</b>,
                we are pleased to invite you to participate in the{" "}
                <b>
                  5th International Family Medicine Symposium on Family Medicine
                  and Home Health Care 2026
                </b>
                .
              </p>

              <p ref={addItemRef}>
                This distinguished 2-days scientific event will take place from
                6–7 October 2026 with Pre-Conference Workshops on 5 October,
                2026 in Riyadh, Kingdom of Saudi Arabia, bringing together
                leading healthcare professionals, academics, and policymakers
                from across the region and beyond.
              </p>

              <p ref={addItemRef}>
                Building on the success of previous editions, the 2026 symposium
                aims to serve as a premier platform for the exchange of
                knowledge, innovation, and best practices in family medicine and
                home healthcare. The scientific program will feature a diverse
                and forward-looking agenda, including:
              </p>

              <ul
                ref={addItemRef}
                className="mb-4 list-disc text-slate-400 space-y-2 pl-4 text-lg"
              >
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

              <p ref={addItemRef}>
                The symposium is expected to host over 1,000 in-person
                participants, offering exceptional opportunities for networking,
                collaboration, and professional development within a dynamic and
                engaging environment.
              </p>

              <p ref={addItemRef}>
                In addition to the scientific sessions, a comprehensive
                exhibition will run alongside the program, showcasing the latest
                advancements in healthcare services, technologies, and
                solutions.
              </p>

              <p ref={addItemRef}>
                We are pleased to confirm that MCI Saudi Arabia, operating under
                license from Alrowad Exhibitions and Conferences Organizing Co.,
                has been appointed by SSFCM and PSMMC as the official conference
                organizer.
              </p>

              <p ref={addItemRef} className="mb-6">
                We warmly encourage you to join us for this important event and
                contribute to advancing the future of family medicine and home
                healthcare. We look forward to welcoming you in Riyadh.
              </p>

              <div
                ref={addItemRef}
                className="mt-6 flex flex-wrap justify-between items-center gap-6"
              >
                <div>
                  <p className="mb-1">Yours sincerely,</p>
                  <h5 className="mb-1 text-lg font-bold text-slate-400">
                    Organizing Committee
                  </h5>
                  <p className="mb-0 max-w-md">
                    5th International Family Medicine Symposium on Family
                    Medicine and Home Health Care 2026
                  </p>
                </div>

                <Link to="/registration" className="btn btn-main">
                  Join The Conference
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
