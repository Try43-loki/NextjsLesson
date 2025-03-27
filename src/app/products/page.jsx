import React from "react";
import { getAllProductService } from "../../services/product.service";
import CartProductComponent from "../products/_components/CardProductComponent";
async function ProductPage() {
  const products = await getAllProductService();
  return (
    <>
      <CartProductComponent products={products} />;
    </>
  );
}

export default ProductPage;
