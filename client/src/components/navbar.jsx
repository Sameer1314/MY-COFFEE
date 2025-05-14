// Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "./ui/SignUPbutton";
import LogOutButton from "./ui/LogOutButton";
import logo from "../assets/main_logo.png";
import Input from "./ui/search";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("token")));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signUP");
  };

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  // Desktop & mobile link styles
  const desktopLink = ({ isActive }) =>
    isActive
      ? "text-gray-800 font-bold border-b-2 border-[#7f5539] pb-1"
      : "text-gray-800 hover:text-gray-600";
  const mobileLink = ({ isActive }) =>
    (isActive ? "bg-gray-100" : "hover:bg-gray-100") +
    " block px-3 py-2 rounded-md text-base font-semibold text-gray-800";

  return (
    <nav className="bg-[#d5bdaf] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block -ml-4 sm:-ml-6 lg:-ml-8"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-bold ml-[180px]">
            <NavLink
              to="/home"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={desktopLink}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => window.scrollTo(0, 0)}
              className={desktopLink}
            >
              Menu
            </NavLink>
            <NavLink
              to="/stores"
              onClick={() => window.scrollTo(0, 0)}
              className={desktopLink}
            >
              Stores
            </NavLink>
          </div>

          {/* Search + Auth (desktop) */}
          <div className="hidden md:flex items-center space-x-4 -mr-[100px] ">
            <Input />
            {isAuthenticated ? (
              <div
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleLogout();
                }}
              >
                <LogOutButton />
              </div>
            ) : (
              <Link to="/signUP" onClick={() => window.scrollTo(0, 0)}>
                <Button />
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7f5539]"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                /* X icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#d5bdaf] border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/home"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={mobileLink}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => window.scrollTo(0, 0)}
              className={mobileLink}
            >
              Menu
            </NavLink>
            <NavLink
              to="/stores"
              onClick={() => window.scrollTo(0, 0)}
              className={mobileLink}
            >
              Stores
            </NavLink>
            <div className="mt-2 px-3">
              <Input />
            </div>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleLogout();
                }}
                className="w-full text-center px-3 py-2 bg-[#7f5539] text-white rounded-md hover:bg-[#1b1107]"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/signUP"
                className="block w-full px-3 py-2 bg-[#7f5539] text-white rounded-md text-center hover:bg-[#1b1107]"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
