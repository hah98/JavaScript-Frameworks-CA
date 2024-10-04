import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`Fetching product with ID: ${id}`);

      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        console.log(data.data);
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className="product-container">
      {/* Left column for product image */}
      <div className="product-image">
        <img src={product.image.url} alt={product.image.alt} />
      </div>

      {/* Right column for product details */}
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="price">
          {product.discountedPrice} kr
          <span className="original-price">{product.price} kr</span>
        </p>
        <p className="description">{product.description}</p>

        {/* Reviews */}
        <div className="reviews">
          <span className="rating">⭐ {product.rating}</span>
          <p>{product.reviews.length} Reviews</p>
        </div>

        {/* Size options (example) */}
        <div className="size-options">
          <span>34</span>
          <span>36</span>
          <span>38</span>
          <span>40</span>
        </div>

        {/* Add to cart button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
