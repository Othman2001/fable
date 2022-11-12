import { products } from "../products";

export const productsApi = {
  fetchAll: async () => {
    return products;
  },
  fetchProduct: async (id: string) => {
    const product = products.find((productItem) => productItem.id == id);
    return product;
  },
};
