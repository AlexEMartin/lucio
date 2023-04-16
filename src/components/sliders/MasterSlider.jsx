import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import slider1 from "../../img/maestro4.jpg";
import slider2 from "../../img/maestro6.jpg";
import slider3 from "../../img/maestro7.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <div className="slider-container-master">
        <Slider {...settings}>
          <div>
            <img src={slider1} className="slider" alt="" />
          </div>
          <div>
            <img src={slider2} className="slider" alt="" />
          </div>
          <div>
            <img src={slider3} className="slider" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
