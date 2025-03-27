import React from "react";
import { getProductByIdService } from "../../../services/product.service";
import ProductDetailComponent from "../_components/ProductDetailComponent";
async function ProductDetailPage({ params }) {
  const proId = params.productId;
  const product = await getProductByIdService(proId);
  return (
    <>
      <ProductDetailComponent product={product} />
    </>
  );
}

export default ProductDetailPage;
