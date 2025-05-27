import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      
      <div className="footer-top">
        <div className="container">
          <div className="footer-logo-centered">
            <h2>Sri Saravana Textiles</h2>
            <p className="tagline">Crafting quality since 1995</p>
          </div>
        </div>
      </div>
      
      <div className="container footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Quality textiles for your needs. We pride ourselves on excellence and craftsmanship.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>60B5/10 Preanthar Kadu Saraswathi Theatre Road Komarapalayam</p>
          <p>638183, Namakkal</p>
          <p>Tamil Nadu, India</p>
          <p>Phone: +91-9842664316</p>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p> © {new Date().getFullYear()} Sri Saravana Textiles. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
