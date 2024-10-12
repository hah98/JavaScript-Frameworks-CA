import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import SearchIcon from "../components/SearchIcon";
import SearchBar from "../components/SearchBar"; // Assuming you have a SearchBar component
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false); // New state for search bar
  const [products, setProducts] = useState([]); // State to hold products for search functionality

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle search bar visibility
  const toggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  // Fetch products for search functionality
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        <SearchIcon toggleSearch={toggleSearch} />{" "}
        {/* Pass toggleSearch here */}
        <CartIcon />
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </div>

      {/* Conditionally render SearchBar */}
      {showSearchBar && <SearchBar products={products} />}
    </header>
  );
};

export default Header;
