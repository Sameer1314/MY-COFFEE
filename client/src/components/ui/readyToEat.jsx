// ReadyToEat.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

import cashewImg from "../../assets/menupageimg/cashews.jpg";
import fudgeImg from "../../assets/menupageimg/fudge.jpg";
import coffeechocoImg from "../../assets/menupageimg/coffee-choco-barks.jpg";

export default function ReadyToEat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    {
      id: 40,
      name: "Classic Salty Cashew",
      description: "A classic salty cashew for a crunchy snack.",
      priceNum: 600.0,
      displayPrice: "₹600.00",
      image: cashewImg,
    },
    {
      id: 41,
      name: "Fudge Brownie",
      description: "A rich and fudgy brownie for a sweet treat.",
      priceNum: 550.0,
      displayPrice: "₹550.00",
      image: fudgeImg,
    },
    {
      id: 42,
      name: "Coffee Choco Barks",
      description: "A delightful blend of coffee and chocolate.",
      priceNum: 450.0,
      displayPrice: "₹450.00",
      image: coffeechocoImg,
    },
  ];

  const handleAddItem = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.name,
        price: item.priceNum,
        image: item.image,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col justify-between bg-[#e6ccb2] shadow-md rounded-lg p-3 sm:p-4 hover:scale-105 transition-transform border border-[#7f5539] md:min-h-[450px]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 sm:h-60 md:h-65 object-cover rounded-md border-2 border-[#7f5539]"
          />
          <div className="mt-2 flex flex-col flex-grow">
            <h3 className="text-[#6c584c] text-base sm:text-lg font-bold">
              {item.name}
            </h3>
            <p className="text-sm text-[#6c584c] overflow-hidden h-[3.6rem] leading-tight">
              {item.description}
            </p>
          </div>

          <div className="mt-2 sm:mt-3 flex justify-between items-center border-t-2 border-black pt-2 sm:pt-3">
            <span className="text-base sm:text-lg font-bold">
              {item.displayPrice}
            </span>
            <button
              onClick={() => handleAddItem(item)}
              className="bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md hover:bg-green-700 cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
