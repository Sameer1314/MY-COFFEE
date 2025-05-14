import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import Hero2 from "../components/hero2";
import Hero3 from "../components/hero3";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Hero2 />
      <Hero3 />
      <Footer />
    </div>
  );
}

export default HomePage;
