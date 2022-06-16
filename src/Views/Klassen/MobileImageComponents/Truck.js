import React from "react";

import styles from "../../Klassen/fschein-classes.module.scss";

import truck from "../../Klassen/Gallery/Static/semis.png";

const Truck = () => {
  return (
    <img className={styles["mobile-bg-img"]} alt="Truck" src={truck}></img>
  );
};

export default Truck;
