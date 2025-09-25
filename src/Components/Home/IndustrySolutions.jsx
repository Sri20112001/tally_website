import { Link } from "react-router-dom";

const data = [
  {
    icon: "https://yennes.com/wp-content/uploads/2023/02/user-60x60.png",
    label: "Healthcare",
    description: "Hospitals, Nursing Homes, Labs and Pharmacies",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/02/bar-60x60.png",
    label: "Hospitality",
    description: "Hotels, Clubs, Resorts and Restaurants",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/03/169-shield.png",
    label: "Govt. and NGOs",
    description: "Budget & Projects Accounts",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/02/briefcase-60x60.png",
    label: "Education",
    description: "Schools, Colleges and Universities",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/02/shopping-cart-1-60x60.png",
    label: "Micro Finance",
    description:
      "Group lending solutions that help maintain books and customer base",
  },
  {
    icon: "https://yennes.com/wp-content/uploads/2023/03/home5-feature3-icon.png",
    label: "Manufacturing",
    description:
      "From procurement to finished goods - seamless integration of various processes",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="my-16 md:my-32 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-12 max-w-8xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Transformative Industry Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-blue-500"
            >
              <div className="p-8 flex flex-col items-start">
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
          ))}
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
  active:scale-95 active:shadow-md
"
        >
          Know More
        </Link>
      </div>
    </section>
  );
};

export default IndustrySolutions;
