import Layout from "../../Layout";
import ServiceCard from "./../../Components/Service/ServiceCard";

const data = [
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/4-1024x576.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/home5-feature3-icon.png",
        title: "Implementation",
        description:
            "The approach is simple – capture and address all implicit needs of customers. Industry specific best practices and an implementation methodology perfected over the years ensures rapid, risk-free, and successful implementation from YENNES.",
    },
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/2-1024x576.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/home5-feature2-icon.png",
        title: "Customization & Enchancement",
        description:
            "While customization is generally viewed as part of implementation, YENNES looks at it differently. The customization should not only address the current business needs, but should also be able to take care of the medium term future needs. ",
    },
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/3-1024x576.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/home5-feature3-icon.png",
        title: "Support & Maintenance",
        description:
            "The YENNES AMC comes with an inbuilt promise of training new users in case of transition at the customer end. This ensures minimal disruption during transition and is just one example of the value addition that YENNES can bring to a relationship.",
    },
    {
        src: "https://yennes.com/wp-content/uploads/2023/12/5-1024x576.jpg",
        icon: "https://yennes.com/wp-content/uploads/2023/03/home5-feature2-icon.png",
        title: "Reimplementation",
        description:
            "YENNES has a well defined process for re-implementation as such an exercise needs a participative approach given that the organization that goes in for re-implementation now has experience as an additional resource – the YENNES methodology incorporates this aspect into the process for success.",
    },
];

const Service = () => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-center my-10">Our Services</h1>
            <div className="space-y-16">
                {data.map((item, index) => (
                    <ServiceCard
                        key={index}
                        src={item.src}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        reverse={index % 2 === 1} // alternate layout
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Service;
