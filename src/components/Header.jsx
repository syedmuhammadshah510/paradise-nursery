import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/CartSlice';
import './Header.css';

function Header() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <span className="logo-icon">🌿</span>
            Paradise Nursery
          </Link>
        </div>
        
        <nav className="navbar-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Plants
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
            <span className="cart-text">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
