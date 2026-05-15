import { Link } from 'react-router-dom'

function Footer() {
  const conferenceLinks = [
    { label: 'About', path: '/about' },
    { label: 'Committee', path: '/committee' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Program', path: '/program' },
    { label: 'Registration', path: '/registration' },
  ]

  const participateLinks = [
    { label: 'Submit Abstract', path: '/submit-abstract' },
    { label: 'Workshops', path: '/workshops' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Exhibition', path: '/exhibition' },
  ]

  return (
    <footer className="bg-[#05162d] px-4 py-15 text-white/70">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About Conference */}
          <div>
            <p className="max-w-sm leading-8 text-white/60">
              International Family Medicine Symposium on Family Medicine and
              Home Healthcare 2026
            </p>
          </div>

          {/* Conference */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">
              Conference
            </h5>

            <div className="space-y-3">
              {conferenceLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="
                    block transition-all duration-300
                    hover:translate-x-1
                    hover:text-teal-400
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Participate */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">
              Participate
            </h5>

            <div className="space-y-3">
              {participateLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="
                    block transition-all duration-300
                    hover:translate-x-1
                    hover:text-teal-400
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-5 text-xl font-black text-white">
              Contact
            </h5>

            <div className="space-y-4">
              <p className="flex items-center text-white/70">
                <a
                  href="mailto:info@example.com"
                  className="transition-all duration-300 hover:text-teal-400"
                >
                  info@example.com
                </a>
              </p>

              <p className="flex items-center text-white/70">
                <a
                  href="tel:+966000000000"
                  className="transition-all duration-300 hover:text-teal-400"
                >
                  +966 000 000 000
                </a>
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

          <div className="flex flex-wrap gap-2">
            <Link
              to="/privacy-policy"
              className="transition-all duration-300 hover:text-teal-400"
            >
              Privacy Policy
            </Link>

            <span>·</span>

            <Link
              to="/terms-conditions"
              className="transition-all duration-300 hover:text-teal-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer