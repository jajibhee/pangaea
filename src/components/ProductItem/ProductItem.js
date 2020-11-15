import React from "react";
import Button from "../common/Button";
import Text from "../common/Text";

const ProductItem = ({ toggleCart }) => {
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src="/assets/lumin-eg.png" alt="lumin" />
      </div>
      <Text className="product-item__title">Age Management Set</Text>
      <Text className="product-item__price">From $52.00</Text>

      <div className="product-item__button">
        <Button
          className="button"
          title="Add to Cart"
          onClick={() => toggleCart()}
        />
      </div>
    </div>
  );
};

export default ProductItem;
