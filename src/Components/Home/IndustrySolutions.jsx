import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {GiHospital} from "react-icons/gi";
import {ShieldUser, GraduationCap, HeartPulse} from "lucide-react";
import {IoWalletSharp} from "react-icons/io5";
import {MdOutlinePrecisionManufacturing} from "react-icons/md";

const data = [
    {
        icon: HeartPulse,
        color: "text-red-500",
        label: "Healthcare",
        description: "Hospitals, Nursing Homes, Labs and Pharmacies",
        borderColor: "border-red-500",
        shapeColor: "bg-red-100",
    },
    {
        icon: GiHospital,
        color: "text-green-600",
        label: "Hospitality",
        description: "Hotels, Clubs, Resorts and Restaurants",
        borderColor: "border-green-600",
        shapeColor: "bg-green-100",
    },
    {
        icon: ShieldUser,
        color: "text-blue-600",
        label: "Govt. and NGOs",
        description: "Budget & Projects Accounts",
        borderColor: "border-blue-600",
        shapeColor: "bg-blue-100",
    },
    {
        icon: GraduationCap,
        color: "text-yellow-500",
        label: "Education",
        description: "Schools, Colleges and Universities",
        borderColor: "border-yellow-500",
        shapeColor: "bg-yellow-100",
    },
    {
        icon: IoWalletSharp,
        color: "text-purple-600",
        label: "Micro Finance",
        description: "Group lending solutions that help maintain books and customer base",
        borderColor: "border-purple-600",
        shapeColor: "bg-purple-100",
    },
    {
        icon: MdOutlinePrecisionManufacturing,
        color: "text-indigo-600",
        label: "Manufacturing",
        description: "From procurement to finished goods - seamless integration of various processes",
        borderColor: "border-indigo-600",
        shapeColor: "bg-indigo-100",
    },
];

const IndustrySolutions = () => {
    return (
        <div className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-12 max-w-8xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
                    Transformative Industry Solutions
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className={`relative group bg-white rounded-lg shadow-lg overflow-hidden 
    transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 
    border-l-4 ${item.borderColor}`}
                                initial={{opacity: 0, x: index % 2 === 0 ? -150 : 150}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="p-8 flex flex-col items-start">
                                    <Icon className={`w-16 h-16 mb-4 ${item.color}`} />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.label}</h3>
                                    <p className="text-gray-600 text-base">{item.description}</p>
                                </div>
                                <div
                                    className={`absolute top-0 right-0 w-16 h-16 ${item.shapeColor} rounded-bl-full 
      opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                                ></div>
                            </motion.div>
                        );
                    })}
                </div>

                <Link
                    to={"/vertical-solutions"}
                    className="my-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl
            shadow-lg
            hover:shadow-xl
            hover:translate-y-[-2px]
            transition-all duration-300
            transform
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
            active:scale-95 active:shadow-md"
                >
                    Know More
                </Link>
            </div>
        </div>
    );
};

export default IndustrySolutions;
