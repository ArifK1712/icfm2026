import { Link } from 'react-router-dom'
import footerLogo from "../assets/images/mci-alrowad.png"
import ethicalmedtech from "../assets/images/ethicalmedtech.png"

function Footer() {
  const conferenceLinks = [
    { label: 'About', path: '/about' },
    { label: 'Committee', path: '/committee' },
    { label: 'Submit Abstract', path: '/call-for-abstract' },
    { label: 'Registration', path: '/registration' },
  ]

  return (
    <footer className="px-4 py-15 text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* About Conference */}
          <div>
            <p className="max-w-sm leading-8 text-white/60">
              5th International Family Medicine Symposium on Family Medicine and
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
              Technical Enquiry
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
          <div>
            <h5 className="mb-5 text-white">
             Compliant with their
            </h5>
              <img
                src={ethicalmedtech}
                alt="Partner Logo"
                className="h-10 w-auto object-contain bg-white p-2 rounded-lg"
              />
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
            flex gap-3 text-sm text-white/50 justify-between
          "
        >
          <div>© 2026 ICFM Conference. All rights reserved.</div>
          <div className="flex gap-8">
              <Link 
                to="https://x.com/ICFMKsa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="18"
                >
                  <path d="M806.457 113.778H963.47L620.43 499.37 1024 1024H707.982L460.516 705.764 177.323 1024H20.196l366.99-412.444L0 113.836h324.04l223.686 290.872 258.73-290.93zm-55.125 817.834h87.04L276.708 201.33H183.41l567.922 730.282z" />
                </svg>
              </Link>

              <Link 
                to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF06C4qt4zS7AAAAZ-i9hioRfYkFBZ9bCjnNXwlh6A7wymnB1MSy5iFGDAhOM_tCLMvvd4gFNXyb9oEI80HIVy3ox1GBc8SS_v65jDyJa_573-Tnr71DCBHm3j-BGqGzgQPSu4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finternational-family-medicine-symposium-on-family-medicine-and-home-healthcare%2F%3Flipi%3Durn%253Ali%253Apage%253Ad_flagship3_messaging_conversation_detail%253BevHdT6oqTyOzTzuizYiyyQ%253D%253D" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="#ffffff"
                  width="18"
                >
                  <path d="M214.912 170.688c0 28.288-11.392 55.424-31.552 75.456-20.16 19.968-47.488 31.168-75.968 31.168-28.48 0-55.808-11.264-75.968-31.296C11.264 226.048 0 198.912 0 170.624c0-28.288 11.328-55.424 31.488-75.392C51.648 75.2 78.976 64 107.52 64c28.48 0 55.808 11.264 75.968 31.296 20.096 19.968 31.424 47.104 31.424 75.392zm3.2 185.6H3.2V1024h214.912V356.288zm339.584 0H343.872V1024H555.52V673.6c0-195.2 256.256-213.312 256.256 0V1024H1024V601.088c0-329.024-379.328-316.8-468.48-155.2l2.176-89.6z" />
                </svg>
              </Link>  
          </div>          
        </div>
      </div>
    </footer>
  )
}

export default Footer