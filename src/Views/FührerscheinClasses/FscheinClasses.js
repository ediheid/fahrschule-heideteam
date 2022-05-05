import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import SubMenu from "./SubMenu";
import KlasseA from "./KlasseA";
import KlasseA1 from "./KlasseA1";
import KlasseA2 from "./KlasseA2";
import KlasseAM from "./KlasseAm";

// Card Components
import PkwCard from "./PkwCard";
import PkwAnhaengerCard from "./PkwAnhaengerCard";
import MotorradCard from "./MotorradCard";
import LkwCard from "./LkwCard";
import BusCard from "./BusCard";
import TraktorCard from "./TraktorCard";

// Every second card has the image to the right
const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // Submenu with hashlinks to class sections */}
      <SubMenu />

      {/* Klasse A */}
      <KlasseA />

      {/* Klasse A1 */}
      <KlasseA1 />

      {/* Klasse A2 */}
      <KlasseA2 />

      {/* Klasse AM */}
      <KlasseAM />
    </div>
  );
};

export default FscheinClasses;
