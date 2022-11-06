import {
  productsFetched,
  productsLoading,
} from "../store/feats/productsSlice/";
import { useDispatch } from "react-redux";
import { productsApi } from "../services/api/prouctsApi";

export const useProductActions = () => {
  const dispatch = useDispatch();

  const productLoadingAction = () => {
    dispatch(productsLoading());
  };
  const productsFetchedAction = async () => {
    const products = await productsApi.fetchAll();
    console.log(products, "pros");
    dispatch(productsFetched(products));
  };

  return {
    productLoadingAction,
    productsFetchedAction,
  };
};
