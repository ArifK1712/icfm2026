import { CalendarDays, Mic2 } from "lucide-react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

import otherlogos from "../../assets/images/other-logos.png";

const eventDate = new Date("2026-10-05T00:00:00").getTime();

function Hero() {
  const headingRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden text-white
      "
    >

      {/* Scan Light */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-1/2 top-0 h-full w-1/2 animate-scanLight
            bg-[linear-gradient(90deg,transparent,rgba(34,211,200,0.12),rgba(255,255,255,0.10),transparent)]
            blur-xl
          "
        />
      </div>

      {/* Floating Glow Blobs */}
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-teal-400/24 blur-[95px] animate-blobFloatOne" />
      <div className="absolute right-[10%] top-[14%] h-80 w-80 rounded-full bg-cyan-400/20 blur-[105px] animate-blobFloatTwo" />
      <div className="absolute bottom-[2%] left-[42%] h-96 w-96 rounded-full bg-[#039c98]/22 blur-[120px] animate-blobFloatThree" />

      {/* ECG Line */}
      <div className="pointer-events-none absolute right-0 top-[90%] hidden w-full opacity-30 lg:block">
        <svg
          viewBox="0 0 1200 120"
          className="h-28 w-full animate-ecgMove"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 70 H140 L165 70 L180 42 L198 96 L222 34 L245 70 H390 L420 70 L438 50 L460 86 L486 28 L512 70 H720 L746 70 L764 48 L786 90 L812 36 L840 70 H1200"
            stroke="rgba(34,211,200,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="hero-particle left-[12%] top-[22%] animate-particleOne" />
        <span className="hero-particle left-[24%] top-[72%] animate-particleTwo" />
        <span className="hero-particle left-[48%] top-[18%] animate-particleThree" />
        <span className="hero-particle right-[18%] top-[30%] animate-particleFour" />
        <span className="hero-particle right-[26%] bottom-[18%] animate-particleFive" />
        <span className="hero-particle right-[8%] bottom-[42%] animate-particleSix" />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 mx-auto flex min-h-screen w-full max-w-385
          items-center px-4 py-24
          sm:px-6 sm:py-28
          lg:px-8 xl:py-32
        "
      >
        <div className="w-full text-center">
          <img
            src={otherlogos}
            className="mb-6 max-h-25 mx-auto"
            alt="Other Logos"
          />

          {/* Title */}
          <h1
            ref={headingRef}
            className="
              text-4xl font-black leading-[1.02]
              tracking-[-1.5px]
              sm:text-[52px]
              md:text-[62px]
              lg:text-[72px]
              xl:text-[80px]
              drop-shadow-[0_28px_70px_rgba(0,0,0,0.70)]
            "
          >
            <span
              className="
                gsap-word inline-block
                bg-linear-to-br from-white via-cyan-100 to-teal-300
                bg-clip-text text-transparent
              "
            >
              International Family Medicine Symposium on Family Medicine and
              Home Healthcare 2026
            </span>
          </h1>

          {/* Theme Badge */}
          <div
            className="
              my-5 inline-flex items-center gap-2 rounded-full
              border border-white/15 bg-white/10 px-4 py-2.5
              shadow-[0_20px_55px_rgba(0,0,0,0.22)]
              backdrop-blur-2xl
            "
          >
            <h3 className="px-2 text-lg font-extrabold text-teal-400 md:text-3xl">
              EMPOWERING LIVES, SHAPING FUTURE CARE
            </h3>
          </div>

          {/* Date Cards */}
          <div className="mt-5 grid max-w-2xl gap-3 md:grid-cols-2 mx-auto">
            <div
              className="
                flex items-center gap-3 rounded-3xl
                border border-white/12 bg-white/10 p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.26)]
                backdrop-blur-2xl
                
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#22d3c8]">
                <CalendarDays size={23} />
              </div>

              <div>
                <h4 className="text-lg font-black text-white">
                  5 October 2026
                </h4>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-cyan-100">
                  <Mic2 size={14} />
                  Pre-conference Workshops
                </p>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3 rounded-3xl
                border border-white/12 bg-white/10 p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.26)]
                backdrop-blur-2xl
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#22d3c8]">
                <CalendarDays size={23} />
              </div>

              <div>
                <h4 className="text-lg font-black text-white">
                  6-7 October 2026
                </h4>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-cyan-100">
                  <Mic2 size={14} />
                  Conference
                </p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-[linear-gradient(150deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))]
                    px-3 py-5 text-center
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-teal-300/35
                    hover:bg-white/[0.14]
                  "
                >
                  <div
                    className="
                      absolute inset-x-4 top-0 h-px
                      bg-linear-to-r from-transparent via-teal-300/70 to-transparent
                    "
                  />

                  <h3 className="text-3xl font-black text-white sm:text-4xl">
                    {String(item.value).padStart(2, "0")}
                  </h3>

                  <p
                    className="
                      mt-2 text-[11px] font-bold uppercase
                      tracking-[1.8px] text-white/58
                    "
                  >
                    {item.label}
                  </p>
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