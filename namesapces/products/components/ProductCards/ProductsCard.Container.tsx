import { useEffect } from "react";
import { useProductActions } from "../../custom-hooks/useProductActions";
import { useProductState } from "../../custom-hooks/useProductState";
import ProductCardsComponent from "./Product.Cards.Component";

export default function ProductsCard() {
    const { productsFetchedAction, productLoadingAction } = useProductActions();
    const { product } = useProductState();

    useEffect(() => {
        productLoadingAction()
        productsFetchedAction()
    }, [])

    return (
        <ProductCardsComponent products={product} />
    )
}
