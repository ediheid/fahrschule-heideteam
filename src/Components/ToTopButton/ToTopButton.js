import React, { useEffect, useState } from "react";

import { FaChevronCircleUp } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";

import styles from "../ToTopButton/to-top-button.module.scss";

const ToTopButton = () => {
  // The back-to-top button is hidden until user scrolls down
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={styles["back-to-top"]}>
          <FaChevronCircleUp />
          {/* &#8679; */}
          {/* <span>&#8963;</span> */}

          {/* <span>&#9650;</span> */}
          {/* 
          <span>
            {" "}
            <BsChevronUp />
          </span> */}
        </button>
      )}
    </>
  );
};

export default ToTopButton;
