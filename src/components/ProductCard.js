import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          {product.inStock ? (
            <span className="in-stock">In Stock</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
