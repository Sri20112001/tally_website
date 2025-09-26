import React from "react";
import Layout from "../../Layout";
import { FiAlertCircle } from "react-icons/fi"; // icon
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/error.png"; // you can use any 404 image

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Icon */}
        {/* <div className="text-red-500 mb-4">
          <FiAlertCircle size={60} />
        </div> */}

        {/* Image */}
        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="w-64 sm:w-[600px] aspect-auto animate-fade-in"
        />

        {/* Heading */}
        {/* <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-2">
          404
        </h1> */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Button */}
        <Link
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
          href={"/"}
        >
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
