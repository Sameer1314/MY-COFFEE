// Checkout.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QRModal from "./ui/QRModal";
import PickupModal from "./ui/PickupModal";

export default function Checkout() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const [showQR, setShowQR] = useState(false);
  const [showPickup, setShowPickup] = useState(false);
  const [mode, setMode] = useState("delivery"); // "delivery" or "pickup"

  const shipping = 5;
  const discount = 10;
  const total = totalAmount + shipping - discount;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 border-t-2  border-[#7f5539]">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow rounded overflow-hidden">
        {/* Left - Shipping / Pickup */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode("delivery")}
              className={`flex-1 py-2 rounded border text-center font-medium ${
                mode === "delivery"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setMode("pickup")}
              className={`flex-1 py-2 rounded border text-center font-medium ${
                mode === "pickup"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Pick Up
            </button>
          </div>

          {mode === "delivery" ? (
            <form className="space-y-4">
              <input
                className="w-full border rounded px-4 py-2"
                placeholder="Full Name"
                type="text"
                required
              />
              <input
                className="w-full border rounded px-4 py-2"
                placeholder="Email Address"
                type="email"
                required
              />
              <input
                className="w-full border rounded px-4 py-2"
                placeholder="Phone Number"
                type="tel"
                required
              />
              <select className="w-full border rounded px-4 py-2" required>
                <option value="">Choose Country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
              </select>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  className="border rounded px-4 py-2"
                  placeholder="City"
                  type="text"
                  required
                />
                <input
                  className="border rounded px-4 py-2"
                  placeholder="State"
                  type="text"
                  required
                />
                <input
                  className="border rounded px-4 py-2"
                  placeholder="ZIP Code"
                  type="number"
                  required
                />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required />I have read and agree to the
                Terms and Conditions
              </label>
            </form>
          ) : (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowPickup(true)}
                className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded text-sm font-medium cursor-pointer"
              >
                Select Your Pickup Location
              </button>
            </div>
          )}
        </div>

        {/* Right - Summary */}
        <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Review your cart</h3>
            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        ₹{item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">₹{item.totalPrice.toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowQR(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium cursor-pointer"
            >
              Pay Now
            </button>
            <p className="text-xs text-center mt-2 text-gray-500">
              Secure Checkout • SSL Encrypted
            </p>
          </div>
        </div>
      </div>

      {showQR && <QRModal onClose={() => setShowQR(false)} />}
      {showPickup && <PickupModal onClose={() => setShowPickup(false)} />}
    </div>
  );
}
