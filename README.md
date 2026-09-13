# Paradise Nursery - E-Commerce Plant Shop

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react) ![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux) ![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite)

A modern, responsive e-commerce web application for purchasing houseplants online. Built with React 19, Redux Toolkit, and styled with a beautiful teal-and-green aesthetic inspired by premium plant shops.

## Live Demo

**Visit:** https://syedmuhammadshah510.github.io/paradise-nursery/

## Description

Paradise Nursery is a full-featured e-commerce platform designed to bring the beauty of houseplants to your home. The application offers a curated selection of 7 premium houseplants across three categories: Succulents, Air Purifying, and Aromatic plants.

### Key Features:

- Shopping Cart System with real-time updates
- Redux state management for seamless cart operations
- Responsive design optimized for all devices
- Modern UI with smooth animations and transitions
- HashRouter for GitHub Pages compatibility
- Smart button states (disabled when item in cart)
- Category-based product organization
- Full quantity management (add/remove/update)

## Tech Stack

- React 19.1.0 - UI library
- Redux Toolkit 2.12.0 - State management
- React Router DOM 7.18.3 - Client-side routing
- Vite 8.3.0 - Build tool
- CSS3 - Custom properties for theming
- Google Fonts - Poppins and Open Sans

## Getting Started

### Installation

1. Clone the repository:
   git clone https://github.com/syedmuhammadshah510/paradise-nursery.git
   cd paradise-nursery

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

4. Open browser at: http://localhost:5173

### Build for Production

npm run build

### Deploy to GitHub Pages

npm run deploy

## Project Structure

paradise-nursery/
- src/components/ - React components
- src/redux/ - Redux store and slices
- src/App.jsx - Main app with routing
- src/App.css - Global styles and design system

## Features in Detail

### Shopping Cart
- Add plants to cart (quantity: 1)
- Increase/decrease quantities
- Remove items completely
- Real-time total calculation
- Empty cart friendly message

### Product Catalog
- 7 houseplants with images
- 3 categories (Succulents, Air Purifying, Aromatic)
- Price display and product details
- Add to Cart buttons with smart states

### Responsive Design
- Desktop: 3-4 column grid
- Tablet: 2-3 column grid
- Mobile: 1-2 column grid

## Redux Architecture

### Actions:
- addItem - Add plant to cart
- removeItem - Remove from cart
- updateQuantity - Set quantity
- incrementQuantity - Increase by 1
- decrementQuantity - Decrease by 1

### Selectors:
- selectCartItems - All cart items
- selectTotalItems - Total quantity
- selectTotalCost - Total price
- selectIsItemInCart - Check item exists

## Design System

### Colors:
- Primary: Teal (#14b8ae)
- Accent: Olive Green (#8bc34a)
- Background: White (#ffffff)
- Text: Dark Gray (#333333)

### Typography:
- Headings: Poppins
- Body: Open Sans

## Product List

### Succulents
- Echeveria Elegans - Dollar 15.99
- Jade Plant - Dollar 22.99

### Air Purifying
- Snake Plant - Dollar 18.99
- Spider Plant - Dollar 16.99
- Peace Lily - Dollar 24.99

### Aromatic
- Lavender - Dollar 19.99
- Jasmine - Dollar 26.99

## Future Enhancements

- User authentication
- Product search and filtering
- Wishlist functionality
- Product reviews
- Payment gateway integration
- Order tracking
- Admin dashboard

## Developer

**Syed Muhammad Shah**

- GitHub: @syedmuhammadshah510
- Project: https://github.com/syedmuhammadshah510/paradise-nursery

## License

MIT License

## Acknowledgments

- Plant images from Unsplash
- Inspired by Shopify themes
- Google Fonts for typography

---

**Made with React and Redux**

**Star this repository if you find it helpful!**