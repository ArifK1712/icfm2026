function Footer() {
  const conferenceLinks = ["About", "Program", "Speakers", "Registration"];

  const participateLinks = [
    "Submit Abstract",
    "Workshops",
    "Sponsorship",
    "Exhibition",
  ];

  return (
    <footer className="bg-[#05162d] px-4 py-15 text-white/70">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h4 className="text-3xl font-black text-white">
              ICFM
              <span className="text-teal-400">2026</span>
            </h4>

            <p className="mt-4 max-w-sm leading-8 text-white/60">
              International Conference for Community Health & Primary
              Healthcare.
            </p>
          </div>

          {/* Conference */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">Conference</h5>

            <div className="space-y-3">
              {conferenceLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    block transition-all duration-300
                    hover:translate-x-1
                    hover:text-teal-400
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Participate */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">Participate</h5>

            <div className="space-y-3">
              {participateLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    block transition-all duration-300
                    hover:translate-x-1
                    hover:text-teal-400
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">Contact</h5>

            <div className="space-y-4">
              <p className="flex items-center text-white/70">
                info@example.com
              </p>

              <p className="flex items-center text-white/70">
                +966 000 000 000
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div
          className="
            flex flex-col gap-3 text-sm text-white/50
            md:flex-row md:items-center md:justify-between
          "
        >
          <div>© 2026 ICFM Conference. All rights reserved.</div>

          <div>Privacy Policy · Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;