import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutSuccessPage.css";

const CheckoutSuccessPage = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleReturnToShop = () => {
    navigate("/products"); // Redirect to the products page
  };

  return (
    <div className="checkout-success-page">
      <div className="success-content">
        <h1>Your Order Was Successful</h1>
        <p>Your order has been placed successfully.</p>
        <p>
          Thank you for shopping with us! You will receive a confirmation email
          shortly.
        </p>
        <button onClick={handleReturnToShop}>Return to Store</button>
        <p>
          Or you can go back to the <a href="/">Homepage</a>.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
