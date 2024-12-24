import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += itemToAdd.quantity;
      } else {
        state.cartItems.push({
          ...itemToAdd,
          quantity: itemToAdd.quantity,
          price: itemToAdd.newPrice,
        });
      }
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.price = state.cartItems.reduce(
        (total, item) => total + item.newPrice * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);

            // Update total quantity and price after removal  
            state.quantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);  
            state.price = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0); 
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
