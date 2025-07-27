// Bestseller.jsx f3f4ef
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice"; // Adjust path as needed

import javachipImg from "../../assets/homepageimg/javachip.jpg";
import doublechocoImg from "../../assets/menupageimg/doublechoco.jpg";
import cafeamericanoImg from "../../assets/menupageimg/Café americano.jpg";
import coldcoffeeImg from "../../assets/menupageimg/Cold-Coffee.jpg";
import cappucinnoImg from "../../assets/menupageimg/cappu.jpg";
import icedlatteImg from "../../assets/menupageimg/icedlatte.jpg";
import latteImg from "../../assets/menupageimg/latte.jpg";

export default function Bestseller() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation

  // Numeric prices are preferred for calculations. Use displayPrice for formatted output.
  const bestsellerItems = [
    {
      id: 1,
      name: "Java Chip Frappuccino",
      description:
        "Mocha sauce and Frappuccino® chips blended with coffee and ice.",
      price: 298.0,
      displayPrice: "₹298.00",
      image: javachipImg,
    },
    {
      id: 2,
      name: "Choco-Chip Frappuccino",
      description: "Rich mocha-flavored sauce with chocolaty chips.",
      price: 441.0,
      displayPrice: "₹441.00",
      image: doublechocoImg,
    },
    {
      id: 3,
      name: "Caffe Americano",
      description:
        "Rich in flavour, full-bodied espresso with hot water in true...",
      price: 299.25,
      displayPrice: "₹299.25",
      image: cafeamericanoImg,
    },
    {
      id: 4,
      name: "Cold Coffee",
      description:
        "Our signature rich in flavour espresso blended with delicate...",
      price: 299.25,
      displayPrice: "₹299.25",
      image: coldcoffeeImg,
    },
    {
      id: 5,
      name: "Cappuccino",
      description:
        "Dark, Rich in flavour espresso lies in wait under a smoothed...",
      price: 357.25,
      displayPrice: "₹357.25",
      image: cappucinnoImg,
    },
    {
      id: 6,
      name: "Iced Caffè Latte",
      description: "Our dark, Rich in flavour espresso is combined with milk",
      price: 299.25,
      displayPrice: "₹299.25",
      image: icedlatteImg,
    },
    {
      id: 7,
      name: "Latte",
      description:
        "Our dark, Rich in flavour espresso balanced with steamed mil....",
      price: 299.25,
      displayPrice: "₹299.25",
      image: latteImg,
    },
  ];

  // Handler to add item and navigate to the Cart page.
  const handleAddItem = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.name,
        price: item.price,
        image: item.image,
      })
    );
    navigate("/cart"); // Immediately navigate to the cart page
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {bestsellerItems.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col justify-between bg-[#e6ccb2] shadow-md rounded-lg p-3 sm:p-4 hover:scale-105 transition-transform border border-[#7f5539] md:min-h-[450px]"
        >
          <img
            src={item.image || "https://via.placeholder.com/200"}
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
