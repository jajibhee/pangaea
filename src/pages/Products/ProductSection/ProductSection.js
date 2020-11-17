import React, { useContext } from "react";
import ProductContext from "../../../components/contexts/ProductContext";
import ProductItem from "../../../components/ProductItem/ProductItem";

const ProductSection = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-section">
      {products
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : "Loading..."}
    </div>
  );
};

export default ProductSection;
