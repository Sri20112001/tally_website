import { useState } from "react";
import { Link } from "react-router-dom";
import navlinks from "../Data/navlinks";
import Logo from "../Icons/Logo";
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 relative">
          {navlinks.map((item) => (
            <li key={item.label} className="relative group">
              {/* Parent link */}
              <Link
                to={item.href}
                className="font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.menu && (
                <ul className="absolute -left-14 top-full mt-5 w-48 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top z-10">
                  {item.menu.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.href}
                        className="block px-4 text-center py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/30 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Side menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
            <Logo />
            {/* <button
              className="p-2 rounded hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button> */}
          </div>

          {/* Menu items */}
          <ul className="flex flex-col">
            {navlinks.map((item) => (
              <li key={item.label} className="flex flex-col">
                <div
                  className="flex items-center font-bold justify-between px-6 py-3  text-gray-700 hover:bg-blue-50 cursor-pointer transition-colors"
                  onClick={() =>
                    item.menu
                      ? toggleDropdown(item.label)
                      : setMobileOpen(false)
                  }
                >
                  <Link to={item.href}>{item.label}</Link>
                  {item.menu && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.menu && (
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.label
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.menu.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          to={sub.href}
                          className="block font-semibold px-10 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Contact button */}
          <div className="p-4 border-t border-gray-300">
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
