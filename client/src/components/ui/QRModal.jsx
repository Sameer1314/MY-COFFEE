// QRModal.jsx
import React from "react";
import QRcode from "../../assets/QR1.jpg"; // Adjust the path as necessary

export default function QRModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Scan to Pay</h2>
        <img
          src={QRcode} // Replace this with your actual QR code image path
          alt="QR Code"
          className="mx-auto w-48 h-48"
        />
      </div>
    </div>
  );
}
