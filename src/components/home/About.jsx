import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Hospital, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../../assets/images/5th-icfm-logo.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -90,
        rotate: -20,
        filter: "blur(20px)",
        scale: 0.1,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 150%",
          scrub: 0.5,
          invalidateOnRefresh: false,
        },
      });

      gsap.from(contentRef.current.children, {
        opacity: 0,
        x: 90,
        y: 20,
        filter: "blur(20px)",
        duration: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
          start: "top 150%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="overflow-x-hidden py-20"
    >
      <div className="min-w-[80%] max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div ref={imageRef} className="relative">
            <img
              src={aboutImg}
              loading="lazy"
              alt="Conference audience"
              className="
                w-full h-fit md:h-150 rounded-[38px] object-contain
              "
            />
          </div>
          <div ref={contentRef}>
            <div className="subtitle">About</div>
            <h2 className="mb-5 text-white">About Conference 2026</h2>
            <p className="mb-3">
              The upcoming International Conference on Family Medicine promises
              to be a larger and more comprehensive event, scheduled to take
              place from 5–7 October at the Fairmont Hotel, Riyad
            </p>
            <p>
              The three-day scientific program will address the full spectrum of
              topics in Family Medicine through a diverse format that includes
              plenary lectures, case presentations, panel debates, hands-on
              workshops, and networking sessions. The conference is poised to be
              a must-attend event in 2026 for Family Physicians, General
              Practitioners, Nurse Practitioners, and other Healthcare
              Professionals
            </p>
            {/* <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="motion-card group">
                <div className="icon-box">
                  <Hospital strokeWidth={1} size={30} />
                </div>
                <h6 className="mb-2">
                  Clinical Excellence
                </h6>
                <p className="text-slate-500">
                  Relevant sessions for modern care delivery.
                </p>
              </div>
              <div className="motion-card group">
                <div className="icon-box">
                  <Users size={30} strokeWidth={1} />
                </div>
                <h6 className="mb-2">
                  Global Network
                </h6>
                <p className="text-slate-500">
                  Connect with healthcare professionals and partners.
                </p>
              </div>
            </div> */}
            <Link to="/about" className="btn btn-main mt-8">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
