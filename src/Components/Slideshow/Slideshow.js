import React from "react";

import Slider from "react-slick";
import Car from "../Slideshow/Static/car.png";
import Motorcycle from "../Slideshow/Static/motorcycle.png";
import Truck from "../Slideshow/Static/truck2.png";

import styles from "../Slideshow/slideshow.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,
    // cssEase: "linear",

    // ! Not sure about pause or not?
    pauseOnHover: true,
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
        alt="Man Truck"
      ></img>
    </Slider>
  );
};

export default Slideshow;
