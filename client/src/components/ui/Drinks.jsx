// Drinks.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

import coldbrewImg from "../../assets/menupageimg/coldbrew.jpg";
import cmacchitoImg from "../../assets/menupageimg/c-macchito.jpg";
import vlatteImg from "../../assets/menupageimg/vanillaLatte.jpg";
import chotcoffeeImg from "../../assets/menupageimg/chotcoffee.jpg";
import cmochaImg from "../../assets/menupageimg/cmocha.jpg";
import choccapImg from "../../assets/menupageimg/choc-cap.jpg";
import blackteaImg from "../../assets/menupageimg/blacktea.jpg";
import greenlatteImg from "../../assets/menupageimg/greenlatte.jpg";
import smilkshakeImg from "../../assets/menupageimg/smilkshake.jpg";
import mfapImg from "../../assets/menupageimg/mfap.jpg";
import shotchocImg from "../../assets/menupageimg/shotchoc.jpg";

export default function Drinks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const drinksItems = [
    {
      id: 14,
      name: "Cold Brew Black",
      description:
        "Starbucks coffee is freshly ground and then steeped for 48 h...",
      priceNum: 350.0,
      displayPrice: "₹350.00",
      image: coldbrewImg,
    },
    {
      id: 15,
      name: "Caramel Macchiato",
      description: "A perfect blend of steamed milk, espresso, and caramel...",
      priceNum: 399.0,
      displayPrice: "₹399.00",
      image: cmacchitoImg,
    },
    {
      id: 16,
      name: "Vanilla Latte",
      description: "Our dark, Rich in flavour espresso balanced with vanilla..",
      priceNum: 375.0,
      displayPrice: "₹375.00",
      image: vlatteImg,
    },
    {
      id: 17,
      name: "Classic Hot Coffee",
      description:
        "Savour our premium coffee made with top 3% Arabica beans in ....",
      priceNum: 175.0,
      displayPrice: "₹175.00",
      image: chotcoffeeImg,
    },
    {
      id: 18,
      name: "Caffè Mocha",
      description: "We combine our rich in flavour, full-bodied espresso...",
      priceNum: 275.0,
      displayPrice: "₹275.00",
      image: cmochaImg,
    },
    {
      id: 19,
      name: "Chocolate Cappuccino",
      description: "Dark, Rich in flavour espresso and bitter...",
      priceNum: 345.0,
      displayPrice: "₹345.00",
      image: choccapImg,
    },
    {
      id: 20,
      name: "Black Tea",
      description: "A classic black tea with a rich and robust flavor.",
      priceNum: 375.0,
      displayPrice: "₹375.00",
      image: blackteaImg,
    },
    {
      id: 21,
      name: "Strawberry Milkshake",
      description: "A delicious milkshake for those with a sweet...",
      priceNum: 340.0,
      displayPrice: "₹340.00",
      image: smilkshakeImg,
    },
    {
      id: 22,
      name: "Green Tea Latte",
      description: "A blend of matcha green tea and steamed milk....",
      priceNum: 315.0,
      displayPrice: "₹315.00",
      image: greenlatteImg,
    },
    {
      id: 23,
      name: "Mango Frappuccino",
      description: "A refreshing blend of mango puree and milk...",
      priceNum: 215.0,
      displayPrice: "₹215.00",
      image: mfapImg,
    },
    {
      id: 24,
      name: "Signature Hot Chocolate",
      description:
        "Four Cocoas and fresh steamed milk with whipped vanilla topp.",
      priceNum: 305.0,
      displayPrice: "₹305.00",
      image: shotchocImg,
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
      {drinksItems.map((item) => (
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
