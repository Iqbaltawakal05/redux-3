import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: false,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase (state, action) {
      const cartItems = state.cartItems.find((item) => item.id === action.payload.id)
      cartItems.amount = cartItems.amount + 1
      state.total = calculateTotal(state.cartItems);
    },
    decrease (state, action) {
      const cartItems = state.cartItems.find((item) => item.id === action.payload.id)
      cartItems.amount = cartItems.amount - 1

      if (cartItems.amount < 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      }
      state.total = calculateTotal(state.cartItems);
    },
    remove (state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.total = calculateTotal(state.cartItems);
    },
    totalAmount (state) {
      state.amount = state.cartItems.reduce((total, item) => {
        return total + item.amount

      }, 0)
      state.total = calculateTotal(state.cartItems);
    },
    clearCart (state) {
      state.cartItems = []
      state.total = 0
    }
  },
});

const calculateTotal = (cartItems) => {
   const total = cartItems.reduce((total, item) => {
    return total + item.amount * item.price
  }, 0);

  return total.toFixed(2);
}

export const { increase, decrease, remove, totalAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
