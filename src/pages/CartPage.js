import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page-container">
      <h1>Your Cart</h1>
      {/* Display message if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image && item.image.url ? item.image.url : ""}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: {item.price} kr</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
