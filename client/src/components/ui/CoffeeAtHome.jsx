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
