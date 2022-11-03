import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const useProductState = () => {
  const product = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.loading);

  return {
    product,
    isLoading,
  };
};
