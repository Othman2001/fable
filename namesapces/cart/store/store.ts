import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../products/store/types";

export interface ICartItem extends IProduct {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}
export interface ICartState {
  showCartDrawer: boolean;
  cart: ICartItem[];
}

export const initialState: ICartState = {
  showCartDrawer: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.showCartDrawer = true;
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      if (itemInCart) itemInCart.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      if (itemInCart && itemInCart.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    changeDrawerVisibility: (state, action: PayloadAction<boolean>) => {
      state.showCartDrawer = action.payload;
    },
  },
});

export const {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  changeDrawerVisibility,
} = cartSlice.actions;

export default cartSlice.reducer;
