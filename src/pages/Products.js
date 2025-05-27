import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Cotton Fabric",
      category: "cotton",
      description: "High-quality cotton fabric ideal for everyday clothing and home textiles.",
      image: "/images/cotton-fabric.jpg",
      inStock: true
    },
    {
      id: 2,
      name: "Silk Saree Material",
      category: "silk",
      description: "Luxurious silk material perfect for traditional Indian sarees.",
      image: "/images/silk-saree.jpg",
      inStock: true
    },
    {
      id: 3,
      name: "Polyester Blend",
      category: "synthetic",
      description: "Durable polyester blend suitable for various applications.",
      image: "/images/polyester.jpg",
      inStock: false
    },
    {
      id: 4,
      name: "Organic Cotton",
      category: "cotton",
      description: "Eco-friendly organic cotton grown without harmful chemicals.",
      image: "/images/organic-cotton.jpg",
      inStock: true
    },
    {
      id: 5,
      name: "Designer Silk",
      category: "silk",
      description: "Premium silk fabric with intricate design patterns.",
      image: "/images/designer-silk.jpg",
      inStock: true
    },
    {
      id: 6,
      name: "Cotton-Polyester Blend",
      category: "synthetic",
      description: "Blend offering the comfort of cotton with durability of polyester.",
      image: "/images/cotton-poly.jpg",
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our wide range of high-quality textile products</p>
      </div>

      <div className="filter-container">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'cotton' ? 'active' : ''}`} 
          onClick={() => setActiveCategory('cotton')}
        >
          Cotton
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'silk' ? 'active' : ''}`} 
          onClick={() => setActiveCategory('silk')}
        >
          Silk
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'synthetic' ? 'active' : ''}`} 
          onClick={() => setActiveCategory('synthetic')}
        >
          Synthetic
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="product-info-section">
        <h2>Quality Assurance</h2>
        <p>
          All our products undergo rigorous quality checks to ensure they meet our high standards. 
          We source the finest raw materials and use state-of-the-art manufacturing processes to 
          deliver products that consistently exceed our customers' expectations.
        </p>
        <h2>Custom Orders</h2>
        <p>
          Need something specific? We offer custom textile manufacturing services tailored to your 
          requirements. Contact our team to discuss your needs and get a quote.
        </p>
      </div>
    </div>
  );
};

export default Products;
