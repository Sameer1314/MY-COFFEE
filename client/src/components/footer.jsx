import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/main_logo.png";
import Card from "./ui/links";

function Footer() {
  return (
    <footer className="bg-[#ede0d4] text-gray-600 body-font">
      <div className="container px-0 py-20 mx-auto flex  w-full justify-stretch md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Left Logo / Text */}
        <div className="w-full md:w-64 flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
          <Link
            to="/home"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo} alt="Your Logo" className="w-30 h-30" />
            <span className="ml-3 text-5xl text-[#6c584c] font-extrabold">
              BREW & CO.
            </span>
          </Link>
          <p className="mt-2 px-4 text-center md:text-left md:pl-5 md:-mr-20 text-sm text-[#6c584c]">
            Brew & Co. is a leading coffee company in the United States & India,
            specializing in craft brewing and espresso.
          </p>
        </div>

        {/* Navigation Columns - Pushed More to the Right */}
        <div className="flex-grow flex flex-wrap md:pl-40 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
          {/* Column 1: About Us */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">
              ABOUT US
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Coffeehouse
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Our Company
                </a>
              </li>
            </nav>
          </div>

          {/* Column 2: Responsibility */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">
              RESPONSIBILITY
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Diversity
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Ethical Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Environmental Stewardship
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Learn More
                </a>
              </li>
            </nav>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Beverage Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6c584c] hover:text-gray-800">
                  Loyalty Program Terms and Conditions
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex w-full justify-between items-center px-5 py-4 border-t-2 border-white bg-[#ede0d4]">
        <p className="text-gray-500 text-sm">
          © 2025 BREW & CO.—
          <a
            href="https://x.com/samzzz122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
          >
            @samzzz
          </a>
        </p>
        <div>
          <Card />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
