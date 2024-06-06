import {  createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existedCartItem = state.cartItems.findIndex(
        (cart) => cart._id === action.payload._id
      );

      if (existedCartItem >= 0) {
        state.cartItems[existedCartItem].count += 1;
      } else {
        // add to cart
        const assembled = { ...action.payload, count: 1 };
        state.cartItems.push(assembled);
        toast.success("Product added Successfully!", {
          position: "bottom-left",
        });
      }
    },

    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      toast(`Drone ${action.payload} removed Successfully!`, {
        icon: "👏",
        position: "bottom-left",
      });
    },

    clearCart: (state) => {
      state.cartItems = [];
      toast.success("All cleared!", {
        position: "bottom-left",
      });
    },

    incrementItem: (state, action) => {
      const cartItem = state.cartItems.findIndex(
        (cart) => cart._id === action.payload
      );

      if (cartItem >= 0) {
        state.cartItems[cartItem].count += 1;
        toast.success("Item increased!", {
          position: "bottom-left",
        });
      }
    },

    decrementItem: (state, action) => {
      const cartItem = state.cartItems.findIndex(
        (cart) => cart._id === action.payload
      );

      if (state.cartItems[cartItem].count > 1) {
        state.cartItems[cartItem].count -= 1;
        toast.success("Item deccreased!", {
          position: "bottom-left",
        });
      } else if (state.cartItems[cartItem].count === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        state.cartItems = updatedCartItems;
      }
    },
  },
});

export const {
  addToCart,
  removeCart,
  clearCart,
  incrementItem,
  decrementItem,
} = cartSlice.actions;
export default cartSlice.reducer;
