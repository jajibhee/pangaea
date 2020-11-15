import React from "react";

const Cart = ({ open }) => {
  return <div className={open ? "cart open" : "cart"}>Cartical</div>;
};

export default Cart;
