
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface OrderDetails {
  id: string; 
  products: { id: string; name: string; quantity: number; price: number, img: string}[];
 
  totalAmount: number;
  paymentId: string;
  orderDate: string; 
}

interface OrderHistoryState {
  orders: OrderDetails[];
}

const initialState: OrderHistoryState = {
  orders: [],
};

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<OrderDetails>) {
      console.log("ACTION",action)
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
