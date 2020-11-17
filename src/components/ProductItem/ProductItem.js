import React, { useContext } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import ProductContext from "../contexts/ProductContext";

const ProductItem = ({ product }) => {
  const { currentCurrency, addToCart } = useContext(ProductContext);

  console.log(product);
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={product.image_url} alt={product.title} />
      </div>
      <Text className="product-item__title">{product.title}</Text>
      <Text className="product-item__price">
        From{" "}
        {new Intl.NumberFormat(`${currentCurrency}`, {
          style: "currency",
          currency: `${currentCurrency}`,
        }).format(product.price)}
      </Text>

      <div className="product-item__button">
        <Button
          className="button"
          title="Add to Cart"
          onClick={() => {
            addToCart(product);
          }}
        />
      </div>
    </div>
  );
};

export default ProductItem;
