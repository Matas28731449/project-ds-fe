import React from "react";
import Product from "../models/Product.interface";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../routes";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(AppRoutes.CHECKOUT.replace(":id", props.product.id));
  };

  return (
    <div className="container p-0 mt-10 border rounded grid grid-cols-3 max-w-xl">
      <img
        className="col-span-3 rounded-t border-b"
        src={props.product.imageUrl}
      />
      <div className="col-span-2">
        <h1 className="text-4xl text-black font-bold border-b p-6">
          {props.product.title}
        </h1>
        <p className="text-gray-900 p-6">{props.product.description}</p>
      </div>
      <div className="border-l p-6 flex flex-col">
        <button
          onClick={handleClick}
          className="bg-indigo-500 text-white hover:bg-indigo-600 font-bold rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-gray-900 hover:border-gray-900 border-2"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
