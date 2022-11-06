import { useCartActions } from "../../custom-hooks/useCartActions"
import { useCartState } from "../../custom-hooks/useCartState";
import CheckoutComponent from "./Checkout.Component"

export default function Checkout() {
    const { incrementQuantityAction, decrementQuantityAction, removeItemAction } = useCartActions();
    const { cartItems, getTotal } = useCartState();


    return (
        <CheckoutComponent cartItems={cartItems} increment={incrementQuantityAction}
            removeItem={removeItemAction}
            decrement={decrementQuantityAction}
            getTotal={getTotal}
        />
    )
}
