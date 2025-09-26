import {MapPinned, Phone, Mail} from "lucide-react";
import Layout from "./../../Layout";
import ContactItem from "../../Components/Contacts/ContactItem";

const contactData = [
    {
        icon: MapPinned,
        title: "Head Office",
        value: "Plot No 32, G1, 3rd Cross Street, Velacheri, Chennai - 600042 (Near CDS Flats, Anna Nagar Extension)",
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
            <section className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white h-[30vh]">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            </section>

            {/* Content */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-12">
                {/* Left section */}
                <div className="col-span-2 space-y-6">
                    <h2 className="text-4xl font-semibold text-gray-800">Stay Connected</h2>
                    <p className="text-xl text-gray-600">
                        We’d love to hear from you. Reach out to us through any of the following ways.
                    </p>

                    <div className="space-y-6">
                        {contactData.map((item) => (
                            <ContactItem
                                key={item.title}
                                type={item.type}
                                icon={item.icon}
                                title={item.title}
                                value={item.value}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>

                {/* Right section (Contact Form / Queries) */}
                {/* <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">For Queries Reach Us</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div> */}
            </section>

            <section className=""></section>
        </Layout>
    );
};

export default Contacts;
