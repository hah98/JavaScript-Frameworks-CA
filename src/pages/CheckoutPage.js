import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Use for navigation
import "../styles/CheckoutPage.css"; // Add styles if needed

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext); // Get cart items and clearCart function
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleOrderSuccess = () => {
    clearCart(); // Clear the cart after successful order
    navigate("/checkout-success"); // Redirect to the success page
  };

  return (
    <div className="checkout-page-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart.</p>
      ) : (
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img
                src={item.image && item.image.url ? item.image.url : ""}
                alt={item.title}
                className="checkout-item-image"
              />
              <div className="checkout-item-details">
                <h3>{item.title}</h3>
                <p>Price: {item.price} kr</p>
              </div>
            </div>
          ))}
          <h2>
            Total: {cartItems.reduce((total, item) => total + item.price, 0)} kr
          </h2>
          <button className="confirm-order-btn" onClick={handleOrderSuccess}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
