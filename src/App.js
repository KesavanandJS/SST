import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';
import './responsive.css'; // Import responsive styles
import './animations.css'; // Import animations
import './premium-theme.css'; // Import premium theme
// Choose one of these themes to import:
// import './alternative-theme.css'; // Modern luxury theme
// import './minimalist-theme.css'; // Clean minimalist theme
// import './textured-theme.css'; // Organic textured theme

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
