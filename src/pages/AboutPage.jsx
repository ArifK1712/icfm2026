import InnerPageHero from "../components/InnerPageHero";
import { HeartPulse, Users, Lightbulb, Globe2 } from "lucide-react";
import CTA from "../components/home/CTA";

function AboutPage() {
  return (
    <>
      <InnerPageHero subtitle="Home / About" title="About 5th ICFM" />

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="subtitle">About The Symposium</div>
              <h2 className="mb-6">Advancing family medicine and home healthcare</h2>
              <p className="text-slate-500 mb-4">
                The 5th International Family Medicine Symposium brings together
                healthcare professionals, experts, researchers, and
                organizations to exchange knowledge and practical insights in
                family medicine and home healthcare.
              </p>
              <p className="text-slate-500">
                The symposium focuses on clinical excellence, patient-centered
                care, innovation, prevention, and future-ready healthcare
                delivery models.
              </p>
            </div>

            <div className="relative">

              <div className="relative rounded-4xl bg-linear-to-br from-teal-50 to-cyan-50 p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { icon: HeartPulse, title: "Clinical Care" },
                    { icon: Users, title: "Expert Network" },
                    { icon: Lightbulb, title: "Innovation" },
                    { icon: Globe2, title: "Global Exchange" },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="motion-card group"
                      >
                        <div className="icon-box">
                          <Icon size={30} strokeWidth={1.5} />
                        </div>

                        <h6 className="mb-2">{item.title}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(135deg,#061a35,#09294f_58%,#061a35)]
    py-24 text-white
  "
      >
        {/* Grid */}
        <div
          className="
      absolute inset-0 opacity-20
      bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-size-[58px_58px]
    "
        />

        {/* Glow */}
        <div
          className="
      absolute -top-24 -left-24
      h-80 w-80
      rounded-full
      bg-teal-400/10
      blur-3xl
      animate-[floatGlow_12s_ease-in-out_infinite]
    "
        />

        <div
          className="
      absolute -bottom-24 -right-24
      h-96 w-96
      rounded-full
      bg-cyan-400/10
      blur-3xl
      animate-[floatGlow_16s_ease-in-out_infinite_reverse]
    "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            {/* Image */}
            <div className="relative">
              {/* Main Image */}
              <div
                className="
            relative overflow-hidden
            rounded-[38px]
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          "
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare Conference"
                  className="
              h-135 w-full
              object-cover
            "
                />
              </div>

              {/* Floating Glass Card */}
              <div
                className="
            absolute -bottom-8 left-8
            rounded-[28px]
            border border-white/10
            bg-white/10
            px-7 py-5
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.28)]
          "
              >
                <h3 className="text-4xl font-black text-teal-300">500+</h3>

                <p
                  className="
              mt-1 text-sm
              font-semibold uppercase
              tracking-[2px]
              text-white/70
            "
                >
                  Expected Participants
                </p>
              </div>
            </div>
            <div>
              <div className="subtitle">Building Better Healthcare</div>

              <h2 className="mb-6 text-white">
                Creating meaningful healthcare collaboration and innovation
              </h2>

              <p className="mb-5 text-white/70">
                The symposium provides a dynamic platform for healthcare
                professionals, researchers, policy makers, and organizations to
                discuss emerging trends and real-world healthcare challenges.
              </p>

              <p className="mb-5 text-white/70">
                Through keynote sessions, workshops, scientific discussions, and
                collaborative networking opportunities, participants gain
                practical knowledge and valuable professional connections.
              </p>

              <p className="text-white/70">
                Our mission is to strengthen family medicine and home healthcare
                practices while promoting innovation, sustainability, and
                patient-focused care models across the healthcare ecosystem.
              </p>
            </div>

            
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export default AboutPage;
