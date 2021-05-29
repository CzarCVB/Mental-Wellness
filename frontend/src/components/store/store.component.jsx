import React from "react";
import CarouselComponent from "../carousel/carousel.component";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./store.styles.scss";

const Store = ({ collections }) => (
  <div>
    <CarouselComponent />
    <div className="container my-4">
      {collections.map((item) => (
        <CollectionOverview key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Store);
