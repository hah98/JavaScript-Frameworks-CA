import React from "react";
import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      {" "}
      <i className="fa-solid fa-cart-shopping"></i>
    </Link>
  );
};

export default CartIcon;
