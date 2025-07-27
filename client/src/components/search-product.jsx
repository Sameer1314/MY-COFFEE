import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // ← make sure this path matches your project
import nosearch from "../assets/noSearchFound.svg";
import { productsData } from "../data/productsData";

export default function SearchProduct() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Filter products whenever query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
    } else {
      const filtered = productsData.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const handleChange = (e) => setQuery(e.target.value);
  const handleClear = () => setQuery("");

  const handleAddItem = (item) => {
    // normalize price to number if needed, e.g. parseFloat(item.price.replace(/[₹,]/g,""))
    const priceNum =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[₹,]/g, ""))
        : item.price;
    dispatch(
      addToCart({
        id: item.id,
        title: item.name,
        price: priceNum,
        image: item.image,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="w-full min-h-screen bg-[#E5D3B3] border-2 border-[#7f5539]">
      {/* Header / Breadcrumb */}
      <header className="p-4 bg-white border-b-2 border-[#7f5539] shadow-md">
        <div className="mb-1 flex items-center space-x-1">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm text-gray-500 font-bold"
          >
            Home
          </Link>
          <span className="text-sm text-gray-500"> &gt; </span>
          <Link to="/search" className="text-sm text-gray-500 font-bold">
            Search
          </Link>
        </div>
      </header>

      {/* Local Search Bar */}
      <div className="max-w-6xl mx-auto mt-4 px-4">
        <div className="flex items-center bg-white border-2 border-[#7f5539] px-3 py-2 rounded-full shadow-sm w-full">
          <svg
            className="w-5 h-5 mr-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search here"
            value={query}
            onChange={handleChange}
            className="flex-grow text-sm outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={handleClear}
              className="ml-2 text-gray-500 hover:text-black focus:outline-none cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
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
      </div>

      {/* Results / Empty State */}
      <div className="max-w-6xl mx-auto mt-8 px-4 pb-12">
        {!query && (
          <div className="mx-auto text-center p-6 bg-[#E5D3B3] rounded-md max-w-md">
            <p className="font-semibold text-red-500 mb-2">
              This one's a blank.
            </p>
            <p className="text-sm text-gray-700">
              No keyword entered. Please type something.
            </p>
            <img src={nosearch} alt="No search" className="mx-auto w-80 mt-3" />
          </div>
        )}

        {query && results.length === 0 && (
          <div className="mx-auto text-center p-6 bg-[#E5D3B3] rounded-md max-w-md">
            <p className="font-semibold text-red-500 mb-2">
              This one's a blank.
            </p>
            <p className="text-sm text-gray-700">
              We can't find a match for "{query}".
            </p>
            <img src={nosearch} alt="Not found" className="mx-auto w-80 mt-3" />
          </div>
        )}

        {query && results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-between bg-[#e6ccb2] shadow-md rounded-lg p-3 sm:p-4 hover:scale-105 transition-transform border border-[#7f5539] md:min-h-[450px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-60 md:h-65 object-cover rounded-md border-2 border-[#7f5539]"
                />
                <h2 className="text-[#6c584c] text-lg font-bold mt-2">
                  {item.name}
                </h2>
                <div className="mt-2 sm:mt-3 flex justify-between items-center border-t-2 border-black pt-2 sm:pt-3">
                  <span className="text-base sm:text-lg font-bold">
                    {item.price}
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
        )}
      </div>
    </div>
  );
}
