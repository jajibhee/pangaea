import React, { useState } from "react";
import Cart from "../../../components/Cart/Cart";

import ProductItem from "../../../components/ProductItem/ProductItem";

const ProductSection = () => {
  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(true);
  };
  return (
    <div className="product-section">
      <Cart open={cart} />
      <ProductItem toggleCart={toggleCart} open={cart} />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductSection;
