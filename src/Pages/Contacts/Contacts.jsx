import {motion} from "framer-motion";
import {MapPinned, Phone, Mail} from "lucide-react";
import Layout from "./../../Layout";
import ContactItem from "../../Components/Contacts/ContactItem";

const contactData = [
    {
        icon: MapPinned,
        title: "Head Office",
        type: "address",
        address: {
            doorNo: "Plot No 32, G1",
            street: "3rd Cross Street",
            area: "Velachery",
            landmark: "Near CDS Flats, Anna Nagar Extension",
            city: "Chennai",
            pincode: "600042",
        },
        color: "text-blue-600",
    },
    {
        icon: Phone,
        type: "mobile",
        title: "Phone",
        value: "+91 9940039407",
        color: "text-green-600",
    },
    {
        icon: Mail,
        type: "email",
        title: "Email",
        value: "support@example.com",
        color: "text-red-600",
    },
];

const Contacts = () => {
    return (
        <Layout>
            {/* Header */}
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white h-[30vh] py-8 md:py-16 px-4 md:px-12 ">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    Contact Us
                </motion.h1>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-18">
                {/* Left section */}
                <motion.div
                    className="col-span-2 space-y-6"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.8}}
                >
                    <motion.h2
                        className="text-4xl font-semibold text-gray-800"
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{duration: 0.6}}
                    >
                        Stay Connected
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{duration: 0.6, delay: 0.1}}
                    >
                        We’d love to hear from you. Reach out to us through any of the following ways.
                    </motion.p>

                    <div className="space-y-6">
                        {contactData.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.6, delay: index * 0.15}}
                            >
                                <ContactItem
                                    type={item.type}
                                    icon={item.icon}
                                    title={item.title}
                                    value={item.value}
                                    address={item.address}
                                    color={item.color}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right section (Contact Form / Queries) */}
                {/* <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">For Queries Reach Us</h2>
          <form className="space-y-4">
            ...
          </form>
        </motion.div> */}
            </div>
        </Layout>
    );
};

export default Contacts;
