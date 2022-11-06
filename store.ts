import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./namesapces/products/store/feats/productsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./namesapces/cart/store/store";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
  backlist: ["products"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
