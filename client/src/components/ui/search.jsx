import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy product data for demonstration (replace with your actual data)
const productsData = [
  {
    id: 1,
    name: "Java Chip Frappuccino",
  },
  {
    id: 2,
    name: "Choco-Chip Frappuccino",
  },
  {
    id: 3,
    name: "Caffe Americano",
  },
  {
    id: 4,
    name: "Cold Coffee",
  },
  {
    id: 5,
    name: "Cappuccino",
  },
  {
    id: 6,
    name: "Iced Caffè Latte",
  },
  {
    id: 7,
    name: "Latte",
  },
  {
    id: 8,
    name: "Arabica Beans",
  },
  {
    id: 9,
    name: "Blonde Roast",
  },
  {
    id: 10,
    name: "Espresso Roast",
  },
  {
    id: 11,
    name: "Italian Roast",
  },
  {
    id: 12,
    name: "Kenya Coffee",
  },
  {
    id: 13,
    name: "Sumantra Coffee",
  },
  {
    id: 14,
    name: "Cold Brew black",
  },
  {
    id: 15,
    name: "Caramel Macchiato",
  },
  {
    id: 16,
    name: "Vanilla Latte",
  },
  {
    id: 17,
    name: "Classic Hot Coffee",
  },
  {
    id: 18,
    name: "Caffè Mocha",
  },
  {
    id: 19,
    name: "Chocolate Cappuccino",
  },
  {
    id: 20,
    name: "Black Tea",
  },
  {
    id: 21,
    name: "Strawberry Milkshake",
  },
  {
    id: 22,
    name: "Green Tea Latte",
  },
  {
    id: 23,
    name: "Mango Frappuccino",
  },
  {
    id: 24,
    name: "Signature Hot Chocolate",
  },
  {
    id: 25,
    name: "Butter Croissant",
  },
  {
    id: 26,
    name: "Three Dips Chips",
  },
  {
    id: 27,
    name: "Chocolate Truffle Pastry",
  },
  {
    id: 28,
    name: "Almond Butter Cookie",
  },
  {
    id: 29,
    name: "Chocolate Cake",
  },
  {
    id: 30,
    name: "Blueberry Muffin",
  },
  {
    id: 31,
    name: "Double ChocoChip Cookie",
  },
  {
    id: 32,
    name: "Lemon Loaf Cake",
  },
  {
    id: 33,
    name: "Chilli Paneer Sandwich",
  },
  {
    id: 34,
    name: "Camping Mug",
  },
  {
    id: 35,
    name: "Hydro Flask",
  },
  {
    id: 36,
    name: "Coffee themed Bag",
  },
  {
    id: 37,
    name: "Barista metal badge",
  },
  {
    id: 38,
    name: "Coffee Queen Pen Set",
  },
  {
    id: 39,
    name: "Coffee Cup Keychain",
  },
  {
    id: 40,
    name: "classic salty cashew",
  },
  {
    id: 41,
    name: "Fudge Brownie",
  },
  {
    id: 42,
    name: "Coffee Choco Barks",
  },
];

const Input = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Update query and filter suggestions as the user types
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      setSuggestions([]);
    } else {
      const filtered = productsData.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  // Navigate to SearchProduct page with the current query
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/SearchProduct?query=${encodeURIComponent(query)}`);
    }
  };

  // Trigger search on pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      {/* Search Bar Container */}
      <div className="flex items-center bg-white border-2 border-[#7f5539] px-4 py-1 rounded-full shadow-sm transition-all w-70 focus-within:w-80">
        {/* Search Icon Button */}
        <button
          onClick={handleSearch}
          className="text-gray-500 hover:cursor-pointer focus:outline-none"
        >
          <svg
            className="w-7 h-7 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {/* Search Input */}
        <input
          type="search"
          name="search"
          placeholder="Looking for something?"
          autoComplete="off"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow px-2 py-2 text-sm outline-none bg-transparent"
        />
        {/* Clear Button (appears when there's text) */}
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setSuggestions([]);
            }}
            className="ml-2 text-gray-500 hover:text-black  focus:outline-none"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Suggestion Dropdown */}
      {query && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-200  mt-1 rounded-md shadow-md z-50 max-h-40 overflow-y-auto">
          {suggestions.map((product) => (
            <li
              key={product.id}
              onClick={() => {
                setQuery(product.name);
                setSuggestions([]);
                navigate(
                  `/SearchProduct?query=${encodeURIComponent(product.name)}`
                );
              }}
              className="px-4 py-2 hover:bg-[#e9ecef] cursor-pointer"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
