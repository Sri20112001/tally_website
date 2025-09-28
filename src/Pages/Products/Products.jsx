import { motion } from "framer-motion";
import Layout from "../../Layout";
import ProductCard from "./../../Components/Products/ProductCard";
import TallyPrime from "../../assets/tallyPrime.avif";
import TallyPrimeServer from "../../assets/tallyPrimeServer.jpg";
import TallyPrimeAws from "../../assets/tallyPrimeAws.jpg";

const data = [
  {
    label: "TallyPrime",
    title: "",
    description:
      "To grow your business, and to make the right business decisions, you need the right insights. TallyPrime enables you to manage multiple companies and incrementally add features such as multiple go-downs, multi-currency, order process, cost centres etc. This helps you get rid of complexities, and in turn, focus on business growth.",
    src: TallyPrime,
  },
  {
    label: "TallyPrime Server",
    title: "Unleash the power of TallyPrime with a Client-Server Architecture",
    description:
      "TallyPrime Server offers powerful data server capabilities over the Gold license. This server-based Data Architecture unleashes greater concurrency, secured data access, and advanced monitoring capabilities. TallyPrime Server is truly an Enterprise Class product that helps fast-growing medium and large businesses improve their business efficiencies.",
    src: TallyPrimeServer,
  },
  {
    label: "What is TSS?",
    title: "Powerful Upgrades and Connected Services for your growing Business",
    description:
      "Tally Software Services (TSS) is a software subscription for a collection of services which add great value to your TallyPrime by giving you the latest developments in technology and statutory laws. Continuous product upgrades and Updates, connectivity driven functionalities such as online data exchange between your branches, remote access, seamless banking and payment services and much more, enhance your business performance by leaps and bounds.",
    src: "https://yennes.com/wp-content/uploads/2023/12/tss.png",
  },
  {
    label: "TallyPrime powered by AWS",
    title: "Best solution to access your TallyPrime, anytime, anywhere",
    description:
      "TallyPrime powered by AWS helps you to securely access TallyPrime and your business data anytime, anywhere. It’s enabled by a virtual machine dedicated to your business that is made easily available via our strong network of partners. So, you get greater flexibility to collaborate with multiple users working on the same data, at the same time.",
    src: TallyPrimeAws,
  },
];

// Animation variants for heading
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Products = () => {
  return (
    <Layout>
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-xl md:text-7xl font-bold text-center my-8 md:my-16 text-gray-900 tracking-tight"
      >
        Discover Our Products
      </motion.h1>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            label={item.label}
            title={item.title}
            description={item.description}
            src={item.src}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <style jsx>{`
        .product-card {
          opacity: 0;
          transform: translateY(30px);
          animation: scrollFadeIn 0.6s ease-out forwards;
        }

        @keyframes scrollFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Optional: Add slight parallax effect for images */
        .product-card img {
          transition: transform 0.5s ease-out;
        }
      `}</style>
    </Layout>
  );
};

export default Products;
