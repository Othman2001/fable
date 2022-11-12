import { products } from "./products";
import { productsApi } from "./prouctsApi";

productsApi.fetchAll = jest.fn().mockReturnValue(products);
describe("Testing Products Apis", () => {
  it("Should return all products stored in database", async () => {
    const result = await productsApi.fetchAll();
    expect(result).toBe(products);
  });
  it("should fetch product giving the product iD", async () => {
    // const result = await productsApi.fetchProduct()
  });
});
