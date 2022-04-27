import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

import styles from "../Team/team.module.scss";

const FlipCard = ({ card }) => {
  // Flip state
  const [isFlipped, setIsFlipped] = useState(false);

  // Function for onClick event
  const handleCardFlip = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* // ?Front Card */}

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
          <button onClick={handleCardFlip}>Mehr</button>
        </div>
      </div>

      {/* // ? Back Card */}

      <div className={styles["cards"]}>
        This is the back of the card.
        <button onClick={handleCardFlip}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
