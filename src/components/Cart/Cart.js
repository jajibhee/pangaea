import React from "react";

const Cart = ({ open }) => {
  return (
    <div>
      <div className={open ? "overlay" : ""}></div>
      <div className={open ? "cart open" : "cart"}>
        <div>CartItem</div>
      </div>
    </div>
  );
};

export default Cart;
