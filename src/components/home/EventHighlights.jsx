import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import activityImg1 from "../../assets/images/activity-1.jpg";
import activityImg2 from "../../assets/images/activity-2.jpg";
import activityImg3 from "../../assets/images/activity-3.jpg";
import activityImg4 from "../../assets/images/activity-4.jpg";
import activityImg5 from "../../assets/images/activity-5.jpg";

import sectionBg from "../../assets/images/gallery/2.avif";

gsap.registerPlugin(ScrollTrigger);

function EventHighlights() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const activities = [
    {
      image: activityImg1,
      title: "Training workshops with accredited certificates",
      className: "lg:col-span-1",
    },
    {
      image: activityImg2,
      title: "Continuing Medical Education (CME) Credits",
      className: "lg:col-span-1",
    },
    {
      image: activityImg3,
      title: "Panel Discussions",
      className: "lg:col-span-1",
    },
    {
      image: activityImg4,
      title: "Accompanying Exhibition",
      className: "lg:col-span-1",
    },
    {
      image: activityImg5,
      title: "Scientific Papers and Lectures",
      className: "lg:col-span-1",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.94,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.16,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="event-activities"
      className="
        relative overflow-hidden py-20 text-white
        bg-[#043d3d]
        bg-attachment-fixed
        bg-center bg-cover bg-no-repeat
      "
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundAattachment: "fixed",
      }}
    >
      {/* Dark image overlay */}
      <div
        className="
          absolute inset-0
          bg-[#032f34]/20
        "
      />

      {/* Brochure teal overlay */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_88%_70%,rgba(22,216,205,0.52),transparent_38%),linear-gradient(90deg,rgba(3,47,52,0.94)_0%,rgba(3,47,52,0.88)_42%,rgba(6,126,121,0.66)_72%,rgba(16,214,201,0.52)_100%)]
        "
      />

      {/* Large Aqua Glow */}
      <div
        className="
          absolute -right-56 bottom-[-220px]
          h-[720px] w-[900px] rounded-full
          bg-[#16d8cd]/42 blur-3xl
        "
      />

      {/* Dark Left Depth */}
      <div
        className="
          absolute left-0 top-0 h-full w-[42%]
          bg-[linear-gradient(90deg,rgba(2,35,38,0.82),rgba(2,35,38,0))]
        "
      />

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1fr_1fr]">
          <h2 className="mb-5">
            Conference <br /> Activities
          </h2>

          {activities.slice(0, 2).map((item, index) => (
            <ActivityCard
              key={item.title}
              item={item}
              refCallback={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}

          {activities.slice(2).map((item, index) => (
            <ActivityCard
              key={item.title}
              item={item}
              refCallback={(el) => {
                cardsRef.current[index + 2] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ item, refCallback }) {
  return (
    <div
      ref={refCallback}
      className="
        group relative overflow-hidden rounded-[18px]
        bg-[linear-gradient(180deg,#25e7dc_0%,#08d8cf_50%,rgba(8,216,207,0.35)_100%)]
        p-[3px]
        shadow-[0_24px_70px_rgba(0,0,0,0.28)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_34px_90px_rgba(0,0,0,0.36),0_0_34px_rgba(37,231,220,0.32)]
      "
    >
      <div
        className="
          relative h-full min-h-[260px] overflow-hidden rounded-[15px]
          bg-[#04383b]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="
            h-[220px] w-full object-cover
            transition-all duration-700
            group-hover:scale-110
          "
        />

        {/* Image Dark Overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(3,47,52,0.02)_0%,rgba(3,47,52,0.12)_48%,rgba(3,47,52,0.92)_100%)]
          "
        />

        {/* Title Bar */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            bg-[linear-gradient(90deg,rgba(22,216,205,0.92),rgba(3,47,52,0.92))]
            px-4 py-3
          "
        >
          <p className="leading-snug text-white">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventHighlights;