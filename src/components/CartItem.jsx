import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
} from '../redux/CartSlice';
import Header from './Header';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const handleIncrement = (plantName) => {
    dispatch(incrementQuantity(plantName));
  };

  const handleDecrement = (plantName) => {
    dispatch(decrementQuantity(plantName));
  };

  const handleRemove = (plantName) => {
    dispatch(removeItem(plantName));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <button 
              className="btn-primary"
              onClick={handleContinueShopping}
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      
      <div className="container">
        <div className="section-heading">
          <h2>Shopping Cart</h2>
        </div>

        <div className="cart-layout">
          <div className="cart-items-section">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item-card">
                <div className="cart-item-image-container">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">\ each</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecrement(item.name)}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncrement(item.name)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  <p className="subtotal-label">Subtotal</p>
                  <p className="subtotal-value">
                    \
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.name)}
                  title="Remove from cart"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-heading">Order Summary</h3>
            
            <div className="summary-row">
              <span className="summary-label">Total Items:</span>
              <span className="summary-value">{totalItems}</span>
            </div>

            <div className="summary-row total-row">
              <span className="summary-label">Total Cost:</span>
              <span className="summary-value total-cost">
                \
              </span>
            </div>

            <div className="summary-actions">
              <button 
                className="btn-checkout"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button 
                className="btn-continue"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
