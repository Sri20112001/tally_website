import { motion } from "framer-motion";

const ProductCard = ({ label, title, description, src, reverse }) => {
  // Parent container variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image slide-in variants
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Content slide-in variants
  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 bg-gradient-to-br from-white to-gray-50 p-6 md:p-10 rounded-2xl shadow ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-1/2 flex justify-center"
        variants={imageVariants}
      >
        <img
          src={src}
          alt={label}
          className="w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[600px] aspect-video object-contain rounded-xl"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left ${
          reverse ? "lg:text-right lg:items-end" : ""
        }`}
        variants={contentVariants}
      >
        <p className="text-indigo-600 font-semibold text-lg sm:text-xl md:text-2xl uppercase tracking-widest">
          {label}
        </p>
        {title && (
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {title}
          </h2>
        )}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
