import { useEffect, useState } from "react";
import { productsApi } from "../../services/api/prouctsApi";
import { IProduct } from "../../store/types";
import Product from "./Product.Component";

interface IProductViewProps {
    productId: string
}
export default function ProductView({ productId }: IProductViewProps) {
    const [product, setProduct] = useState<IProduct | undefined>()
    const fetchProduct = async ({ productId }: { productId: string }) => {
        const productData = await productsApi.fetchProduct(productId);
        setProduct(productData)
    }
    useEffect(() => {
        fetchProduct({ productId });
    }, [productId])

    return (
        <Product product={product} />
    )
}
