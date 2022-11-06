import { Drawer as DrawerComponent } from "antd";
import * as Styles from "./Drawer.Styles";
import Image from "next/image";
import { ICartItem } from "../../store/store";
import Link from "next/link";
import { GetColorName } from 'hex-color-to-color-name';

interface IDrawerProps {
    itemsInCart: ICartItem[];
    drawerVisibility: boolean;
    changeDrawerVisibilityAction: ({ drawerVisibility: drawerVisibility, }: {
        drawerVisibility: boolean;
    }) => void
}

export default function Drawer({ itemsInCart, drawerVisibility, changeDrawerVisibilityAction }: IDrawerProps) {
    return (
        <DrawerComponent title="Your Cart" placement="right" onClose={() => {
            changeDrawerVisibilityAction({ drawerVisibility: false })
        }} open={drawerVisibility}>
            <Styles.DrawerWrapper>
                {itemsInCart?.map((item) => {
                    return (
                        <Styles.ItemInCartContainer>
                            <Image
                                src={item.imageUrl}
                                alt="jakcet"
                                width={300}
                                height={300}
                            />
                            <div>
                                <Styles.itemInCartTitle>
                                    {item.name}
                                </Styles.itemInCartTitle>
                                <Styles.ItemInCartSubtitle>
                                    Collection: {item.category}
                                </Styles.ItemInCartSubtitle>
                                <Styles.ItemInCartSubtitle>
                                    Article: {item.id}
                                </Styles.ItemInCartSubtitle>
                                <Styles.FlexContainer>
                                    <Styles.FlexContainer>
                                        <Styles.DataText>
                                            Size:
                                        </Styles.DataText>
                                        <Styles.UserChoiceText> {item.selectedSize} </Styles.UserChoiceText>
                                    </Styles.FlexContainer>
                                    <Styles.FlexContainer>
                                        <Styles.DataText>
                                            Color:
                                        </Styles.DataText>
                                        <Styles.UserChoiceText>
                                            {GetColorName(item.selectedColor)}
                                        </Styles.UserChoiceText>
                                    </Styles.FlexContainer>
                                </Styles.FlexContainer>
                                <Styles.DataText> Price: {item.price} </Styles.DataText>

                            </div>
                        </Styles.ItemInCartContainer>
                    )
                })}
                <Link href="../../checkout">
                    <Styles.Button>
                        Proceed To CheckOut
                    </Styles.Button>
                </Link>

            </Styles.DrawerWrapper>
        </DrawerComponent>
    )
}
