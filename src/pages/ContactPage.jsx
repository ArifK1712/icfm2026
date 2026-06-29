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

      <section className="relative overflow-hidden pt-30 py-16 text-white">

        {/* Decorative Background Glow */}
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#16d8cd]/18 blur-3xl animate-[floatGlow_12s_ease-in-out_infinite]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#25e7dc]/14 blur-3xl animate-[floatGlow_16s_ease-in-out_infinite_reverse]" />

        <div className="relative z-10 mx-auto min-w-[70%] max-w-7xl px-4">
          {/* Intro */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="subtitle">Get In Touch</div>

            <h2 className="mb-5 text-white">
              We’re here to help with your conference enquiries
            </h2>

            <p className="text-[#d9fffb]/72">
              Have a question about registration, speakers, sponsorship,
              abstract submission, or general symposium information? Email us and our team will get back to you.
            </p>
          </div>

          <div className="">
            {/* Left Contact Info */}
            <div className="md:grid gap-6 grid-cols-2">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div
                    key={index}
                    className="
                      group relative overflow-hidden rounded-[30px]
                      border border-[#25e7dc]/18
                      bg-[linear-gradient(150deg,rgba(5,79,81,0.72),rgba(3,47,52,0.58))]
                      p-6
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-[#25e7dc]/45
                      hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(37,231,220,0.2)]
                      w-full
                      mb-6
                      md:mb-0
                    "
                  >
                    {/* Hover Shine Sweep */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 z-30
                        translate-x-[-120%] skew-x-[-18deg]
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),rgba(37,231,220,0.22),transparent)]
                        opacity-0 blur-[1px]
                        transition-all duration-450 ease-out
                        group-hover:translate-x-[120%]
                        group-hover:opacity-100
                      "
                    />

                    {/* Glow */}
                    <div
                      className="
                        absolute -right-16 -top-16 h-40 w-40 rounded-full
                        bg-[radial-gradient(circle,rgba(22,216,205,0.22),transparent_70%)]
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[22px] border border-[#25e7dc]/20 bg-[#052f34]/70 text-[#25e7dc]">
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-black text-white">
                          {item.title}
                        </h4>

                        <p className="text-[#d9fffb]/72">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} className="flex w-full">
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
                border border-[#25e7dc]/18
                bg-[linear-gradient(150deg,rgba(5,79,81,0.72),rgba(3,47,52,0.58))]
                p-6
                backdrop-blur-2xl
                md:p-8 lg:p-10 hidden
              "
            >
              {/* Decorative Shapes */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#16d8cd]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#25e7dc]/18 blur-3xl" />

              {/* Inner Shine */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(37,231,220,0.1))]
                "
              />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="mb-3 text-3xl font-black text-white">
                    Send Us a Message
                  </h3>

                  <p className="text-[#d9fffb]/72">
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25e7dc]"
                        />

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="
                            w-full rounded-2xl border border-[#25e7dc]/18
                            bg-[#052f34]/70 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-[#d9fffb]/40
                            focus:border-[#25e7dc]/55
                            focus:bg-[#063f43]/80
                            focus:shadow-[0_0_0_4px_rgba(37,231,220,0.14)]
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25e7dc]"
                        />

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="
                            w-full rounded-2xl border border-[#25e7dc]/18
                            bg-[#052f34]/70 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-[#d9fffb]/40
                            focus:border-[#25e7dc]/55
                            focus:bg-[#063f43]/80
                            focus:shadow-[0_0_0_4px_rgba(37,231,220,0.14)]
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25e7dc]"
                        />

                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="
                            w-full rounded-2xl border border-[#25e7dc]/18
                            bg-[#052f34]/70 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-[#d9fffb]/40
                            focus:border-[#25e7dc]/55
                            focus:bg-[#063f43]/80
                            focus:shadow-[0_0_0_4px_rgba(37,231,220,0.14)]
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25e7dc]"
                        />

                        <input
                          type="text"
                          placeholder="Enter organization"
                          className="
                            w-full rounded-2xl border border-[#25e7dc]/18
                            bg-[#052f34]/70 py-4 pl-12 pr-4 text-white
                            outline-none transition-all duration-300
                            placeholder:text-[#d9fffb]/40
                            focus:border-[#25e7dc]/55
                            focus:bg-[#063f43]/80
                            focus:shadow-[0_0_0_4px_rgba(37,231,220,0.14)]
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
                        className="absolute left-4 top-5 text-[#25e7dc]"
                      />
                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="
                          w-full resize-none rounded-2xl border border-[#25e7dc]/18
                          bg-[#052f34]/70 py-4 pl-12 pr-4 text-white
                          outline-none transition-all duration-300
                          placeholder:text-[#d9fffb]/40
                          focus:border-[#25e7dc]/55
                          focus:bg-[#063f43]/80
                          focus:shadow-[0_0_0_4px_rgba(37,231,220,0.14)]
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