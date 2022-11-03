import { useRouter } from "next/router";
import Layout from "../../../components/shared/Layout/Layout";
import ProductComponent from "../../../namesapces/products/components/Product/Product.Component";

export default function Product() {
    const router = useRouter();
    const { id } = router.query
    return (
        <Layout>
            <ProductComponent />
        </Layout>
    )
}
