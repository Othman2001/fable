import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/shared/Layout/Layout";
import ProductView from "../../../namesapces/products/components/Product/Product.Container";
import Drawer from "../../../namesapces/cart/components/Drawer/Drawer.Container";

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
    }, [])
    return (
        <Layout>
            {/* @ts-ignore */}
            <ProductView productId={id} />
            <Drawer />
        </Layout>
    )
}
