import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Bestseller from "./ui/Bestseller";
import Drinks from "./ui/Drinks";
import Food from "./ui/Food";
import CoffeeAtHome from "./ui/CoffeeAtHome";
import ReadyToEat from "./ui/readyToEat";
import Merchandise from "./ui/Merchandise";

const categories = [
  "Bestseller",
  "Drinks",
  "Food",
  "Merchandise",
  "Coffee At Home",
  "Ready to Eat",
];

// Convert category name into a slug
function slugify(category) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

// Convert slug back to the original category name
function unslugify(slug) {
  // Attempt to find the matching category
  const match = categories.find((cat) => slugify(cat) === slug);
  return match || "Bestseller"; // Default to Bestseller if no match
}

export default function Menu() {
  const { category } = useParams(); // e.g. 'bestseller', 'drinks', etc.
  const [selectedCategory, setSelectedCategory] = useState("Bestseller");

  // Whenever the URL param changes, update the selected category
  useEffect(() => {
    if (category) {
      setSelectedCategory(unslugify(category));
    } else {
      setSelectedCategory("Bestseller");
    }
  }, [category]);

  const renderCategory = () => {
    switch (selectedCategory) {
      case "Bestseller":
        return <Bestseller />;
      case "Drinks":
        return <Drinks />;
      case "Food":
        return <Food />;
      case "Coffee At Home":
        return <CoffeeAtHome />;
      case "Ready to Eat":
        return <ReadyToEat />;
      case "Merchandise":
        return <Merchandise />;
      default:
        return <Bestseller />;
    }
  };

  return (
    <div className="bg-[#E5D3B3] border-t-2 border-b-2 border-white">
      <div className="bg-[#efdfc4] max-w-6xl mx-auto p-6">
        {/* Category Tabs */}
        <div className="flex space-x-6 border-b pb-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pb-2 border-b-4 font-bold cursor-pointer ${
                selectedCategory === cat
                  ? "border-[#6c584c] text-[#6c584c]"
                  : "border-transparent text-gray-600 "
              } transition-all`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Render Selected Category Component */}
        {renderCategory()}
      </div>
    </div>
  );
}
