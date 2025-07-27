// Cart.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

export default function Cart() {
  // Automatically scroll to top when Cart mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f3f4ef] p-4 sm:p-6 lg:p-8 border-t border-b border-[#1b1107]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1b1107] mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-[#1b1107] mb-6 text-center px-4">
          It looks like you haven't added any items to your cart yet.
        </p>
        <Link
          to="/menu"
          className="bg-[#7f5539] border border-[#000000] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#1b1107] transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f3f4ef] py-4 sm:py-8 lg:py-12 border-t-2 border-b-2 border-[#1b1107]">
      {/* Center and constrain width */}
      <div className="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Your Cart ({totalQuantity} items)
        </h1>

        <div className="space-y-3 sm:space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="
      grid 
      grid-cols-3 grid-rows-2
      sm:grid-cols-2 sm:grid-rows-1 
      md:grid-cols-3 
      lg:grid-cols-4 
      items-center 
      gap-3 sm:gap-4 
      bg-white 
      p-2 sm:p-6 
      rounded-md 
      shadow 
      border
    "
            >
              {/* 1) Image & Title */}
              <div className="flex items-center space-x-2 sm:space-x-4 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-sm sm:text-lg">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-base">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* 2) Qty controls (mobile: top right) */}
              <div className="flex justify-center items-center space-x-1.5 sm:space-x-3 col-start-3 row-start-1 sm:col-auto sm:row-auto">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-1.5 py-0.5 sm:px-3 sm:py-1.5 bg-gray-200 rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span className="px-1 text-sm sm:text-base">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-1.5 py-0.5 sm:px-3 sm:py-1.5 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* 3) Price (mobile: under qty) */}
              <div className="flex justify-center items-center col-start-3 row-start-2 sm:col-auto sm:row-auto">
                <p className="font-bold text-sm sm:text-lg">
                  ₹{item.totalPrice.toFixed(2)}
                </p>
              </div>

              {/* 4) Remove (mobile: full‑height right) */}
              <div className="flex justify-end items-center col-start-3 row-span-2 sm:col-auto sm:row-auto">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-2 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal & Actions */}
        <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#1b1107]">
          <h2 className="text-lg sm:text-2xl font-bold text-right">
            Subtotal: ₹{totalAmount.toFixed(2)}
          </h2>
          <div className="mt-3 sm:mt-4 flex flex-row justify-end items-center space-x-2">
            <button
              onClick={() => {
                dispatch(clearCart());
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded text-sm sm:text-base cursor-pointer"
            >
              Clear Cart
            </button>
            <Link
              to="/menu"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded text-center text-sm sm:text-base"
            >
              Add More
            </Link>
            <Link
              to="/checkout"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded text-center text-sm sm:text-base"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
