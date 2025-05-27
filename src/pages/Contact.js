import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for inquiries, orders, or support</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Textile Road, Coimbatore</p>
            <p>Tamil Nadu, India - 641001</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91-98765-43210</p>
            <p>+91-98765-43211</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@srisaravanatextiles.com</p>
            <p>support@srisaravanatextiles.com</p>
          </div>
          <div className="info-item">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          {submitStatus === 'success' && (
            <div className="success-message">
              Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>Google Maps Integration Here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
