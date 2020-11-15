import React, { useContext } from "react";
import ProductContext from "../../../components/contexts/ProductContext";
import ProductItem from "../../../components/ProductItem/ProductItem";

const ProductSection = () => {
  return (
    <div className="product-section">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductSection;
