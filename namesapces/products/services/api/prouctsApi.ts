import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { database } from "../../../../config/firebaseConfig";
import { IProduct } from "../../store/types";
import { productConverter } from "../../store/utils/productConverter";

export const productsApi = {
  fetchAll: async () => {
    let products: IProduct[] = [];
    const productsRef = collection(database, "Products").withConverter(
      productConverter
    );
    const docsSnap = await getDocs(productsRef);
    docsSnap.forEach((doc) => {
      console.log(doc.data(), "erewlrjewkj");
      products.push(doc.data());
    });
    return products;
  },
  fetchCategory: async (category: string) => {
    let products: IProduct[] = [];
    const productsRef = collection(database, "Products").withConverter(
      productConverter
    );
    const fetchCategoryQuery = query(
      productsRef,
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(fetchCategoryQuery);
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  },
  fetchProduct: async (productId: string) => {
    const productsRef = doc(database, "Products", productId).withConverter(
      productConverter
    );
    const product = (await getDoc(productsRef)).data();
    return product;
  },
};
