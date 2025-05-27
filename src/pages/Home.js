import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sri Saravana Textiles</h1>
          <p>Quality fabrics and textile solutions for all your needs</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn">Our Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Premium Quality</h3>
              <p>Our textiles are made from the highest quality materials, ensuring durability and comfort.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Eco-Friendly</h3>
              <p>We use sustainable practices to minimize environmental impact while maintaining quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Customer Satisfaction</h3>
              <p>We pride ourselves on exceeding customer expectations with excellent service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-preview">
        <div className="container">
          <h2 className="section-title">Popular Products</h2>
          <div className="product-preview-grid">
            <div className="preview-item">
              <div className="preview-image"></div>
              <h3>Cotton Fabrics</h3>
              <p>High-quality cotton fabrics for everyday comfort</p>
            </div>
            <div className="preview-item">
              <div className="preview-image"></div>
              <h3>Silk Textiles</h3>
              <p>Luxurious silk textiles for special occasions</p>
            </div>
            <div className="preview-item">
              <div className="preview-image"></div>
              <h3>Home Textiles</h3>
              <p>Comfortable and stylish textiles for your home</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/products" className="btn">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
