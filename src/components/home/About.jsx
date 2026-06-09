import { Link } from "react-router-dom";

import logo from "../../assets/images/5th-icfm-logo.png";
import aboutBg from "../../assets/images/gallery/4.avif";

function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden py-24 text-white
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teal image overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,rgba(22,216,205,0.50)_0%,rgba(37,231,220,0.90)_42%,rgba(217,255,251,0.90)_100%)]
        "
      />

      {/* Dark readability overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,rgba(3,47,52,0.34)_0%,rgba(3,47,52,0.30)_48%,rgba(3,47,52,0.04)_100%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:flex items-center gap-15">
        <img
          src={logo}
          loading="lazy"
          alt="5th ICFM Logo"
          className="max-h-96 mx-auto mb-4 md:mb-0 w-auto object-contain"
        />

        <div
          className="
            mx-auto max-w-6xl rounded-4xl
            border border-[#25e7dc]/45
            bg-[#032f34]/88
            px-6 py-10 text-center
            shadow-[0_34px_110px_rgba(0,0,0,0.38)]
            backdrop-blur-2xl
            md:px-12
          "
        >
          <h2 className="mb-5">About Conference 2026</h2>

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

          <Link to="/about" className="btn btn-main mt-8">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;