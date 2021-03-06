import React, { useContext } from "react";
import { AppContext } from "../../App";

import { BsTelephoneOutboundFill } from "react-icons/bs";

import styles from "../Header/header.module.scss";

const Phone = () => {
  // State Context from App.js
  const MobileNavContext = useContext(AppContext);

  return (
    <>
      <div
        className={styles["phone-container"]}
        onClick={MobileNavContext.closeNavOnClickAnywhere}
      >
        <a href="tel:+49-172-944-0174" alt="Click to call">
          {" "}
          <BsTelephoneOutboundFill className={styles["phone-icon"]} />
        </a>
        <a href="tel:+49-172-944-0174" alt="Click to call">
          {" "}
          <span className={styles["phone-number"]}> +49 172 944 0174</span>
        </a>
      </div>
    </>
  );
};

export default Phone;
