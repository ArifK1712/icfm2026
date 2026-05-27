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

      <section className="relative overflow-hidden bg-white py-20">
        {/* Decorative Background Glow */}
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-teal-300/15 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto min-w-[70%] max-w-7xl px-4">
          {/* Intro */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="subtitle">Get In Touch</div>

            <h2 className="mb-5">
              We’re here to help with your conference enquiries
            </h2>

            <p className="text-slate-500">
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
                      border border-slate-900/5 bg-white p-6
                      shadow-[0_18px_55px_rgba(6,26,53,0.08)]
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_28px_70px_rgba(6,26,53,0.14)]
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute -right-16 -top-16 h-40 w-40 rounded-full
                        bg-[radial-gradient(circle,rgba(0,194,184,0.14),transparent_70%)]
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[22px] bg-linear-to-br from-teal-500/15 to-cyan-400/15 text-teal-500">
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-black text-[#061a35]">
                          {item.title}
                        </h4>

                        <p className="text-slate-500">{item.text}</p>
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
                border border-slate-900/5
                bg-[linear-gradient(135deg,#f8fffe,#eefcff)]
                p-6 shadow-[0_28px_80px_rgba(6,26,53,0.12)]
                md:p-8 lg:p-10
              "
            >
              {/* Decorative Shapes */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="mb-3 text-3xl font-black text-[#061a35]">
                    Send Us a Message
                  </h3>

                  <p className="text-slate-500">
                    Fill in your details and our conference team will contact
                    you shortly.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#061a35]">
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
                        />

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="
                            w-full rounded-2xl border border-slate-200 bg-white/90
                            py-4 pl-12 pr-4 text-[#061a35]
                            outline-none transition-all duration-300
                            placeholder:text-slate-400
                            focus:border-teal-400
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
                          "
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#061a35]">
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
                        />

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="
                            w-full rounded-2xl border border-slate-200 bg-white/90
                            py-4 pl-12 pr-4 text-[#061a35]
                            outline-none transition-all duration-300
                            placeholder:text-slate-400
                            focus:border-teal-400
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#061a35]">
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
                        />

                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="
                            w-full rounded-2xl border border-slate-200 bg-white/90
                            py-4 pl-12 pr-4 text-[#061a35]
                            outline-none transition-all duration-300
                            placeholder:text-slate-400
                            focus:border-teal-400
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
                          "
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#061a35]">
                        Organization
                      </label>

                      <div className="relative">
                        <Building2
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
                        />

                        <input
                          type="text"
                          placeholder="Enter organization"
                          className="
                            w-full rounded-2xl border border-slate-200 bg-white/90
                            py-4 pl-12 pr-4 text-[#061a35]
                            outline-none transition-all duration-300
                            placeholder:text-slate-400
                            focus:border-teal-400
                            focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#061a35]">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="
                        w-full rounded-2xl border border-slate-200 bg-white/90
                        px-4 py-4 text-[#061a35]
                        outline-none transition-all duration-300
                        placeholder:text-slate-400
                        focus:border-teal-400
                        focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#061a35]">
                      Message
                    </label>

                    <div className="relative">
                      <MessageSquare
                        size={19}
                        className="absolute left-4 top-5 text-teal-500"
                      />

                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="
                          w-full resize-none rounded-2xl border border-slate-200
                          bg-white/90 py-4 pl-12 pr-4 text-[#061a35]
                          outline-none transition-all duration-300
                          placeholder:text-slate-400
                          focus:border-teal-400
                          focus:shadow-[0_0_0_4px_rgba(20,184,166,0.12)]
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