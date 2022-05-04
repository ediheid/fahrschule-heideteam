import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

// Card Components
import PkwCard from "./PkwCard";
import PkwAnhaengerCard from "./PkwAnhaengerCard";
import MotorradCard from "./MotorradCard";
import LkwCard from "./LkwCard";
import BusCard from "./BusCard";
import TraktorCard from "./TraktorCard";

// Icons

// Every second card has the image to the right
const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      <div className={styles["classes-sub-menu"]}>
        {/* // Todo: Hashlinks ready to setup to sections once implemented */}
        <ul>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>A</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            {" "}
            <li>A1</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>A2</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            {" "}
            <li>AM</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            {" "}
            <li>B / B197</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>BE</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>C</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            {" "}
            <li>C1</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            {" "}
            <li>C1E</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>CE</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>D</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>D1</li>
          </HashLink>
          <HashLink to="/" className={styles["hashlink"]}>
            <li>T</li>
          </HashLink>
        </ul>
      </div>

      {/* // ? PKW */}

      {/* <PkwCard /> */}

      {/* // ? PKW PLUS */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      {/* <PkwAnhaengerCard /> */}

      {/* // ? Motorcycle */}
      {/* <MotorradCard /> */}

      {/* // ? LKW */}
      {/* // ! Right */}
      {/* <LkwCard /> */}

      {/* // ? Bus */}
      {/* // Todo: Need new image */}
      {/* <BusCard /> */}

      {/* // ? Traktor */}
      {/* // ! Right */}
      {/* <TraktorCard /> */}
    </div>
  );
};

export default FscheinClasses;
