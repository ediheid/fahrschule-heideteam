import React from "react";

import styles from "../../Klassen/fschein-classes.module.scss";

import motorbike from "../../Klassen/Static/motorcycle.png";

const Motorbike = () => {
  return (
    <img
      className={styles["mobile-bg-img"]}
      alt="motorbike"
      src={motorbike}
    ></img>
  );
};

export default Motorbike;
