const ServiceCard = ({ src, icon, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-10 my-4
        bg-white  p-6 md:p-8 
        border-2 border-transparent bg-clip-padding 
        transform transition-all duration-300   ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 rounded-xl">
        <img
          src={src}
          alt={title}
          className="w-full h-48 md:h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-xl"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start gap-5 w-full lg:w-1/2">
        {icon && (
          <div className="relative">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute -inset-2 bg-indigo-100/30 rounded-full blur-md"></div>
          </div>
        )}
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 leading-snug ">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-xl ">
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default ServiceCard;