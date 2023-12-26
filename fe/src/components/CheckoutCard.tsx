import React, { useEffect, useState } from "react";
import Product from "../models/Product.interface";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/ProductsApi";

const CheckoutCard = () => {
  const { id } = useParams();
  const [checkout, setCheckout] = useState<Product | null>(null);

  useEffect(() => {
    const product = getProductById(id!);

    product
      ? setCheckout(product)
      : console.error("Product not found for ID:", id);
  }, [id]);

  if (!checkout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border rounded px-6 py-8 flex items-start h-min">
      <div className="w-[150px] h-[120px]">
        <img className="border rounded" src={checkout.imageUrl} alt={`${checkout.title} image`} />
      </div>
      <div className="flex flew-grow flex-col">
        <div className="pl-4">
            <h3 className="text-2xl font-bold">{checkout.title}</h3>
            <p className="text-gray-900">{checkout.description}</p>
        </div>
      </div>
      <div>
        <p>€{checkout.price}</p>
      </div>
    </div>
  );
};

export default CheckoutCard;
