import { motion } from "framer-motion";

const ServiceCard = ({ src, icon, title, description, reverse }) => {
  // Card fade + scale + slide
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Image slide-in from left/right
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Content slide-in opposite direction
  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Icon pop-in
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center justify-between gap-10 my-4
        bg-white p-6 md:p-8 border-2 border-transparent bg-clip-padding
        ${reverse ? "lg:flex-row-reverse" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // triggers animation when scrolled into view
      viewport={{ once: false, amount: 0.2 }} // triggers on scroll, 20% visible
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-1/2 rounded-xl"
        variants={imageVariants}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-48 md:h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-xl"></div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`flex flex-col items-start gap-5 w-full lg:w-1/2`}
        variants={contentVariants}
      >
        {icon && (
          <motion.div className="relative" variants={iconVariants}>
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute -inset-2 bg-indigo-100/30 rounded-full blur-md"></div>
          </motion.div>
        )}
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-xl">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
