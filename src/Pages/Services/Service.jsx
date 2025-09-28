import Layout from "../../Layout";
import ServiceCard from "./../../Components/Service/ServiceCard";
import {GiLightningSpanner} from "react-icons/gi";
import {BiCustomize} from "react-icons/bi";
import {MdOutlineSupportAgent} from "react-icons/md";
import {FaServer} from "react-icons/fa";

import ImplementationImg from "../../assets/implementation.avif";
import customizationImg from "../../assets/customization.jpg";
import supportImg from "../../assets/support.png";
import ReimplementationImg from "../../assets/reimplementation.png";

const data = [
    {
        src: ImplementationImg,
        icon: GiLightningSpanner,
        color: "text-blue-600",
        title: "Implementation",
        description:
            "The approach is simple – capture and address all implicit needs of customers. Industry specific best practices and an implementation methodology perfected over the years ensures rapid, risk-free, and successful implementation from GV Enterprises.",
    },
    {
        src: customizationImg,
        icon: BiCustomize,
        color: "text-green-600",
        title: "Customization & Enhancement",
        description:
            "While customization is generally viewed as part of implementation, GV Enterprises looks at it differently. The customization should not only address the current business needs, but should also be able to take care of the medium term future needs.",
    },
    {
        src: supportImg,
        icon: MdOutlineSupportAgent,
        color: "text-orange-500",
        title: "Support & Maintenance",
        description:
            "The GV Enterprises AMC comes with an inbuilt promise of training new users in case of transition at the customer end. This ensures minimal disruption during transition and is just one example of the value addition that GV Enterprises can bring to a relationship.",
    },
    {
        src: ReimplementationImg,
        icon: FaServer,
        color: "text-purple-600",
        title: "Reimplementation",
        description:
            "GV Enterprises has a well defined process for re-implementation as such an exercise needs a participative approach given that the organization that goes in for re-implementation now has experience as an additional resource – the GV Enterprises methodology incorporates this aspect into the process for success.",
    },
];

const Service = () => {
    return (
        <Layout>
            <div className="py-8 md:py-16 px-4 md:px-12 ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-5 md:mb-10">
                    Our Services
                </h1>

                <div className="space-y-20 mt-10">
                    {data.map((item, index) => {
                        const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
                        const corner = corners[index % 4]; // cycle through 4 corners
                        return (
                            <ServiceCard
                                key={index}
                                src={item.src}
                                icon={item.icon}
                                color={item.color}
                                title={item.title}
                                description={item.description}
                                reverse={index % 2 === 1}
                                corner={corner}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Service;
