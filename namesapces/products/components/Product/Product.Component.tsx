import * as Styles from "./Product.Styles";
import ProductSlider from "./ProductSilder.Component";

export default function Product() {
    const productColors = [{ color: "#9c1818", id: 1 }, { color: "#0000", id: 2 }, { color: "#D3A0A0", id: 3 }, { color: "#e88787", id: 5 }]
    const productSizes = [
        { size: "xs", id: 1 },
        { size: "sm", id: 2 },
        { size: "lg", id: 3 },
        { size: "xl", id: 4 },
    ]
    return (
        <>
            <Styles.siteMapWrapper>
                <Styles.SiteMapText>
                    Classic - Jacket
                </Styles.SiteMapText>
                <Styles.ProductViewContainer>
                    <Styles.SliderWrapper>
                        <ProductSlider />
                    </Styles.SliderWrapper>
                    <Styles.ProductDataContainer>
                        <Styles.ProductName>
                            Jacket
                        </Styles.ProductName>
                        <Styles.ProductPrice>
                            150USD
                        </Styles.ProductPrice>
                        <Styles.ColumnWrapper>
                            <Styles.ProductColorsWrapper>
                                {
                                    productColors.map((color, index) => {
                                        return (
                                            <Styles.ProductColorBox
                                                color={color.color}
                                                key={color.id} />
                                        )
                                    })
                                }
                            </Styles.ProductColorsWrapper>
                            <Styles.ProductSizeBoxContainer>
                                {productSizes.map((size) => {
                                    return (
                                        <Styles.ProductSizeBox color={""} key={size.id}>
                                            {size.size}
                                        </Styles.ProductSizeBox>
                                    )
                                })}
                            </Styles.ProductSizeBoxContainer>
                        </Styles.ColumnWrapper>

                        <Styles.ProductButton>
                            Add To Cart
                        </Styles.ProductButton>
                        <Styles.ProductDescription>
                            Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping
                        </Styles.ProductDescription>
                    </Styles.ProductDataContainer>
                </Styles.ProductViewContainer>
            </Styles.siteMapWrapper>
        </>
    )
}
