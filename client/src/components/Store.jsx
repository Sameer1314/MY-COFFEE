import React, { useState } from "react";
import { Link } from "react-router-dom";
import gps from "../assets/gpsOff.svg";

export default function FindStorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError("Please enter a location.");
    } else {
      setError("");
    }
  };

  //  embed URL with one generated from Google Maps for your store location.
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10130.621272079128!2d72.97655512991645!3d19.188170668072093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90a6d3d1c2d%3A0x239d6bfd46240353!2sSahyog%20College%20of%20IT%20and%20Management!5e1!3m2!1sen!2sin!4v1742321864302!5m2!1sen!2sin";
  return (
    <div className="min-h-px flex flex-col md:flex-row border-t-3 border-b-3 border-[#7f5539]">
      {/* Left Column */}
      <div className="w-full md:w-1/3 bg-white p-6 border-r-2 border-l-2 border-[#7f5539] ">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center space-x-1 shadow-md">
          <Link to="/home" className="text-sm text-gray-500 font-bold">
            Home
          </Link>
          <span className="text-sm text-gray-500">&gt;</span>
          <Link to="#" className="text-sm text-gray-500 font-bold">
            Find a Store
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-800">
            Find a store near you
          </label>
          <input
            type="text"
            placeholder="Enter your location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-[#7f5539] rounded px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded mb-4">
            <strong className="block font-bold mb-1">Error:</strong>
            <span className="block text-sm">{error}</span>
          </div>
        )}

        {/* Location Prompt */}
        <div className="flex flex-col items-center text-center mt-8">
          {/* Replace with your own icon image or SVG */}
          <img src={gps} alt="Location Icon" className="w-50 h-50 mb-4" />
          <p className="text-gray-800 font-semibold">
            Sorry we can't seem to spot you.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Please enable your location to find the nearest Brew & CO. store.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer">
            Enter Location Manually
          </button>
        </div>
      </div>

      {/* Right Column (Map) */}
      <div className="w-full h-[500px] md:h-screen border-r-2 border-[#7f5539]">
        <iframe
          title="Store Location Map"
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
