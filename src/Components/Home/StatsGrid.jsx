import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "Vertical Solutions", blue: false },
  { number: "100+", label: "Addons", blue: true },
  { number: "8", label: "Locations", blue: false },
  { number: "30+", label: "Years of Experience", blue: true },
  { number: "30K+", label: "Active Customers", blue: false },
];

const StatsGrid = () => {
  return (
    <div className="md:py-12 md:px-4 sm:px-6 lg:px-8 md:my-16">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                stat.blue
                  ? "bg-gradient-to-br from-blue-500 to-blue-700"
                  : "bg-gradient-to-br from-gray-700 to-gray-900"
              } p-6 text-white`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Shining Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="shine absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 transform -skew-x-12 animate-shine"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold mb-2">{stat.number}</h3>
                <p className="text-lg font-medium">{stat.label}</p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-tl-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -75%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-shine {
          animation: shine 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StatsGrid;
