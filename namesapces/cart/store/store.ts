import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../products/store/types";

export interface ICartState {
  showCartDrawer: boolean;
  cart: IProduct[];
}

export const initialState: ICartState = {
  showCartDrawer: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded: (state, action: PayloadAction<IProduct>) => {
      state.showCartDrawer = true;
    },
  },
});
