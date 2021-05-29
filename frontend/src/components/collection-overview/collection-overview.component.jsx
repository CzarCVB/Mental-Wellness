import React from "react";
import { connect } from "react-redux";

import "./collection-overview.styles.scss";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionOverview = ({ item, addItem }) => {
  const { imgUrl, title, price } = item;
  return (
    <div className="card me-2 shadows">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
      </div>
      <button className="btn btn-dark" onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionOverview);
