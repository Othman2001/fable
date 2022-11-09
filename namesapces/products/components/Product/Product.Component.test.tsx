import {
    fireEvent,
    render,
    RenderResult,
    screen
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import ProductView from "./Product.Component";
import { IProduct } from "../../store/types";
import { store } from "../../../../store";
import { addToCart } from "../../../cart/store/store";


const products: IProduct = {
    category: "classic/jackets",
    name: "jacketKlsBlack",
    colors: ["#fff", "#000"],
    id: "aed232",
    images: ["image 1 ", "imagee2"],
    imageUrl: "",
    price: 200,
    sizes: ['sm', "xs"]
}
const addToCartAction = ({ product }: { product: IProduct }) => {
    store.dispatch(addToCart({
        category: product.category,
        colors: product.colors,
        id: product.id,
        images: product.images,
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        quantity: 1,
        selectedColor: "#000",
        selectedSize: "sm",
        sizes: product.sizes
    }))
}
const renderProductViewComponent = (products: IProduct, addToCartAction: ({ product }: {
    product: IProduct;
}) => void
): RenderResult => render(
    <Provider store={store}>
        <ProductView product={products} addToCart={addToCartAction} />
    </Provider>

)
describe("Testing Product Component", () => {

    it("should add product to the cart", () => {
        renderProductViewComponent(products, addToCartAction);
        const initialLength = store.getState().cart.cart.length;
        let AddToCartButton = screen.getByText("Add To Cart")
        let sizeButton = screen.getByTestId(`size-${products.sizes[0]}`);
        let colorButton = screen.getByTestId(`color-${products.colors[0]}`);

        // firing events
        fireEvent(
            sizeButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: false
            })
        )
        fireEvent(
            colorButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: false
            })
        )
        expect(AddToCartButton).toBeInTheDocument();
        fireEvent(
            AddToCartButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: false
            })
        )
        expect(store.getState().cart.cart.length).toBeGreaterThan(initialLength)
    })
})

