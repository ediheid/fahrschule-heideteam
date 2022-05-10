import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../fschein-classes.module.scss";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";

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
import car from "../Slideshow/Static/car.png";
import car2 from "../Slideshow/Static/car2.png";
import car4 from "../Slideshow/Static/car4.png";
import car5 from "../Slideshow/Static/car5.png";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    { img: img1, id: 0, alt: "Motorcycle with night sky background" },
    {
      img: img2,
      id: 1,
      alt: "Motorbikes outside garage with Heideteam Fahrschule sign above",
    },
    {
      img: img3,
      id: 2,
      alt: "White car on obstacle course with water spraying",
    },
    { img: img4, id: 3, alt: "Front view of black Skoda" },
    {
      img: img5,
      id: 4,
      alt: "Black car with Fahrschule Heideteam logos in field",
    },

    {
      img: car,
      id: 5,
      alt: "Close up of black car with Fahrschule Heideteam logos in field",
    },
    { img: car2, id: 6, alt: "Close up of hood of black car and SEAT logo" },
    {
      img: car4,
      id: 7,
      alt: "Side view of white car with Fahrschule Heideteam logos",
    },
    {
      img: car5,
      id: 8,
      alt: "Side view of white car with Fahrschule Heideteam logos",
    },

    {
      img: img6,
      id: 9,
      alt: "Side view of silver VW van with Fahrschule Heideteam logos",
    },
    {
      img: img7,
      id: 10,
      alt: "Side view of silver VW van with Fahrschule Heideteam logos with trailer on the back",
    },
    { img: img8, id: 11, alt: "Grey fsd truck" },
    {
      img: img9,
      id: 12,
      alt: "Two semi trailers turning a corner on the road",
    },
    { img: img10, id: 13, alt: "Silver coach bus on country road" },
    {
      img: img11,
      id: 14,
      alt: "Tractor with wagon on the back driving on a country road",
    },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "80%",
      maxWidth: "100rem",
      backgroundColor: "white",
      border: "none",
    },
  };

  const length = images.length;

  //
  const openModal = () => {
    console.log("TEST", images.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(images) || images.length <= 0) {
  //   return null;
  // }

  return (
    <div className={styles["gallery-img-container"]} id="galerie">
      <h2 className={styles["gallery-heading"]}>Galerie</h2>

      {images.map((image) => {
        return (
          <img
            src={image.img}
            alt={image.alt}
            className={styles["gallery-img"]}
            // ! For modal..
            //  Index for modal is set here with 'Current' state hook
            onClick={() => openModal(setCurrent(image.id))}
          ></img>
        );
      })}

      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles["modal-content-container"]}>
          <button onClick={closeModal} className={styles["close-modal-button"]}>
            <RiCloseCircleFill />
          </button>

          <button onClick={nextSlide} className={styles["next-button"]}>
            <BiChevronsRight />
          </button>
          <button onClick={previousSlide} className={styles["previous-button"]}>
            <BiChevronsLeft />
          </button>

          <img
            className={styles["modal-img"]}
            src={images[current].img}
            // Alt tag is in gallery view
            alt=""
          ></img>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
