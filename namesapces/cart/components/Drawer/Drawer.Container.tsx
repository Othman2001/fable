import { useCartActions } from "../../custom-hooks/useCartActions";
import { useCartState } from "../../custom-hooks/useCartState";
import DrawerComponent from "./Drawer.Component";

export default function Drawer() {
    const { cartDrawerVisibility, cartItems } = useCartState();
    const { changeDrawerVisibilityAction } = useCartActions();
    return (
        <DrawerComponent
            itemsInCart={cartItems}
            drawerVisibility={cartDrawerVisibility}
            changeDrawerVisibilityAction={changeDrawerVisibilityAction}
        />
    )
}
