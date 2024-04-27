import { store } from "../../../store";
import {
  addToCart,
  clearCart,
  decrementQuantity,
  ICartItem,
  incrementQuantity,
  removeItem,
} from "./store";

const cartItem: ICartItem = {
  category: "classic/jackets",
  name: "jacketKlsBlack",
  colors: ["#fff", "#000"],
  id: "aed232",
  images: [
    "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314 ",
    "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsYellow%2FJacketKlsYellow.png?alt=media&token=f867714d-e4ac-43a9-9ffe-e57203853529",
  ],
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314",
  price: 200,
  sizes: ["sm", "xs"],
  quantity: 1,
  selectedColor: "#000",
  selectedSize: "sm",
};
afterEach(() => {
  store.dispatch(clearCart({}));
});

describe("ProductSlice Test", () => {
  it("Cart Length should be zero at the start of the app", () => {
    let state = store.getState();

    expect(state.cart.cart.length).toBe(0);
  });
  it("Should Add Item To Cart", () => {
    let result = store.dispatch(addToCart(cartItem));
    expect(result.payload).toEqual(cartItem);
    let state = store.getState();
    expect(state.cart.cart.length).toBe(1);
    expect(state.cart.cart[0]).toEqual(result.payload);
  });
  it("Should incerment the quantity if the item is already in cart", () => {
    store.dispatch(addToCart(cartItem));
    store.dispatch(addToCart(cartItem));
    expect(store.getState().cart.cart[0].quantity).toBe(2);
  });
  it("Should Decrement The Qunatity of the product in the cart when firing decrement qunatity action", () => {
    store.dispatch(addToCart(cartItem));
    store.dispatch(incrementQuantity(cartItem.id));
    store.dispatch(decrementQuantity(cartItem.id));
    expect(store.getState().cart.cart[0].quantity).toBe(1);
  });
  it("Should Remove The product when firing removeItem Action", () => {
    store.dispatch(addToCart(cartItem));
    store.dispatch(removeItem(cartItem.id));
    expect(store.getState().cart.cart[0]).toBeUndefined();
  });
  it("Should make the drawer visiable when user adds item to cart", () => {
    store.dispatch(addToCart(cartItem));
    expect(store.getState().cart.showCartDrawer).toBe(true);
  });
});
