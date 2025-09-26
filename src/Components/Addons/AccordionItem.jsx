import {FiPlus, FiMinus} from "react-icons/fi";

const AccordionItem = ({item, index, isActive, toggleAccordion}) => {
    return (
        <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-6 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
            >
                <span className="font-semibold text-2xl text-gray-900 tracking-tight">{item.label}</span>
                <span className="text-2xl transform transition-transform duration-300 text-purple-600">
                    {isActive ? <FiMinus /> : <FiPlus />}
                </span>
            </button>

            <div className={`accordion-content ${isActive ? "h-52 min-h-52" : "max-h-0 overflow-hidden"}`}>
                <div className="p-6 bg-white text-gray-600 space-y-4 border-t border-gray-200">
                    {Array.isArray(item.description) ? (
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                            {item.description.map((desc, i) => (
                                <li key={i} className="text-gray-600 overflow-y-scroll">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-lg leading-relaxed text-gray-600">{item.description}</p>
                    )}
                </div>
            </div>

            <style jsx>{`
                .accordion-content {
                    transition: max-height 0.3s ease-in-out;
                }
               
            `}</style>
        </div>
    );
};

export default AccordionItem;
