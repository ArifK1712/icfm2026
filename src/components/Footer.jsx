import { Link } from 'react-router-dom'
import footerLogo from "../assets/images/mci-alrowad.png"

function Footer() {
  const conferenceLinks = [
    { label: 'About', path: '/about' },
    { label: 'Committee', path: '/committee' },
    { label: 'Submit Abstract', path: '/call-for-abstract' },
    { label: 'Registration', path: '/registration' },
  ]

  return (
    <footer className="px-4 py-15 text-white/70">
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
            <h5 className="mb-5  text-white">
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
          {/* Contact */}
          <div>
            <h5 className="mb-5 text-white">
              Contact
            </h5>

            <div className="space-y-4">
              <p className="flex items-center text-white/70">
                <a
                  href="mailto:ajay.gupta@wearemci.com"
                  className="transition-all duration-300 hover:text-teal-400"
                >
                  ajay.gupta@wearemci.com
                </a>
              </p>
            </div>
          </div>

          {/* Participate */}
          <div>
            <h5 className="mb-5 text-white">
              Conference Managers
            </h5>
              <img
                src={footerLogo}
                alt="Partner Logo"
                className="max-h-20 w-auto object-contain"
              />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div
          className="
            flex gap-3 text-sm text-white/50 justify-center
          "
        >
          <div>© 2026 SSFCM Conference. All rights reserved.</div>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer