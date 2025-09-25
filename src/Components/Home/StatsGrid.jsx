const stats = [
    {number: "30+", label: "Vertical Solutions", blue: false},
    {number: "100+", label: "Addons", blue: true},
    {number: "8", label: "Locations", blue: false},
    {number: "30+", label: "Years of Experience", blue: true},
    {number: "30K+", label: "Active Customers", blue: false},
];

const StatsGrid = () => {
    return (
        <div className=" md:py-12 md:px-4 sm:px-6 lg:px-8 md:my-16">
            <div className="max-w-8xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                                stat.blue
                                    ? "bg-gradient-to-br from-blue-500 to-blue-700"
                                    : "bg-gradient-to-br from-gray-700 to-gray-900"
                            } p-6 text-white`}
                        >
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-extrabold mb-2">{stat.number}</h3>
                                <p className="text-lg font-medium">{stat.label}</p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-tl-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;
