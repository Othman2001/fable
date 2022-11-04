import {
  DocumentData,
  SnapshotOptions,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { IProduct } from "../types";

export const productConverter = {
  toFirestore(product: IProduct): DocumentData {
    return {
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      id: product.id,
      category: product.category,
      colors: product.colors,
      images: product.images,
      sizes: product.sizes,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): IProduct {
    const data = snapshot.data(options)!;
    return {
      name: data.name,
      price: data.price,
      imageUrl: data.imageUrl,
      id: data.id,
      category: data.category,
      colors: data.colors,
      images: data.images,
      sizes: data.sizes,
    };
  },
};
