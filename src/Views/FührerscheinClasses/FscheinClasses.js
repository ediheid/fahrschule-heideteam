import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import SubMenu from "./SubMenu";
import KlasseA from "./KlasseA";
import KlasseA1 from "./KlasseA1";
import KlasseA2 from "./KlasseA2";
import KlasseAM from "./KlasseAm";
import KlasseB from "./KlasseBAndB197";
import KlasseBE from "./KlasseBE";
import KlasseC from "./KlasseC";
import KlasseC1 from "./KlasseC1";
import KlasseC1E from "./KlasseC1E";
import KlasseCE from "./KlasseCE";

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

      {/* Section A */}
      <div className={styles["section-a"]}>
        {/* Klasse A */}
        <KlasseA />

        {/* Klasse A1 */}
        <KlasseA1 />

        {/* Klasse A2 */}
        <KlasseA2 />

        {/* Klasse AM */}
        <KlasseAM />
      </div>

      {/* Section B */}
      <div className={styles["section-b"]}>
        {/* Klasse B / B197 */}
        <KlasseB />

        {/* Klasse BE */}
        <KlasseBE />
      </div>

      {/* Section C */}
      <div className={styles["section-c"]}>
        {/* Klasse C */}
        <KlasseC />

        {/* Klasse C1 */}
        <KlasseC1 />

        {/* Klasse C1E */}
        <KlasseC1E />

        {/* Klasse CE */}
        <KlasseCE />
      </div>
    </div>
  );
};

export default FscheinClasses;
