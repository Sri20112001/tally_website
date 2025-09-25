import { motion } from "framer-motion";

const data = [
  "https://yennes.com/wp-content/uploads/2023/11/Tally-logo-3-300x121-1.png",
  "https://yennes.com/wp-content/uploads/2023/12/Biz.jpg",
  "https://yennes.com/wp-content/uploads/2023/12/Mage.jpg",
  "https://yennes.com/wp-content/uploads/2023/12/Cabi.jpg",
  "https://yennes.com/wp-content/uploads/2023/12/vtige.jpg",
  "https://yennes.com/wp-content/uploads/2023/12/greyt.jpg",
];

const ClientPartners = () => {
  return (
    <section className="my-16 md:my-32 bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Client Partners
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {data.map((src, index) => (
            <motion.div
              key={index}
              className="relative group flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.08, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            >
              <img
                src={src}
                alt={`Client partner ${index + 1}`}
                className="h-32 max-h-32 object-contain transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientPartners;
