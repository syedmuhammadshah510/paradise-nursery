import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectIsItemInCart } from '../redux/CartSlice';
import Header from './Header';
import './ProductList.css';

const plantsData = [
  {
    category: 'Succulents',
    plants: [
      {
        name: 'Echeveria Elegans',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400',
      },
      {
        name: 'Jade Plant',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
      },
    ],
  },
  {
    category: 'Air Purifying',
    plants: [
      {
        name: 'Snake Plant',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1593482892540-73c2e828e5b0?w=400',
      },
      {
        name: 'Spider Plant',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1572688484439-17c3ea53d8e8?w=400',
      },
      {
        name: 'Peace Lily',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
      },
    ],
  },
  {
    category: 'Aromatic',
    plants: [
      {
        name: 'Lavender',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1611251135414-9b2f45d8d7f4?w=400',
      },
      {
        name: 'Jasmine',
        price: 26.99,
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e60d5da?w=400',
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      price: plant.price,
      image: plant.image,
    }));
  };

  return (
    <div className="product-list-page">
      <Header />
      
      <div className="container">
        <div className="section-heading">
          <h2>Our Plant Collection</h2>
        </div>

        {plantsData.map((categoryData) => (
          <div key={categoryData.category} className="category-section">
            <h3 className="category-heading">{categoryData.category}</h3>
            
            <div className="plants-grid">
              {categoryData.plants.map((plant) => {
                const inCart = isInCart(plant.name);
                
                return (
                  <div key={plant.name} className="plant-card">
                    <div className="plant-image-container">
                      <img 
                        src={plant.image} 
                        alt={plant.name}
                        className="plant-image"
                      />
                    </div>
                    
                    <div className="plant-info">
                      <h4 className="plant-name">{plant.name}</h4>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      
                      <button
                        className={`btn-add-to-cart ${inCart ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={inCart}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

