import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Product = () => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default Product;
