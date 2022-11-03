import { useRouter } from "next/router"
import CollectionHeader from "../../namesapces/products/components/Collections/CollectionHeader";
import Layout from "../../components/shared/Layout/Layout";
import Cards from "../../namesapces/products/components/ProductCards/ProductsCard.Container";

export default function Collection() {
    const router = useRouter();
    const { id } = router.query
    return (
        <Layout>
            {typeof id === "string" && (
                <CollectionHeader title={id ? id : "Error"} />
            )
            }
            SS
            <Cards />
        </Layout>
    )
}
