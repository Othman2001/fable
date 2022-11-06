import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const useCartState = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const cartDrawerVisibility = useSelector(
    (state: RootState) => state.cart.showCartDrawer
  );
  const getTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  return {
    cartItems,
    cartDrawerVisibility,
    getTotal,
  };
};
