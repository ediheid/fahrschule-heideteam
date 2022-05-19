import React from "react";

import styles from "../../Klassen/fschein-classes.module.scss";

import car from "../../Klassen/Static/car-bg.png";

const Car = () => {
  return <img className={styles["mobile-bg-img"]} alt="car" src={car}></img>;
};

export default Car;
