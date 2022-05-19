import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

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
import KlasseD from "./KlasseD";
import KlasseD1 from "./KlasseD1";
import KlasseT from "./KlasseT";
import Gallery from "./Gallery/Gallery";

// Mobile bg image Components

import Motorbike from "../Team/MobileImageComponents/Motorbike";
import Car from "../Team/MobileImageComponents/Car";
import Truck from "../Team/MobileImageComponents/Truck";
import Bus from "../Team/MobileImageComponents/Bus";
import Tractor from "../Team/MobileImageComponents/Tractor";

const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // Submenu with hashlinks to class sections */}
      <SubMenu />

      {/* Section A */}
      <div className={styles["section-a"]}>
        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Motorbike />

        {/* // ? Klasse A */}
        <KlasseA />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Motorbike />

        {/* // ? Klasse A1 */}
        <KlasseA1 />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Motorbike />

        {/* // ? Klasse A2 */}
        <KlasseA2 />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Motorbike />

        {/* // ? Klasse AM */}
        <KlasseAM />
      </div>

      {/* Section B */}
      <div className={styles["section-b"]}>
        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Car />

        {/*  // ? Klasse B / B197 */}
        <KlasseB />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Car />

        {/* Klasse BE */}
        <KlasseBE />
      </div>

      {/* Section C */}
      <div className={styles["section-c"]}>
        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Truck />

        {/* // ? Klasse C */}
        <KlasseC />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Truck />

        {/* // ? Klasse C1 */}
        <KlasseC1 />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Truck />

        {/* // ? Klasse C1E */}
        <KlasseC1E />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Truck />

        {/* // ? Klasse CE */}
        <KlasseCE />
      </div>

      {/* Section D */}
      <div className={styles["section-d"]}>
        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Bus />

        {/* // ? Klasse D */}
        <KlasseD />

        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Bus />

        {/* // ? Klasse D1 */}
        <KlasseD1 />
      </div>

      {/* Section T */}
      <div className={styles["section-t"]}>
        {/* Mobile background img component - desktop images are set in style sheet as fixed background images */}
        <Tractor />

        {/* // ? Klasse T */}
        <KlasseT />
      </div>

      <Gallery />
    </div>
  );
};

export default FscheinClasses;
