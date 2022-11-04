import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

export interface IProductState {
  products: IProduct[];
  loading: boolean;
}

const initialState: IProductState = {
  products: [],
  loading: false,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsLoading: (state: WritableDraft<IProductState>) => {
      if (state.loading) {
        state.loading = false;
      } else {
        state.loading = true;
      }
    },

    productsFetched: (
      state: WritableDraft<IProductState>,
      action: PayloadAction<IProduct[]>
    ) => {
      if (state.loading) {
        state.loading = false;
      }
      state.products = action.payload;
    },
    productLoading: (state) => {
      if (state.loading) {
        state.loading = false;
      } else {
        state.loading = true;
      }
    },
  },
});

export const { productsFetched, productsLoading } = productSlice.actions;

export default productSlice.reducer;
