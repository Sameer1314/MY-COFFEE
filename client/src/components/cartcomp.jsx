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
    <div className="bg-[#f3f4ef] py-6 sm:py-8 lg:py-12 border-t-2 border-b-2 border-[#1b1107]">
      {/* Center and constrain width */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Your Cart ({totalQuantity} items)
        </h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                items-center 
                gap-4 
                bg-white 
                p-4 sm:p-6 
                rounded-md 
                shadow 
                border
              "
            >
              {/* Col 1: Image & Title */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-base sm:text-lg">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* Col 2: Quantity Controls */}
              <div className="flex justify-center items-center space-x-2 sm:space-x-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Col 3: Total */}
              <div className="flex justify-center items-center">
                <p className="font-bold text-base sm:text-lg">
                  ₹{item.totalPrice.toFixed(2)}
                </p>
              </div>

              {/* Col 4: Remove */}
              <div className="flex justify-end items-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal & Actions */}
        <div className="mt-8 pt-4 border-t border-[#1b1107]">
          <h2 className="text-xl sm:text-2xl font-bold text-right">
            Subtotal: ₹{totalAmount.toFixed(2)}
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row justify-end items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                dispatch(clearCart());
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded flex-1 sm:flex-none cursor-pointer"
            >
              Clear Cart
            </button>
            <Link
              to="/menu"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded flex-1 sm:flex-none text-center"
            >
              Add More
            </Link>
            <Link
              to="/checkout"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded flex-1 sm:flex-none text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
