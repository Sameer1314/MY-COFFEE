import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/main_logo.png";
import axios from "axios";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const host = import.meta.env.VITE_API_URL;

  // single submit handler that branches on isLogin
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // LOGIN
      axios
        .post(`${host}/login`, { email, password })
        .then((res) => {
          console.log(res);
          if (res.data.message === "Login successful") {
            localStorage.setItem("token", res.data.token);
            navigate("/home");
          }
        })
        .catch((err) => console.log(err));
    } else {
      // SIGNUP
      axios
        .post(`${host}/signup`, { name, email, password })
        .then((res) => {
          console.log(res);
          // 1) Show success feedback
          alert("Registration successful!");
          // 2) Switch the modal to the LOGIN form
          setIsLogin(true);
        })
        .catch((err) => {
          console.log(err);
          alert("Oops—something went wrong during signup.");
        });
    }
  };
  // Toggle the modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Switch between Login and Signup in the modal
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-200 bg-[url('/src/assets/bgcoffee.jpg')] bg-cover bg-center flex flex-col border-t-2 border-b-2 border-[#7f5539]">
      {/* Navbar / Header */}
      <header className="flex justify-between items-center p-4 bg-[#1F1412] border-b border-white">
        <div className="mb-4 flex items-center space-x-1">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm text-white font-bold"
          >
            Home
          </Link>
          <span className="text-sm text-white"> &gt; </span>
          <Link
            to="/signUP"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm text-white font-bold"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white w-28 h-28 flex items-center justify-center rounded-full shadow-md mb-4">
          {/*coffee cup icon or image */}
          <img src={logo} alt="Coffee Icon" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-white">
          Welcome to BREW & Co.
        </h1>
        <button
          onClick={handleOpenModal}
          className="bg-[#7f5539] border border-white text-white px-6 py-2 rounded-full hover:bg-[#1b1107] transition cursor-pointer"
        >
          Login or Sign Up
        </button>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-[#E5D3B3] w-[90%] max-w-sm rounded-md p-6 relative border-2 border-white text-black">
            {/* Close / Skip */}
            <div className="absolute top-4 right-4">
              <button
                onClick={handleCloseModal}
                className="text-green-700 font-semibold cursor-pointer"
              >
                SKIP
              </button>
            </div>

            {/* Conditional Title */}
            <h2 className="text-xl text-[#6c584c] font-bold mb-4">
              {isLogin ? "WELCOME" : "CREATE AN ACCOUNT"}
            </h2>

            {/* LOGIN or SIGNUP Form */}
            {isLogin ? (
              /* ---------- LOGIN FORM ---------- */
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email ID or Mobile Number"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-sm text-black font-semibold mb-2">
                  Don’t have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="text-green-600 font-semibold cursor-pointer"
                  >
                    SignUp
                  </span>
                </p>

                {/* Login Button */}
                <button
                  type = "submit"
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-2 w-full bg-[#7f5539] text-white font-semibold py-2 rounded hover:bg-[#1b1107] transition cursor-pointer"
                >
                  Login
                </button>

                {/* Extra Links */}
                <div className="mt-4 text-sm text-center text-gray-600">
                  Facing trouble logging in?{" "}
                  <span className="text-green-600 cursor-pointer">
                    Get Help
                  </span>
                  <br />
                  Already registered via WhatsApp?{" "}
                  <span className="text-green-600 cursor-pointer">
                    Continue here
                  </span>
                </div>
              </form>
            ) : (
              /* ---------- SIGNUP FORM ---------- */
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    USERNAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-sm text-black font-semibold mb-2">
                  Already have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="text-green-600 font-semibold cursor-pointer"
                  >
                    Sign in
                  </span>
                </p>

                {/* Sign Up Button */}
                <button className="mt-2 w-full bg-[#7f5539] text-white font-semibold py-2 rounded hover:bg-[#1b1107] transition cursor-pointer">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
