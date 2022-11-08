import { store } from "../../../../../store";
import { IProduct } from "../../types";
import { productsFetched } from "./index";

const products: IProduct[] = [
  {
    name: "Jacket Kls Brown",
    price: 200,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314",
    id: "18q2CjtQ7QJqps5CLSBx",
    category: "classic/jackets",
    colors: ["#D9BBF9", "#AA9FB1"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314",
      "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsYellow%2FJacketKlsYellow.png?alt=media&token=f867714d-e4ac-43a9-9ffe-e57203853529",
    ],
    sizes: ["Xl", "Lg", "Sm"],
  },
];
describe("Product Redux state test", () => {
  it("Should initially set Products to an empty array", () => {
    let state = store.getState().products;
    expect(state.products).toEqual([]);
  });
  it("should fetchProducts from Api and set the data in the store", () => {
    // arrange
    let result = store.dispatch(productsFetched(products));
    expect(result.payload).toEqual(products);
    let state = store.getState().products;
    expect(state.products).toEqual(result.payload);
  });
});
