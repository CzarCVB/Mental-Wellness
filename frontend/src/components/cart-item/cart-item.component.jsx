import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imgUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.title}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
