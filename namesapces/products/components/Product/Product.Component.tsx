import { useState } from "react";
import { IProduct } from "../../store/types";
import * as Styles from "./Product.Styles";
import ProductSlider from "./ProductSilder.Component";

interface IProductProps {
    product: IProduct | undefined;
}

export default function Product({ product }: IProductProps) {
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    return (
        <div>
            {product ? (
                <Styles.siteMapWrapper>
                    <Styles.SiteMapText>
                        Classic - Jacket
                    </Styles.SiteMapText>
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
                                            <Styles.ProductSizeBox onClick={() => { setSelectedSize(size) }}
                                                isActive={selectedSize == size ? true : false}
                                                key={index}>
                                                {size}
                                            </Styles.ProductSizeBox>
                                        )
                                    })}
                                </Styles.ProductSizeBoxContainer>
                            </Styles.ColumnWrapper>
                            <Styles.Center>
                                <Styles.ProductButton>
                                    Add To Cart
                                </Styles.ProductButton>
                            </Styles.Center>
                            <Styles.ProductDescription>
                                Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping
                            </Styles.ProductDescription>
                        </Styles.ProductDataContainer>
                    </Styles.ProductViewContainer>
                </Styles.siteMapWrapper>
            ) : (
                <>
                    <h1> loading</h1>
                </>
            )}

        </div>
    )
}
