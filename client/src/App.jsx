import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import Menu from "./pages/menu";
import Stores from "./pages/stores";
import SignUpPage from "./pages/signUP";
import CartPage from "./pages/Cart";
import SearchPage from "./pages/SearchProduct";
import CheckOut from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/signUP" element={<SignUpPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/SearchProduct" element={<SearchPage />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
