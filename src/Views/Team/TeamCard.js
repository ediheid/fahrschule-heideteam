import React from "react";

import styles from "../Team/team.module.scss";

const TeamCard = ({ card }) => {
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
      </div>
    </div>
  );
};

export default TeamCard;
