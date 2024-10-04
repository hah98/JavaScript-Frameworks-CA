import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import SearchIcon from "../components/SearchIcon";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-and-hamburger">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="icons-container">
        <SearchIcon />
        <CartIcon />
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </div>
    </header>
  );
};

export default Header;
