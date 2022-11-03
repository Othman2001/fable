import { collection, getDocs } from "firebase/firestore";
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
};
