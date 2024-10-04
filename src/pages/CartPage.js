import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { CartContext } from "../context/CartContext";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate for redirect

  const handleBuyNow = () => {
    // Redirect to CheckoutPage
    navigate("/checkout");
  };

  return (
    <div className="cart-page-container">
      <h1>Your Cart</h1>
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
      {/* Total Price and Buy Now Section */}
      <div className="cart-total">
        <h2>
          Total: {cartItems.reduce((total, item) => total + item.price, 0)} kr
        </h2>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
