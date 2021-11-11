import React, { Component } from "react";
import Slider from "react-slick";
import SlideCard from "./SlideCard/SlideCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AboutSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SlideCard image='https://user-images.githubusercontent.com/61336548/119431014-2e4a7c00-bce8-11eb-8e2d-64be0c2a7a99.png' />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
