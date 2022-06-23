import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../fschein-classes.module.scss";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";

// Images
import motorbike from "../Gallery/Static/motorbike.png";
import bikes from "../Gallery/Static/bikes.png";
import course from "../Gallery/Static/obstacle-course.png";
import car1 from "../Gallery/Static/car1.png";
import car3 from "../Gallery/Static/car3.png";
import van from "../Gallery/Static/van.png";
import vanTrailer from "../Gallery/Static/van-trailer.png";
import semis from "../Gallery/Static/semis.png";
import bus from "../Gallery/Static/bus.png";
import tractor from "../Gallery/Static/tractor.png";
import car from "../Gallery/Static/car.png";
import car2 from "../Gallery/Static/car2.png";
import car4 from "../Gallery/Static/car4.png";
import car5 from "../Gallery/Static/car5.png";
import d1 from "../Gallery/Static/d1.png";
import am from "../Gallery/Static/am-1.png";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Current will be used to get set the image id from the index of the images array - set with onClick event for modal
  const [current, setCurrent] = useState(0);

  const images = [
    {
      img: motorbike,
      id: 1,
      alt: "Motorcycle with night sky background",
    },
    {
      img: am,
      id: 2,
      alt: "Front view of white dirt bike, class AM",
    },
    {
      img: bikes,
      id: 3,
      alt: "Motorbikes outside garage with Heideteam Fahrschule sign above",
    },

    {
      img: course,
      id: 4,
      alt: "White car on obstacle course with water spraying",
    },
    { img: car1, id: 5, alt: "Front view of black Skoda" },
    {
      img: car3,
      id: 6,
      alt: "Black car with Fahrschule Heideteam logos in field",
    },

    {
      img: car,
      id: 7,
      alt: "Close up of black car with Fahrschule Heideteam logos in field",
    },
    {
      img: car2,
      id: 8,
      alt: "Close up of hood of black car and SEAT logo",
    },
    {
      img: car4,
      id: 9,
      alt: "Side view of white car with Fahrschule Heideteam logos",
    },
    {
      img: car5,
      id: 10,
      alt: "Side view of white car with Fahrschule Heideteam logos",
    },

    {
      img: van,
      id: 11,
      alt: "Side view of silver VW van with Fahrschule Heideteam logos",
    },

    {
      img: vanTrailer,
      id: 12,
      alt: "Side view of silver VW van with Fahrschule Heideteam logos with trailer on the back",
    },

    // { img: truck, id: 14, alt: "White truck" },

    // { img: whiteTruck, id: 18, alt: "White truck" },
    {
      img: semis,
      id: 15,
      alt: "Two semi trailers turning a corner on the road",
    },
    {
      img: d1,
      id: 13,
      alt: "Black mini bus for class D1",
    },
    { img: bus, id: 16, alt: "Silver coach bus on country road" },
    {
      img: tractor,
      id: 17,
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

  // Handle open/close state of modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // variable and functions to click through modal slideshow
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles["gallery-img-container"]} id="galerie">
      <h2 className={styles["gallery-heading"]}>Galerie</h2>

      {/* Map 'images' for gallery */}
      {images.map((image, index) => {
        // set image id to index number
        image.id = index;

        return (
          <img
            src={image.img}
            alt={image.alt}
            className={styles["gallery-img"]}
            key={image.id}
            //  Index for modal is set here with 'Current' state hook using the index to set id
            onClick={() => openModal(setCurrent(image.id))}
          ></img>
        );
      })}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
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
