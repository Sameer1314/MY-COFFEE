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
          className="bg-[#e6ccb2] shadow-md rounded-lg p-4 hover:scale-105 transition-transform border border-[#7f5539]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-65 object-cover rounded-md border-2 border-[#7f5539]"
          />
          <h3 className="text-[#6c584c] text-lg font-semibold mt-2">
            {item.name}
          </h3>
          <p className="text-[#6c584c] text-sm">{item.description}</p>
          <div className="mt-3 flex justify-between items-center border-t-2 border-black p-4 bg-[#e6ccb2]">
            <span className="text-lg font-bold">{item.displayPrice}</span>
            <button
              onClick={() => handleAddItem(item)}
              className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 cursor-pointer"
            >
              Add Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
