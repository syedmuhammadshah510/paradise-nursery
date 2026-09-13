import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, price } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (!existingItem) {
        state.items.push({
          name,
          image,
          price,
          quantity: 1,
        });
      }
    },
    
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        const item = state.items.find(item => item.name === name);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
    
    incrementQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity += 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.name !== name);
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectTotalCost = (state) => {
  return state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectIsItemInCart = (state, itemName) => {
  return state.cart.items.some(item => item.name === itemName);
};

export default cartSlice.reducer;
