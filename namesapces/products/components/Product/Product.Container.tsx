import { useEffect, useState } from "react";
import { useCartActions } from "../../../cart/custom-hooks/useCartActions";
import { ICartItem } from "../../../cart/store/store";
import { productsApi } from "../../services/api/prouctsApi";
import { IProduct } from "../../store/types";
import Product from "./Product.Component";

interface IProductViewProps {
    productId: string
}
export default function ProductView({ productId }: IProductViewProps) {

    const [product, setProduct] = useState<IProduct | undefined>();
    const { addItemToCartAction } = useCartActions();

    const fetchProduct = async ({ productId }: { productId: string }) => {
        const productData = await productsApi.fetchProduct(productId);
        setProduct(productData)
    }
    const addToCart = ({ product }: { product: ICartItem }) => {
        addItemToCartAction({ item: product })
    }
    useEffect(() => {
        fetchProduct({ productId });
    }, [productId])

    return (
        <Product addToCart={addToCart} product={product} />
    )
}
