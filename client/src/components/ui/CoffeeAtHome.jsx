// CoffeeAtHome.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

import arabicabeanImg from "../../assets/menupageimg/arabica-beans.jpg";
import blonderoastImg from "../../assets/menupageimg/blonde-roast.jpg";
import espressoImg from "../../assets/menupageimg/espresso.jpg";
import italianImg from "../../assets/menupageimg/italian.jpg";
import kenyaImg from "../../assets/menupageimg/kenya.jpg";
import sumantraImg from "../../assets/menupageimg/sumantra.jpg";

export default function CoffeeAtHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    {
      id: 8,
      name: "Arabica Beans",
      description: "Premium Arabica beans for a rich, smooth flavor.",
      priceNum: 600.0,
      displayPrice: "₹600.00",
      image: arabicabeanImg,
    },
    {
      id: 9,
      name: "Blonde Roast",
      description: "Bold French Roast for those who love deep, robust coffee.",
      priceNum: 2550.0,
      displayPrice: "₹2,550.00",
      image: blonderoastImg,
    },
    {
      id: 10,
      name: "Espresso Roast",
      description: "A rich, dark roast with a smooth, creamy finish.",
      priceNum: 1450.0,
      displayPrice: "₹1,450.00",
      image: espressoImg,
    },
    {
      id: 11,
      name: "Italian Roast",
      description:
        "A dark roast with a rich, smoky flavor and a hint of sweetness.",
      priceNum: 1250.0,
      displayPrice: "₹1,250.00",
      image: italianImg,
    },
    {
      id: 12,
      name: "Kenya Coffee",
      description: "Bold, bright flavors from African highlands.",
      priceNum: 1350.0,
      displayPrice: "₹1,350.00",
      image: kenyaImg,
    },
    {
      id: 13,
      name: "Sumantra Coffee",
      description: "A blend of Indonesian coffees with a rich, earthy flavor.",
      priceNum: 2850.0,
      displayPrice: "₹2,850.00",
      image: sumantraImg,
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
