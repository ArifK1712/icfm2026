import { Sparkles, CalendarDays, Mic2, Users } from "lucide-react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import heroBg from "../../assets/images/homehero.webp";

import slide1 from "../../assets/images/gallery/1.avif";
import slide2 from "../../assets/images/gallery/2.avif";
import slide3 from "../../assets/images/gallery/3.avif";
import slide4 from "../../assets/images/gallery/4.avif";
import slide5 from "../../assets/images/gallery/5.avif";

const slides = [slide1, slide2, slide3, slide4, slide5];
const eventDate = new Date("2026-10-05T00:00:00").getTime();

function Hero() {  
  const [activeSlide, setActiveSlide] = useState(0);
  const headingRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".gsap-word");

    gsap.fromTo(
      words,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen
        items-center overflow-hidden
        py-32.5 text-white
      "
    >
      {/* Background */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(125deg,rgba(6,26,53,0.98),rgba(9,41,79,0.94))]
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute -left-10 -top-10
          min-h-180 min-w-180
          rounded-full
          bg-teal-400/20
          blur-3xl
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute -right-10 -top-10
          h-180 w-180
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-size-[58px_58px]
        "
      />

      {/* Circle Border */}
      <div
        className="
          absolute -bottom-65 -right-65
          h-190 w-190
          animate-spin rounded-full
          border border-white/10
          [animation-duration:24s]
        "
      />

      <div
        className="
          relative z-10
          mx-auto w-full
          min-w-[70%] max-w-7xl
          px-4
        "
      >
        <div className="grid items-center lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Kicker */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-2
                backdrop-blur-xl
              "
            >
              <Sparkles size={16} />

              <span className="text-sm font-extrabold">
                International Medical Conference
              </span>
            </div>

            {/* Title */}
            <h1
              ref={headingRef}
              className="max-w-xl"
            >
              <span
                className="
      gsap-word inline-block
      bg-linear-to-r from-white via-cyan-300 to-teal-400
      bg-size-[200%_200%]
      bg-clip-text text-transparent
    "
              >
                International Family Medicine Symposium on Family Medicine and
                Home Healthcare 2026
              </span>
            </h1>

            {/* Text */}
            <p className="mt-6">
              A premium scientific experience connecting clinicians,
              researchers, healthcare leaders, innovators and policy makers
              through workshops, keynotes, networking and research exchange.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-4 gap-3">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
        rounded-2xl
border border-white/10
bg-[linear-gradient(135deg,rgba(45,212,191,0.18),rgba(34,211,238,0.20),rgba(255,255,255,0.06))]
p-4 text-center
shadow-[0_18px_45px_rgba(0,0,0,0.22)]
backdrop-blur-xl
      "
                >
                  <h3 className="text-2xl font-black text-white md:text-3xl">
                    {String(item.value).padStart(2, "0")}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[1px] text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-110 sm:min-h-165">
            <div className="absolute right-0 left-0 top-10 h-80 w-80 sm:h-140 sm:w-190 mx-auto">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`
          absolute inset-0 rounded-[36px]
          border border-white/15 bg-white/10
          shadow-[0_35px_90px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          transition-all duration-700 ease-out

          ${
            activeSlide === index
              ? "z-30 translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100"
              : index < activeSlide
                ? "z-10 -translate-x-8 translate-y-8 -rotate-6 scale-90 opacity-40"
                : "z-20 translate-x-8 translate-y-8 rotate-6 scale-90 opacity-40"
          }
        `}
                >
                  <img
                    src={slide}
                    loading="lazy"
                    alt="Conference"
                    className="h-full w-full object-cover rounded-4xl"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#061a35]/90 via-[#061a35]/20 to-transparent" />

                  <div className="absolute -left-5 -top-5 z-40 animate-[floatBadge_3s_ease-in-out_infinite]">
                    <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-teal-900/80 p-2 backdrop-blur-3xl">
                      <div className="flex items-center justify-center rounded-xl text-teal-500">
                        <CalendarDays size={24} />
                      </div>

                      <div>
                        <h4 className="text-xl">5 October</h4>
                        <p className="flex items-center gap-2 text-sm font-bold text-cyan-100">
                          <Mic2 size={15} />
                          Pre-conference Workshops
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Date Badge - Bottom Left */}
                  <div className="absolute -bottom-5 -right-5 z-40 animate-[floatBadge_3.5s_ease-in-out_infinite]">
                    <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-teal-900/80 p-2 backdrop-blur-3xl">
                      <div className="flex items-center justify-center rounded-xl text-teal-500">
                        <CalendarDays strokeWidth={1} size={24} />
                      </div>

                      <div>
                        <h4 className="text-xl">5–7 October 2026</h4>
                        <p className="flex items-center gap-2 text-sm font-bold text-cyan-100">
                          <Users strokeWidth={1} size={15} />
                          Conference
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
