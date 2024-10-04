import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AllProductsPage.css";
import "../../src/index.css";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setProducts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, displaying error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(products)) {
    return <div>No products found.</div>;
  }

  return (
    <div className="products-container">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image.url} alt={product.image.alt} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Discounted Price: ${product.discountedPrice}</p>

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

export default AllProductsPage;
