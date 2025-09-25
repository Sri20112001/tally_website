import { motion } from "framer-motion";

const data = [
  {
    icon: "https://yennes.com/wp-content/uploads/2023/03/222-verified.png",
    label: "License Sale",
    description: "30000+ License copies sold and counting.",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/02/diagram-60x60.png",
    label: "Support & Maintenance",
    description: "70+ team - Largest for a Tally partner.",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/03/167-gear-1.png",
    label: "Customization Solutions",
    description: "Business solutions on Tally - custom built to suit requirements.",
  },
];

const CoreService = () => {
  return (
    <section className="w-full px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Core Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 ${
                isEven ? "border-t-4 border-blue-500" : "border-t-4 border-green-500"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            >
              {/* Icon */}
              <img src={item.icon} alt={item.label} className="w-16 h-16 mb-4 object-contain" />

              {/* Label */}
              <p className="text-xl font-semibold text-blue-700 mb-2">{item.label}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreService;
