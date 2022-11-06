import {
  addToCart,
  ICartItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  changeDrawerVisibility,
} from "../store/store";
import { useDispatch } from "react-redux";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addItemToCartAction = ({ item }: { item: ICartItem }) => {
    dispatch(addToCart(item));
  };
  const removeItemAction = ({ productId }: { productId: string }) => {
    dispatch(removeItem(productId));
  };
  const incrementQuantityAction = ({ productId }: { productId: string }) => {
    dispatch(incrementQuantity(productId));
  };
  const decrementQuantityAction = ({ productId }: { productId: string }) => {
    dispatch(decrementQuantity(productId));
  };
  const changeDrawerVisibilityAction = ({
    drawerVisibility: drawerVisibility,
  }: {
    drawerVisibility: boolean;
  }) => {
    dispatch(changeDrawerVisibility(drawerVisibility));
  };
  return {
    addItemToCartAction,
    removeItemAction,
    incrementQuantityAction,
    decrementQuantityAction,
    changeDrawerVisibilityAction,
  };
};
