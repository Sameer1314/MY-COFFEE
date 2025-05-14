import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Cart from "../components/cartcomp";
import Footer from "../components/footer";

function CartPage() {
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}
export default CartPage;
