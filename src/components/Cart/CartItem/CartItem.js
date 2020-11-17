import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import ProductContext from "../../contexts/ProductContext";

const CartItem = ({ item }) => {
  const {
    currentCurrency,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(ProductContext);

  return (
    <div className="cart-item">
      <div className="cart-item__title">
        <p>{item.product.title}</p>
        <small onClick={() => removeItem(item)}>
          <FiX />
        </small>
      </div>
      <div className="cart-item__image">
        <img src={item.product.image_url} alt={item.title} />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__details--actions">
          <span className="pointer" onClick={() => decreaseQuantity(item)}>
            -
          </span>
          <p>{item.quantity}</p>
          <span className="pointer" onClick={() => increaseQuantity(item)}>
            +
          </span>
        </div>
        <p>
          {new Intl.NumberFormat(`${currentCurrency}`, {
            style: "currency",
            currency: `${currentCurrency}`,
          }).format(item.total)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
