import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import navlinks from "../Data/navlinks";
import Logo from "../Icons/Logo";
import {Menu, ChevronDown} from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isSticky, setIsSticky] = useState(false);

    const toggleDropdown = (label) => setOpenDropdown(openDropdown === label ? null : label);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                // md breakpoint in Tailwind
                if (window.scrollY > 50) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            } else {
                setIsSticky(false); // never sticky on small screens
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // update on resize

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full z-50 transition-all duration-300 ${
                isSticky ? "md:sticky md:top-0 bg-white/90 backdrop-blur-md shadow-md" : "block bg-gray-50"
            }`}
        >
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
                className={`fixed inset-0 z-60 transition-all duration-300 ${
                    mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setMobileOpen(false)}
                ></div>

                {/* Side menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out rounded-r-2xl overflow-hidden ${
                        mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    {/* Header with logo */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                        <Logo />
                        {/* Close button (optional) */}
                        {/* <button
        className="p-2 rounded hover:bg-gray-100"
        onClick={() => setMobileOpen(false)}
      >
        <X size={24} />
      </button> */}
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col mt-4">
                        {navlinks.map((item) => (
                            <li key={item.label} className="flex flex-col">
                                <div
                                    className="flex items-center justify-between px-6 py-3 font-semibold text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer transition-all duration-300"
                                    onClick={() => (item.menu ? toggleDropdown(item.label) : setMobileOpen(false))}
                                >
                                    <Link to={item.href} className="w-full">
                                        {item.label}
                                    </Link>
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
                                        className={`overflow-hidden transition-all duration-300 ml-4 ${
                                            openDropdown === item.label ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        {item.menu.map((sub) => (
                                            <li key={sub.label}>
                                                <Link
                                                    to={sub.href}
                                                    className="block px-6 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors"
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

                    {/* Contact Button */}
                    <div className="p-6 border-t border-gray-200 bg-white">
                        <button
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all"
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
