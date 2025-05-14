// Hero2.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

import bestsellerImg from "../assets/homepageimg/bestseller.jpg";
import drinksImg from "../assets/homepageimg/drinks.jpg";
import foodImg from "../assets/homepageimg/food.jpg";
import merchandiseImg from "../assets/homepageimg/merchandise.jpg";
import coffeehomeImg from "../assets/homepageimg/coffeehome.jpg";
import readytoeatImg from "../assets/homepageimg/readytoeat.jpg";
import javachipImg from "../assets/homepageimg/javachip.jpg";

function slugify(category) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function Hero2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const curatedItems = [
    { name: "Bestseller", img: bestsellerImg },
    { name: "Drinks", img: drinksImg },
    { name: "Food", img: foodImg },
    { name: "Merchandise", img: merchandiseImg },
    { name: "Coffee At Home", img: coffeehomeImg },
    { name: "Ready to Eat", img: readytoeatImg },
  ];

  // Barista recommended item details
  const baristaItem = {
    id: 1,
    title: "Java Chip Frappuccino",
    description: "TALL (345 ml) 392 kcal",
    priceNum: 298.0,
    displayPrice: "₹298.00",
    image: javachipImg,
  };

  const handleAddBaristaItem = () => {
    dispatch(
      addToCart({
        id: baristaItem.id,
        title: baristaItem.title,
        price: baristaItem.priceNum,
        image: baristaItem.image,
      })
    );
    navigate("/cart");
  };

  return (
    <section className="w-full bg-[#efdfc4] py-10 border-t border-white">
      {/* Handcrafted Curations */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Handcrafted Curations
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-22">
          {curatedItems.map((item, index) => (
            <Link
              key={index}
              to={`/menu/${slugify(item.name)}`}
              onClick={() => window.scrollTo(0, 0)}
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md border-2 border-[#d4a373]"
              />
              <p className="mt-2 text-gray-700 font-bold">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Barista Recommends Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800">
            Barista Recommends
          </h2>
          <div className="bg-[#e6ccb2] shadow-lg rounded-lg p-4 w-full md:w-80 mt-4 border-2 border-[#edede9]">
            <div className="flex gap-4 items-center">
              <img
                src={baristaItem.image}
                alt={baristaItem.title}
                className="w-20 h-20 rounded-md object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {baristaItem.title}
                </p>
                <p className="text-sm text-gray-500">
                  {baristaItem.description}
                </p>
                <p className="text-lg font-bold mt-1">
                  {baristaItem.displayPrice}
                </p>
              </div>
            </div>
            <button
              onClick={handleAddBaristaItem}
              className="mt-4 w-full bg-green-600 text-white text-sm font-medium py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
            >
              Add Item
            </button>
          </div>
        </div>

        {/* View Menu */}
        <div className="w-full flex justify-end">
          <Link
            to="/menu"
            onClick={() => window.scrollTo(0, 0)}
            className="text-green-700 font-bold hover:underline text-xl md:text-base"
          >
            View Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
