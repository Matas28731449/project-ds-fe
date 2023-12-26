import Product from "../models/Product.interface";
import products from "../data/products";

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
