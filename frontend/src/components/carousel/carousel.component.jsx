import React from "react";

import "./carousel.styles.css";

const CarouselComponent = () => {
  return (
    <div
      id="introCarousel"
      className="carousel slide carousel-fade shadow-2-strong"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#introCarousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#introCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#introCarousel" data-bs-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask mask1"></div>
        </div>

        <div className="carousel-item">
          <div className="mask mask2">
            <div className="carousel-caption">
              <div className="text-white text-center">
                <h2>You can place here any content</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="mask mask3"></div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#introCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#introCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;
