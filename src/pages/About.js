import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Sri Saravana Textiles</h1>
        <p>Learn more about our journey, vision, and commitment to quality.</p>
      </section>

      <section className="about-content">
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 1995 in the heart of Tamil Nadu's textile district, Sri Saravana Textiles has grown from a small 
            family-owned business to one of the region's most respected textile manufacturers. Our journey has been defined 
            by a relentless pursuit of quality, innovation, and customer satisfaction.
          </p>
          <p>
            With over 25 years of experience in the industry, we have developed expertise in producing a wide range of textile 
            products, from traditional cotton fabrics to modern blended materials. Our production facilities combine time-honored 
            craftsmanship with cutting-edge technology to create textiles of exceptional quality.
          </p>
        </div>

        <div className="about-mission">
          <div className="mission-vision">
            <h2>Our Mission</h2>
            <p>
              To create exceptional textile products that blend tradition with innovation, while maintaining 
              the highest standards of quality, sustainability, and ethical business practices.
            </p>
          </div>
          <div className="mission-vision">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in sustainable textile production, known for our commitment to excellence, 
              community development, and environmental stewardship.
            </p>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical standards.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We continuously seek new ways to improve our products and processes.</p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible manufacturing practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Raj Kumar</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Priya Sundaram</h3>
            <p>Operations Director</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Vijay Anand</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
