import { useState } from "react";
import { ICartItem } from "../../../cart/store/store";
import { IProduct } from "../../store/types";
import * as Styles from "./Product.Styles";
import ProductSlider from "./ProductSilder.Component";

interface IProductProps {
    product: IProduct | undefined;
    addToCart: ({ product }: {
        product: ICartItem;
    }) => void
}

export default function Product({ product, addToCart }: IProductProps) {
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    return (
        <div>
            {product ? (
                <Styles.Container>
                    <Styles.ProductViewContainer>
                        <Styles.SliderWrapper>
                            <ProductSlider images={product.images} />
                        </Styles.SliderWrapper>
                        <Styles.ProductDataContainer>
                            <Styles.ProductName>
                                {product.name}
                            </Styles.ProductName>
                            <Styles.ProductPrice>
                                {product.price}
                            </Styles.ProductPrice>
                            <Styles.ColumnWrapper>
                                <Styles.ProductColorsWrapper>
                                    {
                                        product.colors.map((color, index) => {
                                            return (
                                                <Styles.ProductColorBox
                                                    data-testid={`color-${color}`}
                                                    onClick={() => { setSelectedColor(color) }}
                                                    isActive={selectedColor == color ? true : false}
                                                    color={color}
                                                    key={index} />
                                            )
                                        })
                                    }
                                </Styles.ProductColorsWrapper>
                                <Styles.ProductSizeBoxContainer>
                                    {product.sizes.map((size, index) => {
                                        return (
                                            <Styles.ProductSizeBox data-testid={`size-${size}`} onClick={() => { setSelectedSize(size) }}
                                                isActive={selectedSize == size ? true : false}
                                                key={index}>
                                                {size}
                                            </Styles.ProductSizeBox>
                                        )
                                    })}
                                </Styles.ProductSizeBoxContainer>
                            </Styles.ColumnWrapper>
                            <Styles.Center>
                                <Styles.ProductButton
                                    disabled={(selectedSize && selectedColor) ? false : true}
                                    onClick={() => {
                                        addToCart({
                                            product: {
                                                quantity: 1,
                                                category: product.category,
                                                colors: product.colors,
                                                id: product.id,
                                                images: product.images,
                                                imageUrl: product.imageUrl,
                                                name: product.name,
                                                price: product.price,
                                                sizes: product.sizes,
                                                selectedColor,
                                                selectedSize
                                            }
                                        })
                                    }}
                                >
                                    Add To Cart
                                </Styles.ProductButton>
                            </Styles.Center>
                            <Styles.ProductDescription>
                                Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping
                            </Styles.ProductDescription>
                        </Styles.ProductDataContainer>
                    </Styles.ProductViewContainer>
                </Styles.Container>
            ) : (
                <>
                    <h1> loading</h1>
                </>
            )}

        </div>
    )
}
