import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

const data = [
  {
    review:
      "YENNES has a strong support team. We never face downtime while at work in Tally, and it helps in generating MIS Reports like Sales, Purchase, O/S management, Debtor / Stock Ageing.",
    author: "John Doe",
    posting: "Business Analyst",
  },
  {
    review:
      "The software is very intuitive and easy to use. Generating financial reports has become effortless for our team.",
    author: "Jane Smith",
    posting: "Account Manager",
  },
  {
    review:
      "Excellent customer support and timely updates. It significantly improved our workflow efficiency.",
    author: "Rajesh Kumar",
    posting: "Operations Head",
  },
  {
    review:
      "We appreciate the customization options and the detailed insights provided. Makes tracking stock and sales much simpler.",
    author: "Priya Nair",
    posting: "Finance Executive",
  },
  {
    review:
      "A reliable tool for day-to-day accounting and reporting. The support team is very responsive and helpful.",
    author: "Michael Brown",
    posting: "CFO",
  },
  {
    review:
      "YENNES has made managing our accounts stress-free. The MIS reports are clear and easy to understand.",
    author: "Anita Sharma",
    posting: "Senior Accountant",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const nextReview = () => {
    setSlideDirection("slide-up");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSlideDirection("");
    }, 500);
  };

  const prevReview = () => {
    setSlideDirection("slide-down");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
      setSlideDirection("");
    }, 500);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Client Testimonials
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Hear from Our Satisfied Partners
        </p>

        <div className="relative overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              slideDirection === "slide-up"
                ? "-translate-y-12 opacity-0"
                : slideDirection === "slide-down"
                ? "translate-y-12 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl px-6 sm:px-10 py-10 sm:py-14 w-full max-w-4xl mx-auto border-l-4 border-blue-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-14 sm:w-22 aspect-square rounded-full bg-blue-200 flex items-center justify-center  text-gray-800 font-bold text-lg sm:text-xl">
                  {data[currentIndex].author[0]}
                </div>
                <div>
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg italic mb-4">
                    "{data[currentIndex].review}"
                  </p>
                  <p className="text-gray-900 font-semibold text-base sm:text-xl">
                    {data[currentIndex].author}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {data[currentIndex].posting}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-6 m-8">
            <button
              onClick={prevReview}
              className="rounded-full border border-blue-400 p-3 sm:p-4 text-blue-600 bg-white shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <MoveLeft size={20} />
            </button>

            <button
              onClick={nextReview}
              className="rounded-full border border-blue-400 p-3 sm:p-4 text-blue-600 bg-white shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <MoveRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
