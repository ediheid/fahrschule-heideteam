import React from "react";

import styles from "../../Klassen/fschein-classes.module.scss";

import tractor from "../../Klassen/Static/tractor.png";

const Tractor = () => {
  return (
    <img className={styles["mobile-bg-img"]} alt="Tractor" src={tractor}></img>
  );
};

export default Tractor;
