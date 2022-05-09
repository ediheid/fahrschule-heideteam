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

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    { img: img1, id: 0, alt: "testing ojsdknfvasd vkjn" },
    { img: img2, id: 1, alt: "testing ojsdknfvasd vkjn" },
    { img: img3, id: 2, alt: "testing ojsdknfvasd vkjn" },
    { img: img4, id: 3, alt: "testing ojsdknfvasd vkjn" },
    { img: img5, id: 4, alt: "testing ojsdknfvasd vkjn" },
    { img: img6, id: 5, alt: "testing ojsdknfvasd vkjn" },
    { img: img7, id: 6, alt: "testing ojsdknfvasd vkjn" },
    { img: img8, id: 7, alt: "testing ojsdknfvasd vkjn" },
    { img: img9, id: 8, alt: "testing ojsdknfvasd vkjn" },
    { img: img10, id: 9, alt: "testing ojsdknfvasd vkjn" },
    { img: img11, id: 10, alt: "testing ojsdknfvasd vkjn" },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

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
