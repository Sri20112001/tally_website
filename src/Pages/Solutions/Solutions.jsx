import ServiceCard from "../../Components/Service/ServiceCard";
import Layout from "../../Layout";
import {FileSpreadsheet, FileCode, Braces, Database, Server} from "lucide-react";

const data = [
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/verti.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/headphones-icon.png",
        title: "Tally Customization",
        description:
            "Tally Definition Language is the application development language of Tally. TDL has been developed to provide the user with the flexibility and power to extend the default capabilities of Tally, and integrate them with the external applications. TDL provides a development platform for the user.",
    },
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/Cust.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/layers.png",
        title: "Vertical Solutions",
        description:
            "Looking to revamp how your organization works by adding more collaboration or, wanting to be on top of your game in providing excellent service to your customers. While you work on your core product idea, we got you covered in ensuring your organization functions smoothly across departments.",
    },
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/Add.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/110-inbox.png",
        title: "Addons in Tally",
        description:
            "Add-ons in Tally are simply customized programs/extensions. These Add-ons/Tally Plugins, modify Tally in amazing ways and increase productivity, reliability & experience.",
    },
];

const importList = [
    {label: "Excel Import", icon: FileSpreadsheet},
    {label: "XML Import", icon: FileCode},
    {label: "JSON Import", icon: Braces},
    {label: "MySQL Import", icon: Database},
    {label: "MS SQL Import", icon: Server},
];

const Solutions = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-50 to-blue-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-center md:text-left animate-fade-in">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight ">
                            Tailored <span className="text-indigo-600">Business Solutions</span>
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed ">
                            Unlock your business potential with our customized solutions designed to streamline
                            operations, enhance collaboration, and drive measurable growth.
                        </p>
                        {/* <button className="mt-4 px-8 py-3 bg-indigo-600 text-white text-base font-medium rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
                            Get Started
                        </button> */}
                    </div>
                    {/* Right Image */}
                    <div className="relative flex justify-center md:justify-end">
                        <img
                            src="https://via.placeholder.com/600x400.png?text=Business+Solutions"
                            alt="Business Solutions"
                            className="w-full max-w-md rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl"></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
                {data.map((item, index) => (
                    <ServiceCard
                        key={index}
                        src={item.src}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        reverse={index % 2 === 1}
                    />
                ))}
            </section>

            {/* Data Migration Section */}
            <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Text */}
                    <div className="space-y-6">
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight ">
                            Seamless Data Migration & Integration
                        </h1>
                        <p className="text-gray-600 text-base md:text-xl leading-relaxed ">
                            Our data migration tools ensure smooth transitions between systems, transforming and
                            preparing your data for compatibility with new environments.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {importList.map(({label, icon: Icon}) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-3 text-gray-700 text-base font-medium hover:text-indigo-600 transition-colors duration-300 animate-slide-in"
                                >
                                    <Icon className="w-6 h-6 text-indigo-600" />
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Side - Image */}
                    <div className="relative flex justify-center">
                        <img
                            src="https://via.placeholder.com/500x300.png?text=Data+Migration"
                            alt="Data Migration Illustration"
                            className="w-full max-w-md"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl"></div> */}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Solutions;
