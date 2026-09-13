import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p className="tagline">
          Discover Your Perfect Green Companion
        </p>
        <Link to="/products" className="btn-primary">
          Get Started
        </Link>
      </div>
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={
            <>
              <Header />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Header />
              <CartItem />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

