import React from "react";
import Header from "../header/header.component";
import CarouselComponent from "../carousel/carousel.component";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { ShopData } from "../../shopdata";

import "./store.styles.scss";

const Store = () => (
  <div>
    <Header />
    <CarouselComponent />
    <div className="container my-4">
      {ShopData.map((item) => (
        <CollectionOverview id={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default Store;
