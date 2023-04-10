import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import slider1 from "../../img/maestro7.jpeg";
import slider2 from "../../img/maestro2.jpeg";
import slider3 from "../../img/maestro3.jpeg";
import slider5 from "../../img/maestro5.jpeg";
import slider6 from "../../img/maestro6.jpeg";
import slider7 from "../../img/maestro8.jpeg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
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
          <div>
            <img src={slider5} className="slider" alt="" />
          </div>
          <div>
            <img src={slider6} className="slider" alt="" />
          </div>
          <div>
            <img src={slider7} className="slider" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
