import React from "react";

import Slider from "react-slick";

import styles from "../fschein-classes.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import img1 from "../Slideshow/Static/1.png";
import img2 from "../Slideshow/Static/2.png";
import img3 from "../Slideshow/Static/3.png";
import img4 from "../Slideshow/Static/4.png";
import img5 from "../Slideshow/Static/5.png";
import img6 from "../Slideshow/Static/6.png";
import img7 from "../Slideshow/Static/7.png";
import img8 from "../Slideshow/Static/8.png";
import img9 from "../Slideshow/Static/9.png";
import img10 from "../Slideshow/Static/10.png";
import img11 from "../Slideshow/Static/11.png";

const Gallery = () => {
  const settings = {
    dots: true,
    arrows: false,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    adaptiveHeight: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
          variableWidth: false,
        },
      },
    ],
  };

  const images = [
    { img: img1, alt: "testing ojsdknfvasd vkjn" },
    { img: img2, alt: "testing ojsdknfvasd vkjn" },
    { img: img3, alt: "testing ojsdknfvasd vkjn" },
    { img: img4, alt: "testing ojsdknfvasd vkjn" },
    { img: img5, alt: "testing ojsdknfvasd vkjn" },
    { img: img6, alt: "testing ojsdknfvasd vkjn" },
    { img: img7, alt: "testing ojsdknfvasd vkjn" },
    { img: img8, alt: "testing ojsdknfvasd vkjn" },
    { img: img9, alt: "testing ojsdknfvasd vkjn" },
    { img: img10, alt: "testing ojsdknfvasd vkjn" },
    { img: img11, alt: "testing ojsdknfvasd vkjn" },
  ];

  return (
    <div className={styles["slideshow-img-container"]}>
      <Slider {...settings}>
        {" "}
        {images.map((image) => {
          return (
            <img
              src={image.img}
              alt={image.alt}
              className={styles["slideshow-img"]}
            ></img>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
