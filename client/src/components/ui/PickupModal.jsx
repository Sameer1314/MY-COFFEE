// PickupModal.jsx
import React from "react";

const locations = [
  { name: "High Street Phoenix", address: "Lower Parel, Mumbai" },
  { name: "Phoenix Marketcity", address: "Kurla West, Near LBS Road, Mumbai" },
  { name: "R City Mall", address: "Ghatkopar East, LBS Marg, Mumbai" },
  { name: "Bandra Kurla Complex", address: "Bandra East, Mumbai" },
  { name: "Colaba Causeway", address: "Colaba, Mumbai" },

  { name: "Viviana Mall", address: "Ghodbunder Road, Thane" },
  { name: "Korum Mall", address: "Thane West, Thane" },

  { name: "Select Citywalk", address: "Saket, New Delhi" },
  { name: "Phoenix Marketcity", address: "Viman Nagar, Pune" },
];

export default function PickupModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded relative shadow-md max-h-120 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4 ">
          Select Your Pickup Location
        </h2>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter ZIP"
            className="border px-3 py-2 w-full rounded"
          />
          <button className="bg-black text-white px-4 py-2 rounded">→</button>
        </div>

        <label className="flex items-center gap-2 text-sm mb-4">
          <input type="checkbox" />
          Include warehouse
        </label>

        <ul className="space-y-3">
          {locations.map((loc, idx) => (
            <li
              key={idx}
              className="border-t pt-2 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{loc.name}</p>
                <p className="text-sm text-gray-600">{loc.address}</p>
              </div>
              <button className="text-lg text-gray-500 hover:text-black">
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
