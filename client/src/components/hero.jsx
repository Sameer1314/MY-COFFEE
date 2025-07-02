import React from "react";
import { Link } from "react-router-dom";
import coffee from "../assets/White_Coffee_Instant_Coffee_Cafe_PNG_-_Free_Download-removebg-preview.png";

const HeroSection = () => {
  return (
    <section className="bg-[#1b1107] p-4 text-white py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between border-t-1 border-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover The <br />
          Art Of Perfect <br />
          <span className="text-[#c49a6c]">Coffee</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Experience the rich and bold flavors of our exquisite coffee blends,
          crafted to awaken your senses and start your day right.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/Cart"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-black px-6 py-3 text-lg font-semibold flex items-center gap-2 rounded-lg shadow-md hover:bg-gray-300 cursor-pointer"
          >
            Order Now →
          </Link>
          <Link
            to="/menu"
            onClick={() => window.scrollTo(0, 0)}
            className="border border-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
          >
            Explore More
          </Link>
        </div>

        {/* Stats */}
        <div className="flex space-x-8 pt-6">
          <div className="text-center">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-gray-400">ITEM OF COFFEE</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm text-gray-400">Order Running</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">2k+</p>
            <p className="text-sm text-gray-400">Happy Customer</p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={coffee} alt="coffee" className="w-[90%] md:w-full max-w-md" />
      </div>
    </section>
  );
};

export default HeroSection;
