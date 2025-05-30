// Merchandise.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

import campmugImg from "../../assets/menupageimg/mug.jpg";
import hydroImg from "../../assets/menupageimg/hydroflask.jpg";
import bagImg from "../../assets/menupageimg/bag.jpg";
import keychainImg from "../../assets/menupageimg/keychain.jpg";
import penImg from "../../assets/menupageimg/pens.jpg";
import badgeImg from "../../assets/menupageimg/badge.jpg";

export default function Merchandise() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const MerchItems = [
    {
      id: 34,
      name: "Camping Mug",
      description: "A durable camping mug for your outdoor adventures.",
      priceNum: 3850.0,
      displayPrice: "₹3,850.00",
      image: campmugImg,
    },
    {
      id: 35,
      name: "Hydro Flask",
      description: "A stainless steel water bottle to keep your drinks cold.",
      priceNum: 4999.0,
      displayPrice: "₹4,999.00",
      image: hydroImg,
    },
    {
      id: 36,
      name: "Coffee Themed Bag",
      description: "A stylish bag with a coffee theme for coffee lovers.",
      priceNum: 3785.0,
      displayPrice: "₹3,785.00",
      image: bagImg,
    },
    {
      id: 37,
      name: "Barista Metal Badge",
      description: "A metal badge for baristas and coffee enthusiasts.",
      priceNum: 1499.0,
      displayPrice: "₹1,499.00",
      image: badgeImg,
    },
    {
      id: 38,
      name: "Coffee Queen Pen Set",
      description: "A set of pens for coffee lovers.",
      priceNum: 2585.0,
      displayPrice: "₹2,585.00",
      image: penImg,
    },
    {
      id: 39,
      name: "Coffee Cup Keychain",
      description: "A coffee cup keychain for coffee enthusiasts on the go.",
      priceNum: 999.0,
      displayPrice: "₹999.00",
      image: keychainImg,
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
      {MerchItems.map((item) => (
        <div
          key={item.id}
          className="bg-[#e6ccb2] shadow-md rounded-lg p-4 hover:scale-105 transition-transform border border-[#7f5539]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-65 object-cover rounded-md border-2 border-[#7f5539]"
          />
          <h3 className="text-[#6c584c] text-lg font-bold mt-2">{item.name}</h3>
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
