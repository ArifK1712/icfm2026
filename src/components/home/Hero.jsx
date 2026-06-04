import { CalendarDays, Mic2 } from "lucide-react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

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
    }, 4500);

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
      className="relative min-h-screen overflow-hidden bg-[#061a35] text-white"
    >
      {/* Full Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 bg-cover bg-center bg-no-repeat
              transition-all duration-[1800ms] ease-out
              ${
                activeSlide === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-110"
              }
            `}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>

      {/* Dark Readability Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(90deg,rgba(6,26,53,0.98)_0%,rgba(6,26,53,0.88)_38%,rgba(6,26,53,0.55)_68%,rgba(6,26,53,0.82)_100%)]
        "
      />

      {/* Bottom Depth Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_top,rgba(6,26,53,0.98)_0%,rgba(6,26,53,0.70)_28%,transparent_64%)]
        "
      />

      {/* Animated Gradient Mood */}
      <div
        className="
          absolute inset-0 animate-gradientFlow
          bg-[linear-gradient(120deg,rgba(34,211,200,0.22),transparent_30%,rgba(71,215,255,0.15)_52%,transparent_72%,rgba(3,156,152,0.22))]
          bg-[length:220%_220%]
        "
      />

      {/* Moving Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.12] animate-gridMove
          bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)]
          bg-[size:68px_68px]
        "
      />

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
      <div className="pointer-events-none absolute left-0 top-[62%] hidden w-full opacity-30 lg:block">
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

      {/* Main Content Without Background Box */}
      <div
        className="
          relative z-10 mx-auto flex min-h-screen w-full max-w-[1540px]
          items-center px-4 py-24
          sm:px-6 sm:py-28
          lg:px-8 xl:py-32
        "
      >
        <div className="w-full max-w-6xl">
          {/* Badge */}

          {/* Title */}
          <h1
            ref={headingRef}
            className="
              max-w-[1080px]
              text-[42px] font-black leading-[0.98]
              tracking-[-2px]
              sm:text-[58px]
              md:text-[68px]
              lg:text-[78px]
              xl:text-[92px]
              drop-shadow-[0_28px_70px_rgba(0,0,0,0.70)]
            "
          >
            <span
              className="
                gsap-word inline-block
                bg-gradient-to-br from-white via-cyan-100 to-teal-300
                bg-clip-text text-transparent
              "
            >
              International Family Medicine Symposium on Family Medicine and
              Home Healthcare 2026
            </span>
          </h1>
          <div
            className="
              my-5 inline-flex items-center gap-2 rounded-full
              border border-white/15 bg-white/10 px-4 py-2.5
              shadow-[0_20px_55px_rgba(0,0,0,0.22)]
              backdrop-blur-2xl
            "
          >
            <h3
              className="font-extrabold 
                text-teal-400 px-2
              "
            >
              EMPOWERING LIVES, SHAPING FUTURE CARE
            </h3>
          </div>
          {/* Date Cards */}
          <div className="mt-5 grid max-w-3xl gap-3 md:grid-cols-2">
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
          <div
            className="
              mt-6 max-w-3xl 
            "
          >
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
                      bg-gradient-to-r from-transparent via-teal-300/70 to-transparent
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
