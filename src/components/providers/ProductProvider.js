import React, { Fragment, useState } from "react";
import ProductContext from "../contexts/ProductContext";

const ProductProvider = (props) => {
  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart);
  };

  const contextValues = {
    cart,
    toggleCart,
  };

  return (
    <Fragment>
      <ProductContext.Provider value={contextValues}>
        {props.children}
      </ProductContext.Provider>
    </Fragment>
  );
};

export default ProductProvider;
