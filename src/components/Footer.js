import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Sri Saravana Textiles</h3>
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
          <p> @ Sri Saravana Textiles. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
