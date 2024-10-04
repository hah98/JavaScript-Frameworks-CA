import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleReturnToShop = () => {
    navigate("/products"); // Redirect to the products page
  };

  return (
    <div className="checkout-success-page">
      <h1>Order Successful!</h1>
      <p>Your order has been placed successfully.</p>
      <button onClick={handleReturnToShop}>Return to Store</button>
    </div>
  );
};

export default CheckoutSuccessPage;
