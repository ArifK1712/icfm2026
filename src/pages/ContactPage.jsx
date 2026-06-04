//import InnerPageHero from "../components/InnerPageHero";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";

function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      text: "ajay.gupta@wearemci.com",
      link: "mailto:ajay.gupta@wearemci.com",
    },
    {
      icon: MapPin,
      title: "Fairmont Riyadh, Saudi Arabia",
      text: "Area, Business Gate, Qurtubah, Riyadh 11552, Saudi Arabia",
    },
  ];

  return (
    <>
      {/* <InnerPageHero
        subtitle="Home / Contact"
        title="Contact 5th ICFM"
      /> */}

      <section className="relative overflow-hidden bg-[#061a35] pt-30 py-16 text-white">
        {/* Dark Theme Background */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_12%_18%,rgba(0,194,184,0.20),transparent_28%),radial-gradient(circle_at_88%_28%,rgba(71,215,255,0.16),transparent_26%),linear-gradient(135deg,#061a35,#09294f_58%,#061a35)]
          "
        />

        {/* Grid Background */}
        <div
          className="
            absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:58px_58px]
          "
        />

        {/* Decorative Background Glow */}
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl animate-[floatGlow_12s_ease-in-out_infinite]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl animate-[floatGlow_16s_ease-in-out_infinite_reverse]" />

        {/* Decorative Rings */}
        <div
          className="
            pointer-events-none absolute -left-52 top-1/2
            h-[520px] w-[520px] -translate-y-1/2 rounded-full
            border border-white/10
          "
        />

        <div
          className="
            pointer-events-none absolute -right-56 top-1/2
            h-[620px] w-[620px] -translate-y-1/2 rounded-full
            border border-dashed border-teal-200/15
            animate-[spin_44s_linear_infinite]
          "
        />

        <div className="relative z-10 mx-auto min-w-[70%] max-w-7xl px-4">
          {/* Intro */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="subtitle">Get In Touch</div>

            <h2 className="mb-5 text-white">
              We’re here to help with your conference enquiries
            </h2>

            <p className="text-white/70">
              Have a question about registration, speakers, sponsorship,
              abstract submission, or general symposium information? Send us a
              message and our team will get back to you.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Contact Info */}
            <div className="space-y-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div
                    key={index}
                    className="
                      group relative overflow-hidden rounded-[30px]
                      border border-white/12
                      bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                      p-6
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-teal-300/35
                      hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
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

                    {/* Glow */}
                    <div
                      className="
                        absolute -right-16 -top-16 h-40 w-40 rounded-full
                        bg-[radial-gradient(circle,rgba(0,194,184,0.18),transparent_70%)]
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[22px] border border-white/12 bg-white/10 text-[#22d3c8]">
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-black text-white">
                          {item.title}
                        </h4>

                        <p className="text-white/70">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* Right Form */}
            <div
              className="
                relative overflow-hidden rounded-[38px]
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                backdrop-blur-2xl
                md:p-8 lg:p-10
              "
            >
              {/* Decorative Shapes */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/18 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />

              {/* Inner Shine */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_42%,rgba(34,211,200,0.08))]
                "
              />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="mb-3 text-3xl font-black text-white">
                    Send Us a Message
                  </h3>

                  <p className="text-white/70">
                    Fill in your details and our conference team will contact
                    you shortly.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22d3c8]"
                        />

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="
                            w-full rounded-2xl border border-white/12
                            bg-white/10 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-white/40
                            focus:border-teal-300/50
                            focus:bg-white/[0.13]
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.14)]
                          "
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22d3c8]"
                        />

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="
                            w-full rounded-2xl border border-white/12
                            bg-white/10 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-white/40
                            focus:border-teal-300/50
                            focus:bg-white/[0.13]
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.14)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22d3c8]"
                        />

                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="
                            w-full rounded-2xl border border-white/12
                            bg-white/10 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-white/40
                            focus:border-teal-300/50
                            focus:bg-white/[0.13]
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.14)]
                          "
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Organization
                      </label>

                      <div className="relative">
                        <Building2
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22d3c8]"
                        />

                        <input
                          type="text"
                          placeholder="Enter organization"
                          className="
                            w-full rounded-2xl border border-white/12
                            bg-white/10 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-white/40
                            focus:border-teal-300/50
                            focus:bg-white/[0.13]
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.14)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Message
                    </label>

                    <div className="relative">
                      <MessageSquare
                        size={19}
                        className="absolute left-4 top-5 text-[#22d3c8]"
                      />
                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="
                          w-full resize-none rounded-2xl border border-white/12
                          bg-white/10 py-4 pl-12 pr-4 text-white
                          outline-none transition-all duration-300
                          placeholder:text-white/40
                          focus:border-teal-300/50
                          focus:bg-white/[0.13]
                          focus:shadow-[0_0_0_4px_rgba(20,184,166,0.14)]
                        "
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-main gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;