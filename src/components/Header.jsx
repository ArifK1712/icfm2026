import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import otherlogos from "../assets/images/other-logos.png";
import logo from "../assets/images/logo.png";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Committee", path: "/committee" },
    {
      label: "Scientific Information",
      dropdown: [
        {
          label: "Preliminary Timetable",
          path: "/program",
        },
        {
          label: "Faculty List",
          path: "/speakers",
        },
        {
          label: "Call for Abstracts",
          path: "/call-for-abstract",
        },
      ],
    },
    { label: "Registration", path: "/registration" },
    { label: "Accommodation", path: "/accommodation" },
    { label: "Sponsorship & Exhibition", path: "/sponsorship" },
  ];

  return (
    <>
      <nav className="backdrop-blur-3xl shadow-[0_12px_35px_rgba(6,26,53,0.08)] transition-all duration-300 sticky top-0 z-50">
        <div className="min-w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between min-h-15 md:min-h-20">
            <Link to="/">
              <img
                src={logo}
                className="max-h-8 md:max-h-18 object-cover"
                alt="5th ICFM Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden xl:flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        className="
                          relative  px-2 py-2 text-nowrap
                          text-sm xl:text-[16px] transition-colors duration-300
                          text-white hover:text-[#0aa6a6]
                          flex items-center gap-1
                        "
                      >
                        {item.label}

                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      <ul
                        className="
                          absolute left-0 top-full mt-2 w-80
                          rounded-xl bg-white shadow-xl border border-slate-100
                          opacity-0 invisible translate-y-2
                          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                          transition-all duration-300
                          overflow-hidden z-50
                        "
                      >
                        {item.dropdown.map((dropItem) => (
                          <li key={dropItem.label}>
                            <NavLink
                              to={dropItem.path}
                              className={({ isActive }) => `
                                block px-4 py-3 text-sm transition-colors duration-300 text-white
                                ${
                                  isActive
                                    ? "bg-teal-50 text-[#0aa6a6]"
                                    : "text-[#344054] hover:bg-teal-50 hover:text-[#0aa6a6]"
                                }
                              `}
                            >
                              {dropItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) => `
                        relative  px-2 py-2 text-nowrap
                        text-sm xl:text-[16px] transition-colors duration-300 text-white
                        ${isActive ? "text-[#0aa6a6]" : "text-[#344054]"}
                        after:content-['']
                        after:absolute
                        after:left-2.5
                        after:right-2.5
                        after:bottom-0.75
                        after:h-0.5
                        after:bg-[#0aa6a6]
                        after:transition-transform
                        after:duration-300
                        ${
                          isActive
                            ? "after:scale-x-100 after:origin-left"
                            : "after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
                        }
                      `}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}

              <li className="ml-3">
                <NavLink
                  to="/contact"
                  className="btn btn-main py-2 text-sm xl:text-[16px]"
                  onClick={() => setMobileMenu(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <img
              src={otherlogos}
              className="max-h-6 sm:max-h-9 2xl:max-h-10 object-cover"
              alt="Other Logos"
            />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(true)}
              className="xl:hidden text-white cursor-pointer"
              aria-label="Open menu"
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
          ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full
        bg-[#061a35] z-50 shadow-2xl
          transition-all duration-300
          ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            <img
              src={logo}
              className="max-h-8 md:max-h-18 object-cover"
              alt="5th ICFM Logo"
            />
          </NavLink>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="p-5 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.dropdown ? (
                <div>
                  <p className="mb-3 text-[15px] font-bold text-[#0aa6a6]">
                    {item.label}
                  </p>

                  <ul className="ml-3 space-y-3 border-l border-slate-200 pl-4">
                    {item.dropdown.map((dropItem) => (
                      <li key={dropItem.label}>
                        <NavLink
                          to={dropItem.path}
                          className="block text-[14px] font-semibold text-white hover:text-teal-500 transition"
                          onClick={() => setMobileMenu(false)}
                        >
                          {dropItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className="block text-[15px] font-semibold text-white hover:text-teal-500 transition"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}

          <li className="pt-3">
            <NavLink
              to="/contact"
              className="btn btn-main w-full text-center"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;