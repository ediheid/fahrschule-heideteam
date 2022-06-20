import React from "react";

import styles from "../../Klassen/fschein-classes.module.scss";

import truck from "../../Klassen/Static/truck-bg.png";

const Truck = () => {
  return (
    <img
      className={styles["mobile-bg-img"]}
      alt="Truck driver created by aleksandarlittlewolf - www.freepik.com"
      src={truck}
    ></img>
  );
};

export default Truck;
