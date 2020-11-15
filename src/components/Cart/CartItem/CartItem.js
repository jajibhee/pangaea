import React from "react";
import { FiPlusSquare, FiMinusSquare, FiX } from "react-icons/fi";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__title">
        <p>DDD</p>
        <small>
          <FiX />
        </small>
      </div>
      <div className="cart-item__image">
        <img src="/assets/lumin-eg.png" alt="lumin" />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__details--actions">
          <span>-</span>
          <p>1</p>
          <span>+</span>
        </div>
        <p>$29.00</p>
      </div>
    </div>
  );
};

export default CartItem;
