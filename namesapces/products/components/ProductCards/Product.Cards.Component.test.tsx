import {
    render,
    screen,
    RenderResult,
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import Cards from "./Product.Cards.Component";
import { IProduct } from "../../store/types";
import { store } from "../../../../store";

const products: IProduct[] = [{
    category: "classic/jackets",
    name: "jacketKlsBlack",
    colors: ["#fff", "#000"],
    id: "aed232",
    images: ["https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314 ", "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsYellow%2FJacketKlsYellow.png?alt=media&token=f867714d-e4ac-43a9-9ffe-e57203853529"],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/fable-b9dfa.appspot.com/o/products%2Fjackets%2FJacketKlsBrown%2FJacketKlsBrown.png?alt=media&token=55c3e8e7-95ed-4fbd-b33a-c459b2cfe314",
    price: 200,
    sizes: ['sm', "xs"]
}]
// å

const renderProducts = (products: IProduct[]): RenderResult => render(
    <Provider store={store}>
        <Cards products={products} />
    </Provider>

)
describe("Products Component Cards Testing", () => {
    it("should render the product data for example: the name", () => {
        renderProducts(products);
        expect(screen.getByText('jacketKlsBlack')).toHaveTextContent(products[0].name)
    })
})
