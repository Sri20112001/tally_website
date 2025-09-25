import { motion } from "framer-motion";

const data = [
  {
    label: "Tally GVLA Partner",
    description:
      "Authorised Tally Partner for Government & Very Large Accounts. Over three decades, we have grown shoulder to shoulder with our principal company Tally Solutions Pvt Ltd. We have walked this journey of progress along with them since our inception.",
    src: "https://yennes.com/wp-content/uploads/2023/12/gvla-300x156.jpg",
  },
  {
    label: "5 Star Certified Partner",
    description:
      "As a 5 Star Certified partner of Tally, we cater to your complex or unique business requirements. With specialised skills, we build solutions (over and above the default Tally product) that are tailor-made as per your business segment and operations.",
    src: "https://yennes.com/wp-content/uploads/2023/12/5star-300x156.jpg",
  },
];

const CertifiedPartner = () => {
  return (
    <section className="w-full md:px-8 my-16 md:my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white flex flex-col rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // start hidden + below
            animate={{ opacity: 1, y: 0 }} // fade in + move up
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2, // staggered delay
            }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.label}
              className="aspect-video h-28 md:h-36 object-contain bg-gray-50"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">
                {item.label}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-grow">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertifiedPartner;
