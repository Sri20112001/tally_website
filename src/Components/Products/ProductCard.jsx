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
      className={`flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white to-gray-50 p-8 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // triggers on scroll, 20% visible
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-1/2 h-full rounded-2xl"
        variants={imageVariants}
      >
        <img
          src={src}
          alt={label}
          className="w-64 sm:w-[450px] aspect-video object-contain rounded-2xl"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`flex flex-col items-start gap-6 w-full lg:w-1/2 ${
          reverse ? "lg:items-end" : ""
        }`}
        variants={contentVariants}
      >
        <p className="text-indigo-600 font-medium text-xl md:text-4xl uppercase tracking-widest">
          {label}
        </p>
        {title && (
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
            {title}
          </h2>
        )}
        <p className="text-gray-700 leading-loose text-sm lg:text-lg">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
