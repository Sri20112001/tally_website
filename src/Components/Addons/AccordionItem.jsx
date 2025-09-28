import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ item, index, isActive, toggleAccordion }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-6 transition-all duration-300"
        onClick={() => toggleAccordion(index)}
      >
        <span className="text-left md:text-center font-semibold text-lg md:text-2xl text-gray-900 tracking-tight">{item.label}</span>
        <span className="text-2xl transform transition-transform duration-300 text-purple-600">
          {isActive ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="p-6 md:h-56 md:min-h-56 bg-white text-gray-600 space-y-4 border-t border-gray-200">
              {Array.isArray(item.description) ? (
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm md:text-base font-medium text-gray-600">
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-medium md:text-lg leading-relaxed text-gray-600">{item.description}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
