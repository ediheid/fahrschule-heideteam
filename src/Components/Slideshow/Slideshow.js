import React from "react";

import Slider from "react-slick";

// !Override of slick-carousel styling, all styles marked as !important to make sure they stick
import "../Slideshow/dots.scss";

import Car from "../Slideshow/Static/car.png";
import Motorcycle from "../Slideshow/Static/motorcycle.png";
import Truck from "../Slideshow/Static/blue-truck.png";

import styles from "../Slideshow/slideshow.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    fade: true,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <img
        className={styles["slideshow-image"]}
        src={Car}
        alt="Black car with Hedidteam logo"
      ></img>
      <img
        className={styles["slideshow-image"]}
        src={Motorcycle}
        alt="Motorcycle at night"
      ></img>
      <img
        className={styles["slideshow-image"]}
        src={Truck}
        alt="Trailer truck created by aleksandarlittlewolf - www.freepik.com"
      ></img>
    </Slider>
  );
};

export default Slideshow;
