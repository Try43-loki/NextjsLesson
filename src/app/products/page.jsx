import React from "react";
import Link from "next/link";

import CardProduct from "./_component/CardProductComponent.jsx";
import { productItems } from "@/Data/product.js";
const ProductPage = () => {
  return(
    <CardProduct productItems={productItems} />
  )
};

export default ProductPage;
