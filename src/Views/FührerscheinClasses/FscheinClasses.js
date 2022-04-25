import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

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
      {/* // ? PKW */}

      <PkwCard />

      {/* // ? PKW PLUS */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      <PkwAnhaengerCard />

      {/* // ? Motorcycle */}
      <MotorradCard />

      {/* // ? LKW */}
      {/* // ! Right */}
      <LkwCard />

      {/* // ? Bus */}
      {/* // Todo: Need new image */}
      <BusCard />

      {/* // ? Traktor */}
      {/* // ! Right */}
      <TraktorCard />
    </div>
  );
};

export default FscheinClasses;
