import React, { useState } from "react";

import styles from "../Team/team.module.scss";

const TeamCard = ({ card }) => {
  // Flip state
  // const [isFlipped, setIsFlipped] = useState(false);

  // Function for onClick event
  // const handleCardFlip = (event) => {
  //   event.preventDefault();
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div className={styles["cards"]}>
      <div className={styles["header-bg"]}>
        {" "}
        <img
          src={card.img}
          alt={`Headshot of ${card.name}`}
          className={styles["profile-photo"]}
        ></img>
      </div>

      <div className={styles["text-container"]}>
        <h4>{card.name}</h4>
        <h5>{card.duties}</h5>
        <button>Mehr</button>
      </div>
    </div>
  );
};

export default TeamCard;
