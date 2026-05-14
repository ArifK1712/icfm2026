import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import otherlogos from '../assets/images/other-logos.png'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Committee', path: '/committee' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Program', path: '/program' },
    { label: 'Registration', path: '/registration' },
    { label: 'Venue', path: '/venue' },
  ]

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-3xl shadow-[0_12px_35px_rgba(6,26,53,0.08)] transition-all duration-300 sticky top-0 z-50">        
        <div className="min-w-full max-w-7xl mx-auto px-4">          
          <div className="flex items-center justify-between min-h-22">
            <Link to="/">
              <img src={logo} className="max-h-8 md:max-h-18 object-cover" alt="" />
            </Link>
            <ul className="hidden lg:flex items-center">
              {navItems.map((item) => (
                 <li key={item.label}>
                  <Link to={item.path}
                    className="
                      relative mx-0.75 px-2 py-2
                      text-lg text-[#344054]
                      after:content-['']
                      after:absolute
                      after:left-2.5
                      after:right-2.5
                      after:bottom-0.75
                      after:h-0.5
                      after:bg-[#0aa6a6]
                      after:scale-x-0
                      after:origin-right
                      after:transition-transform
                      after:duration-300
                      hover:after:scale-x-100
                      hover:after:origin-left
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="ml-3">
                <Link to="/registration" className="btn btn-main">
                  Register Now
                </Link>
              </li>
            </ul>
            <img src={otherlogos} className="max-h-6 md:max-h-10 object-cover" alt="" />
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-[#061a35]"
            >
              <Menu size={28} />
            </button>
          </div>          
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-all duration-300
          ${mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full
          bg-white z-50 shadow-2xl
          transition-all duration-300
          ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <Link to="/" onClick={() => setMobileMenu(false)}>
            <img src={logo} className="max-h-8 md:max-h-18 object-cover" alt="" />
          </Link>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-[#061a35]"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Nav */}
        <ul className="p-5 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="block text-[15px] font-semibold text-[#344054] hover:text-teal-500 transition"
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="pt-3">
            <Link to="/registration" className="btn btn-main w-full">
              Register Now
            </Link>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Header