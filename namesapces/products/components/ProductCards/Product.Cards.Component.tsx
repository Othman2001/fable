import * as Styles from "./ProductCards.Styles";
import jacket from "../../../../assets/images/jacket.png";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../store/types";

interface ICardProps {
    products: IProduct[];
}

export default function Cards({ products }: ICardProps) {
    return (
        <Styles.CardsContainer>
            {products.map((product) => {
                return (
                    <Styles.Card>
                        <Styles.CardImage>
                            <Link
                                href={`product/${product.id}`}
                            >
                                <Image
                                    alt={product.name}
                                    src={product.imageUrl}
                                    width={500}
                                    height={500}
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}

                                />
                            </Link>
                        </Styles.CardImage>
                        <Styles.ProductTitle>
                            {product.name}
                        </Styles.ProductTitle>
                        <Styles.ProductPrice>$-{product.price} </Styles.ProductPrice>
                    </Styles.Card>
                )
            })}
        </Styles.CardsContainer>
    )
}
