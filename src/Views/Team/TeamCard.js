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
          // Custom styling for Nancy's photo - object position: top
          id={styles[card.customStyle]}
        ></img>
      </div>

      <div className={styles["text-container"]}>
        <h4>{card.name}</h4>
        <h5>{card.duties}</h5>

        {/* Phone */}
        <a
          className={styles["phone-number"]}
          href={`tel:${card.phoneNumber}`}
          alt="Click to call"
        >
          {" "}
          <span>{card.displayNumber}</span>
        </a>

        {/* Email */}
        <a
            className={styles["email-link"]}
            href={`mailto:${card.email}`}
            alt="email link"
            target="_blank"
            rel="noopener noreferrer"
          >
         <span>{card.email}</span>
          </a>
      </div>
    </div>
  );
};

export default TeamCard;
