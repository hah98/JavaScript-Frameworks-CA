import React from "react";
import CartIcon from "./CartIcon"; // Import the CartIcon component

const Header = () => {
  return (
    <header>
      <nav>
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
        <CartIcon /> {/* This will be your cart icon */}
      </nav>
    </header>
  );
};

export default Header;
