import {motion} from "framer-motion";
import tallyLogo from "../../assets/tallyLogo.png";
import bizAnalyst from "../../assets/bizAnalyst.png";
import magentaBi from "../../assets/magentaBi.jpg";
import cabinet from "../../assets/cabinet.jpg";
import vtige from "../../assets/vtige.jpg";
import greyt from "../../assets/greyt.jpg";

const data = [tallyLogo, bizAnalyst, magentaBi, cabinet, vtige, greyt];

const ClientPartners = () => {
    return (
        <div className="py-4 md:py-16 bg-white lg:py-32 px-4 md:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Client Partners</h1>

                <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {data.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative group flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow-sm"
                            initial={{opacity: 0, y: 50, scale: 0.95}}
                            whileInView={{opacity: 1, y: 0, scale: 1}}
                            viewport={{once: false, amount: 0.3}}
                            transition={{duration: 0.7, delay: index * 0.15, ease: "easeOut"}}
                            whileHover={{scale: 1.08, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)"}}
                        >
                            <img
                                src={src}
                                alt={`Client partner ${index + 1}`}
                                className="h-28 md:h-36 max-h-28 md:max-h-36 aspect-video object-contain transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientPartners;
