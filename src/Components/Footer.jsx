import { Newspaper } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../Icons/Logo";
import { motion } from "framer-motion";

const data = [
  {
    title: "Menu",
    links: [
      { src: "/services", label: "Services" },
      { src: "/our-about", label: "About Us" },
      { src: "/contact", label: "Contact" },
      { src: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Partners",
    links: [
      { src: "/partner-1", label: "Partner 1" },
      { src: "/partner-2", label: "Partner 2" },
      { src: "/partner-3", label: "Partner 3" },
    ],
  },
  {
    title: "Get In Touch",
    address:
      "Plot No 32, G1, 3rd Cross Street, Velacheri, Chennai - 600042 (Near CDS Flats, Anna Nagar Extension)",
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-black md:pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to={"/contact"}
          className="flex gap-3 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          <Newspaper />
          Let's Connect
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.934792390826!2d80.22185038538296!3d12.976022482153937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1b07f400c1%3A0xd3508019a8db180d!2sGV%20Enterprises!5e0!3m2!1sen!2sin!4v1758902831600!5m2!1sen!2sin"
            className="w-full h-72 rounded-xl shadow-lg"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Logo />
          </motion.div>

          {data.map((section, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              {section.links && (
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.src}
                        className="hover:text-blue-300 hover:underline transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.address && (
                <div className="space-y-2.5">
                  <p>{section.address}</p>
                  <span className="flex items-center gap-1 group">
                    <BsWhatsapp
                      className="text-green-400 group-hover:text-green-800 transition-all duration-300"
                      size={20}
                    />
                    <a
                      href="https://wa.me/+919940039407"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-bold group-hover:text-blue-800 transition-all duration-300"
                    >
                      +91 9940039407
                    </a>
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center gap-6 border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GV Enterprises. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
