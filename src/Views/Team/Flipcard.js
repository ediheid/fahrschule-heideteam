import React from "react";

import styles from "../Team/team.module.scss";

import examplePhoto from "../Team/Static/example-headshot.png";

const FlipCard = ({ card }) => {
  return (
    <div className={styles["cards"]}>
      {/* // ! Card inner start */}
      <div className={styles["flip-card-inner"]}>
        {/*  // ! Card front start */}
        <div className={styles["card-front"]}>
          <div className={styles["header-bg"]}>
            {" "}
            <img
              src={examplePhoto}
              alt="headshot"
              className={styles["profile-photo"]}
            ></img>
          </div>
          <div className={styles["text-container"]}>
            <h4>{card.name}</h4>
            <h5>{card.duties}</h5>
            <button>More</button>
          </div>

          {/* // ? Card back */}
          <div className={styles["card-back"]}>
            <p>{card.back}</p>
          </div>

          {/* // ? Card back inside here */}

          {/* // ! Card front end below */}
        </div>

        {/* // ! Inner ends below */}
      </div>
    </div>
  );
};

export default FlipCard;
