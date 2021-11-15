import React, { Component } from "react";
import Slider from "react-slick";
import SlideCard from "../SlideCard/SlideCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./AboutSlider.css";

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
            <SlideCard image="https://user-images.githubusercontent.com/61336548/119431014-2e4a7c00-bce8-11eb-8e2d-64be0c2a7a99.png" />
            <h2 className="slidecard-title"><strong>Alptext:</strong> create ready-to-use scientific manuscripts on your phone</h2>
          </div>
          <div>
            <SlideCard image="https://user-images.githubusercontent.com/61336548/129221921-8a186711-e52a-4f5e-9b0c-75dce37db5ec.png" />
            <h2 className="slidecard-title"><strong>SpinNews:</strong> app developed to the RN developer role for SpinTec</h2>
          </div>
          <div>
            <SlideCard image="https://user-images.githubusercontent.com/61336548/120241426-18cdd880-c239-11eb-911d-ff831a1ced5b.png"/>
            <h2 className="slidecard-title"><strong>drpersonal:</strong> create training schedules and exercise prescriptions from your phone!</h2>
          </div>
          <div>
            <SlideCard image="https://user-images.githubusercontent.com/61336548/141704520-cc9b6e0f-2d25-40e2-b9ef-18eb582e7f01.png"/>
            <h2 className="slidecard-title"><strong>Laiane Souto Nutricionista:</strong> nutritionist comercial website</h2>
          </div>
        </Slider>
      </div>
    );
  }
}
