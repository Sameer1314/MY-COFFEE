// Food.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

import buttercroImg from "../../assets/menupageimg/butter-croissant.jpg";
import tdchipsImg from "../../assets/menupageimg/tdchips.jpg";
import ctpastryImg from "../../assets/menupageimg/ctpastry.jpg";
import almonddImg from "../../assets/menupageimg/almondb-cookie.jpg";
import ccakeImg from "../../assets/menupageimg/ccake.jpg";
import bmuffinImg from "../../assets/menupageimg/bmuffin.jpg";
import dcchipcookieImg from "../../assets/menupageimg/dchocochip-cookie.jpg";
import lloafImg from "../../assets/menupageimg/lloafcake.jpg";
import sandwichImg from "../../assets/menupageimg/sandwich.jpg";

export default function Food() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const foodItems = [
    {
      id: 25,
      name: "Butter Croissant",
      description:
        "A flaky and buttery French style pastry served with butter.",
      priceNum: 299.0,
      displayPrice: "₹299.00",
      image: buttercroImg,
    },
    {
      id: 26,
      name: "Three Dips Chips",
      description:
        "Crispy Tortilla Chips loaded with peri peri cheesy dip, spic...",
      priceNum: 220.0,
      displayPrice: "₹220.00",
      image: tdchipsImg,
    },
    {
      id: 27,
      name: "Chocolate Truffle Pastry",
      description:
        "An absolute classic! A moist chocolate cake layered with whi....",
      priceNum: 390.0,
      displayPrice: "₹390.00",
      image: ctpastryImg,
    },
    {
      id: 28,
      name: "Almond Butter Cookie",
      description:
        "A buttery cookie with a combination of crunchy almond and bu...",
      priceNum: 300.0,
      displayPrice: "₹300.00",
      image: almonddImg,
    },
    {
      id: 29,
      name: "Chocolate Cake",
      description: "Decadent, moist chocolate cake perfect for dessert.",
      priceNum: 390.0,
      displayPrice: "₹390.00",
      image: ccakeImg,
    },
    {
      id: 30,
      name: "Blueberry Muffin",
      description:
        "Buttery vanilla cake with berries dusted with granulated sug...",
      priceNum: 352.0,
      displayPrice: "₹352.00",
      image: bmuffinImg,
    },
    {
      id: 31,
      name: "Double ChocoChip Cookie",
      description:
        "A soft & chewy chocolate cookie topped with chocolate chips ...",
      priceNum: 320.0,
      displayPrice: "₹320.00",
      image: dcchipcookieImg,
    },
    {
      id: 32,
      name: "Lemon Loaf Cake",
      description:
        "English tea cake with rich taste of butter and citrusy lemon....",
      priceNum: 480.0,
      displayPrice: "₹480.00",
      image: lloafImg,
    },
    {
      id: 33,
      name: "Chilli Paneer Sandwich",
      description:
        "A tangy chilli paneer filling with chopped spinach tucked be...",
      priceNum: 308.0,
      displayPrice: "₹308.00",
      image: sandwichImg,
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
      {foodItems.map((item) => (
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
