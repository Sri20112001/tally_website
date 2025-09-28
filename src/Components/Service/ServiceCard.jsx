import {motion} from "framer-motion";

const ServiceCard = ({
    src,
    icon: Icon,
    color = "text-indigo-600",
    title,
    description,
    reverse,
    corner = "top-left", // new prop
}) => {
    // Animation variants
    const cardVariants = {
        hidden: {opacity: 0, y: 40, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {duration: 0.7, ease: "easeOut"},
        },
    };

    const imageVariants = {
        hidden: {opacity: 0, x: reverse ? 100 : -100},
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.8, ease: "easeOut"},
        },
    };

    const contentVariants = {
        hidden: {opacity: 0, x: reverse ? -100 : 100},
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.8, ease: "easeOut", delay: 0.2},
        },
    };

    const iconVariants = {
        hidden: {opacity: 0, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.5, delay: 0.4},
        },
    };

    // Map corner prop to positioning classes
    const cornerClasses = {
        "top-left":
            "top-0 left-0 border-r-0 border-b-0 rounded-br-xl bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 text-gray-800",
        "top-right":
            "top-0 right-0 border-l-0 border-b-0 rounded-bl-xl bg-gradient-to-bl from-green-200 via-emerald-200 to-teal-200 text-gray-800",
        "bottom-left":
            "bottom-0 left-0 border-r-0 border-t-0 rounded-tr-xl bg-gradient-to-tr from-yellow-200 via-orange-200 to-pink-200 text-gray-800",
        "bottom-right":
            "bottom-0 right-0 border-l-0 border-t-0 rounded-tl-xl bg-gradient-to-tl from-pink-200 via-rose-200 to-red-200 text-gray-800",
    };

    return (
        <motion.div
            className={`relative flex flex-col lg:flex-row items-center justify-between gap-10 my-4
        bg-white p-6 md:p-8 rounded-lg overflow-hidden shadow-md
        ${reverse ? "lg:flex-row-reverse" : ""}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
        >
            {/* Decorative corner border */}

            <div className={`absolute size-7 md:size-10 ${cornerClasses[corner]}`}></div>

            {/* Image Section */}
            <motion.div className="relative w-full lg:w-1/2 rounded-xl" variants={imageVariants}>
                <img
                    src={src}
                    alt={title}
                    className="w-full h-48 md:h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-xl"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div className="flex flex-col items-start gap-5 w-full lg:w-1/2" variants={contentVariants}>
                <div className="flex flex-row md:flex-col items-center justify-between gap-3 w-full">
                    {Icon && (
                        <motion.div className="relative" variants={iconVariants}>
                            <Icon
                                className={`w-10 md:w-14 h-10 md:h-14 ${color} transition-transform duration-300 hover:scale-110`}
                            />
                            <div className="absolute -inset-2 bg-indigo-100/30 rounded-full blur-md"></div>
                        </motion.div>
                    )}
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 leading-snug">{title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-xl">{description}</p>
            </motion.div>
        </motion.div>
    );
};

export default ServiceCard;
