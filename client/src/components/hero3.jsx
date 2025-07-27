// Hero3.jsx
import React from "react";
import coffeeheavenImg from "../assets/homepageimg/coffee-heaven.jpg";
import jeanImg from "../assets/homepageimg/jean-coffee.jpg";

const Hero3 = () => {
  return (
    <section className="w-full overflow-x-hidden bg-[#E5D3B3] py-16 border-t border-b border-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* First Block */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 overflow-visible rounded-lg">
            <img
              src={coffeeheavenImg}
              alt="Coffee Heaven"
              className="w-full max-w-sm transform rotate-0 md:-rotate-5 transition duration-300 border-2 border-white shadow-lg"
            />
            <div className="absolute inset-0 border-2 border-black -z-10 transform rotate-0 md:rotate-6"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#6c584c]">Coffee Heaven</h2>
            <p className="mt-4 text-[#6c584c]">
              Welcome to Coffee Heaven, a sanctuary where every cup is a
              celebration of exquisite aromas and bold flavors. Here, perfectly
              roasted beans are transformed into liquid art, inviting you to
              indulge in a sensory journey that transcends the ordinary. Whether
              you're kick-starting your day or savoring a quiet moment, let our
              coffee transport you to a realm of pure indulgence and
              inspiration.
            </p>
            <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-[#7f5539] text-white font-semibold rounded-md hover:bg-[#1b1107] transition cursor-pointer">
              View All →
            </button>
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 overflow-visible rounded-lg">
            <img
              src={jeanImg}
              alt="Jean's Coffee"
              className="w-full max-w-sm transform rotate-0 md:rotate-5 transition duration-300 border-2 border-white shadow-lg"
            />
            <div className="absolute inset-0 border-2 border-black -z-10 transform rotate-0 md:-rotate-6"></div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#6c584c]">Jean’s Coffee</h2>
            <p className="mt-4 text-[#6c584c]">
              Jean’s Coffee ... where tradition meets modern flair in every cup.
              Our artisan blends are carefully crafted to awaken your senses and
              deliver a bold, unforgettable flavor. Whether you're starting your
              day or taking a moment to unwind, let the rich aroma and smooth
              taste of our coffee inspire and energize you.
            </p>
            <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-[#7f5539] text-white font-semibold rounded-md hover:bg-[#1b1107] transition cursor-pointer">
              View All →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
