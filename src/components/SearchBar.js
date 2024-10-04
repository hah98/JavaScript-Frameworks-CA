import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter products based on title
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Navigate to the product page when an item is clicked
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm(""); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <ul className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                {product.title}
              </li>
            ))
          ) : (
            <li>No products found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
