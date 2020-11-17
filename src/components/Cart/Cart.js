import React, { useContext } from "react";
import CartItem from "./CartItem/CartItem";
import { FiChevronLeft } from "react-icons/fi";
import Text from "../common/Text";
import ProductContext from "../contexts/ProductContext";

const Cart = ({ open, toggleCart }) => {
  const {
    cartItems,
    setCurrentCurrency,
    currency,
    currentCurrency,
    total,
  } = useContext(ProductContext);

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
        <select
          className="currency-select"
          name="currentCurrency"
          value={currentCurrency}
          onChange={(e) => setCurrentCurrency(e.target.value)}
        >
          {currency
            ? currency.map((curr) => <option value={curr}>{curr}</option>)
            : ""}
        </select>
        {cartItems.length >= 1
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          : "Empty Cart"}

        <div className="cart-footer">
          <p>Subtotal</p>
          <p>
            {new Intl.NumberFormat(`${currentCurrency}`, {
              style: "currency",
              currency: `${currentCurrency}`,
            }).format(total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
