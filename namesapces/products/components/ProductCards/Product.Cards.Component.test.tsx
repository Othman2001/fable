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
    images: ["image 1 ", "imagee2"],
    imageUrl: "",
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
