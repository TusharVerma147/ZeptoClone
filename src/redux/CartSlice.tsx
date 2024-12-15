import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type CartState = Product[];

const CartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct(state, action: PayloadAction<{ id: string }>) {
      return state.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const product = state.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const product = state.find(item => item.id === action.payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter(item => item.id !== action.payload.id);
        }
      }
    },
  
  
    clearCart(state) {
      return [];  
    },
  },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
