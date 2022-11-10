import * as Styles from "./Checkout.Styles";
import Image from "next/image";
import OrderForm from "../OrderForm/OrderForm.Component";
import { ICartItem } from "../../store/store";
import Link from "next/link";
import { GetColorName } from 'hex-color-to-color-name';
import Total from "../Total/Total.Component";

interface ICheckoutProps {
    cartItems: ICartItem[];
    increment: ({ productId }: {
        productId: string;
    }) => void;
    decrement: ({ productId }: {
        productId: string;
    }) => void;
    removeItem: ({ productId }: {
        productId: string;
    }) => void;
    getTotal: () => number
}

export default function Checkout({ cartItems, decrement, increment, removeItem }: ICheckoutProps) {
    return (
        <>
            {cartItems.length == 0 ? (
                <Styles.ErrorTextContainer>
                    <Styles.ErrorText>
                        PleASE aDD ITEMS TO CART
                    </Styles.ErrorText>
                </Styles.ErrorTextContainer>
            ) : (
                <Styles.CheckOutWrapper>
                    <Styles.FormContainer>
                        <OrderForm />
                    </Styles.FormContainer>
                    <Styles.ItemsWrapper>

                        {cartItems?.map((item) => {
                            return (
                                <Styles.ItemInCartContainer>
                                    <div>
                                        <Image
                                            src={item.imageUrl}
                                            alt="jacket"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div>
                                        <Styles.itemInCartTitle>
                                            <Link href={`../collection/product/${item.id}`}>
                                                {item.name}

                                            </Link>


                                        </Styles.itemInCartTitle>
                                        <Styles.ItemInCartSubtitle> Collection: Collection:  </Styles.ItemInCartSubtitle>
                                        <Styles.ItemInCartSubtitle> Article: H0522001 </Styles.ItemInCartSubtitle>
                                        <Styles.FlexContainer>

                                            <Styles.FlexContainer>
                                                <Styles.DataText>Size:</Styles.DataText>
                                                <Styles.UserChoiceText> M</Styles.UserChoiceText>
                                            </Styles.FlexContainer>

                                            <Styles.FlexContainer>
                                                <Styles.DataText>Color:</Styles.DataText>
                                                <Styles.UserChoiceText>
                                                    {GetColorName(item.selectedColor)}
                                                </Styles.UserChoiceText>
                                            </Styles.FlexContainer>

                                            <Styles.FlexContainer>
                                                <Styles.DataText>Quantity:</Styles.DataText>
                                                <Styles.UserChoiceText >   <Styles.ButtonIcon onClick={() => { decrement({ productId: item.id }) }}> - </Styles.ButtonIcon>  {item.quantity} <Styles.ButtonIcon onClick={() => { increment({ productId: item.id }) }} > +</Styles.ButtonIcon> </Styles.UserChoiceText>
                                            </Styles.FlexContainer>

                                        </Styles.FlexContainer>
                                        <a
                                            onClick={() => { removeItem({ productId: item.id }) }}
                                        > Remove Item</a>
                                    </div>
                                </Styles.ItemInCartContainer>

                            )
                        })}
                        <Total />
                    </Styles.ItemsWrapper>

                </Styles.CheckOutWrapper>
            )
            }
        </>

    )
}
