import React from "react";

import { BsTelephoneOutboundFill } from "react-icons/bs";

import styles from "../Header/header.module.scss";

const Phone = () => {
  return (
    <>
      <div className={styles["phone-container"]}>
        <a href="tel:+49-3528-226-9934" alt="Click to call">
          {" "}
          <BsTelephoneOutboundFill className={styles["phone-icon"]} />
        </a>
        <a href="tel:+49-3528-226-9934" alt="Click to call">
          {" "}
          {/* // Todo: hide on mobile devices */}
          {/* // ! Maybe on tablet? */}
          <span className={styles["phone-number"]}> +49 3528 226 9934</span>
        </a>
      </div>
    </>
  );
};

export default Phone;
