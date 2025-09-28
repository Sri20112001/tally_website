import {motion} from "framer-motion";
import {addressLink} from "../../helper";

const ContactItem = ({
    icon: Icon,
    title,
    type,
    value,
    address,
    color = "text-gray-600",
    index = 0, // optional for staggered animation
}) => {
    // Generate the appropriate href
    const href =
        type === "mobile"
            ? `https://wa.me/${value.replace(/\s+/g, "")}` // remove spaces
            : type === "email"
            ? `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`
            : type === "address"
            ? "https://google.com/maps/search/?api=1&query=12.981801,80.2196882107"
            : null;

    // Tooltip title
    const tooltipTitle =
        type === "mobile"
            ? "Contact on WhatsApp"
            : type === "email"
            ? "Email us"
            : type === "address"
            ? "View on Google Maps"
            : "Contact Info";

    return (
        <motion.div
            title={tooltipTitle}
            className="flex items-start gap-8"
            initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.6, delay: index * 0.1, ease: "easeOut"}}
            whileHover={{scale: 1.02}}
        >
            {/* Icon container */}
            <motion.div
                className={`flex items-center justify-center aspect-square h-14 rounded-full border border-gray-200 shadow-sm bg-gray-50 transition-colors ${color}`}
                whileHover={{scale: 1.15, rotate: 10}}
                transition={{type: "spring", stiffness: 300}}
            >
                <Icon className={`w-6 h-6 ${color}`} />
            </motion.div>

            {/* Text */}
            <div className="w-full">
                <p className="font-semibold text-xl text-gray-800">{title}</p>

                {type === "address" && address ? (
                    <a
                        href={addressLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 font-medium leading-relaxed hover:text-indigo-600 transition"
                    >
                        {address.doorNo}, {address.street}, {address.area},{" "}
                        <span className="italic text-gray-500">{address.landmark}</span>, {address.city} -{" "}
                        {address.pincode}
                    </a>
                ) : href ? (
                    <motion.a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-bold hover:text-blue-800 transition-all duration-300"
                        whileHover={{scale: 1.05, x: 2}}
                        transition={{type: "spring", stiffness: 250}}
                    >
                        {value}
                    </motion.a>
                ) : (
                    <p className="text-gray-600 font-semibold">{value}</p>
                )}
            </div>
        </motion.div>
    );
};

export default ContactItem;
