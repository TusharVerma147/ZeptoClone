import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      console.log("---->>state",state)
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeProduct(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity(state, action) {
      const product = state.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const product = state.find(item => item.id === action.payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const {addProduct, removeProduct, incrementQuantity, decrementQuantity} =
  CartSlice.actions;
export default CartSlice.reducer;


