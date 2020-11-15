import React from "react";
import CartItem from "./CartItem/CartItem";
import { FiChevronLeft } from "react-icons/fi";
import Text from "../common/Text";

const Cart = ({ open, toggleCart }) => {
  return (
    <div>
      <div className={open ? "overlay" : ""}></div>
      <div className={open ? "cart open" : "cart"}>
        <div className="cart-header">
          <div className="circle-border" onClick={toggleCart}>
            <FiChevronLeft size={16} />
          </div>
          <Text>Your Cart</Text>
        </div>
        <select className="currency-select">
          <option value="usd" style={{ display: "none" }}>
            USD
          </option>
          <option value="usd">USD</option>
        </select>

        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
