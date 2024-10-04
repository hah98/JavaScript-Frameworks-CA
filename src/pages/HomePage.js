import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/HomePage.css";
import heroImage from "../assets/images/reed-geiger-2e9FjnboAbI-unsplash.jpg";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!Array.isArray(products)) return <div>No products found.</div>;

  // Redirect to AllProductsPage when the button is clicked
  const handleShopNowClick = () => {
    navigate("/products");
  };

  return (
    <div>
      {/* Hero Section only for HomePage */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Hibos eCommerce Store!</h1>
          <p>Browse our exclusive products and shop with us!</p>
          <button className="shop-now-btn" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </section>
      <h1>Our Selections </h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image.url} alt={product.image.alt} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>

            {/* Add a Link component to navigate to the individual ProductPage */}
            <Link to={`/product/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
