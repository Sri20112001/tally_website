import {Newspaper} from "lucide-react";
import {BsWhatsapp} from "react-icons/bs";
import {Link} from "react-router-dom";
import Logo from "../Icons/Logo";
import {motion} from "framer-motion";
import ContactLink from "./ContactLink";
import {addressLink} from "../helper";

const data = [
    {
        title: "Menu",
        links: [
            {src: "/services", label: "Services"},
            {src: "/our-about", label: "About Us"},
            {src: "/contact", label: "Contact"},
            {src: "/blog", label: "Blog"},
        ],
    },
    {
        title: "Partners",
        links: [
            {src: "/partner-1", label: "Partner 1"},
            {src: "/partner-2", label: "Partner 2"},
            {src: "/partner-3", label: "Partner 3"},
        ],
    },
    {
        title: "Get In Touch",
        address: "Plot No 32, G1, 3rd Cross Street, Velacheri, Chennai - 600042 (Near CDS Flats, Anna Nagar Extension)",
        mobileNo: "+91 9940039407",
    },
];

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-gray-50 to-gray-100 text-black px-4 sm:px-6 lg:px-8 py-8">
            {/* Let's Connect Button */}
            <motion.div
                className="my-4 w-full flex justify-center"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
            >
                <Link
                    to={"/contact"}
                    className="flex gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm sm:text-base sm:px-8"
                >
                    <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" />
                    Let's Connect
                </Link>
            </motion.div>

            <div className="max-w-8xl mx-auto w-full">
                {/* Google Map */}
                <motion.div
                    className="mb-8 md:mb-12"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <iframe
                        src={addressLink}
                        className="w-full h-64 md:h-96" // 👈 makes it responsive
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="GV Enterprises Location"
                    ></iframe>
                </motion.div>

                {/* Footer Content */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Logo Section */}
                    <motion.div
                        className="flex justify-center lg:justify-start"
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <div className="w-32 sm:w-40 md:w-48">
                            <Logo />
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full lg:w-auto">
                        {data.map((section, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center sm:items-start text-center sm:text-left"
                                initial={{opacity: 0, x: 30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.8, delay: 0.4 + idx * 0.1}}
                            >
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 w-full">
                                    {section.title}
                                </h3>

                                {section.links && (
                                    <ul className="space-y-2 sm:space-y-2.5 w-full">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <a
                                                    href={link.src}
                                                    className="hover:text-blue-300 hover:underline transition-all duration-300 text-sm sm:text-base block py-1"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.address && (
                                    <div className="space-y-2 sm:space-y-2.5 w-full">
                                        <p className="text-sm sm:text-base font-medium">{section.address}</p>
                                        <ContactLink number={section.mobileNo} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    className="flex flex-col items-center gap-4 sm:gap-6 border-t border-gray-300 pt-6"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.5}}
                >
                    <p className="text-gray-600 text-xs sm:text-sm text-center">
                        &copy; {new Date().getFullYear()} GV Enterprises. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;
