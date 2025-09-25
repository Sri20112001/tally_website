const ProductCard = ({label, title, description, src, reverse}) => {
    return (
        <div
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 
        bg-gradient-to-br from-white to-gray-50  p-8  animate-fade-in 
        ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-full rounded-2xl">
                <img src={src} alt={label} className="w-64 sm:w-[450px] aspect-video object-contain" />
                {/* Optional overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div> */}
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                <p className="text-indigo-600 font-medium text-xl md:text-4xl uppercase tracking-widest animate-slide-in">
                    {label}
                </p>
                {title && (
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight animate-slide-in">
                        {title}
                    </h2>
                )}
                <p className="text-gray-700 leading-loose text-sm lg:text-lg animate-slide-in">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
