import React from "react";

import styles from "../Team/team.module.scss";

import FlipCard from "./Flipcard";

// Import individual team photos
import examplePhoto from "../Team/Static/example-headshot.png";

const Team = () => {
  // Add individual card data here that will be mapped below
  const cards = [
    {
      id: "1",
      // Img from import
      // Alt tag updates with name
      img: examplePhoto,
      name: "Jörg Seeberger",
      duties: "PKW / Moped",

      back: "back test",
    },

    {
      id: "2",
      img: examplePhoto,
      name: "TEST",
      duties: "TEST",

      back: "back test",
    },
  ];

  return (
    <>
      <div className={styles["team-page-container"]}>
        <p>Longer about text will go here..</p>
        <h2>Meet the team</h2>
        <div className={styles["cards-container"]}>
          <div className={styles["cards"]}>
            <div className={styles["header-bg"]}>
              {" "}
              <img
                src={examplePhoto}
                alt="headshot"
                className={styles["profile-photo"]}
              ></img>
            </div>

            <div className={styles["text-container"]}>
              <h4>Wolfgang Franke</h4>
              <h5>PKW / LKW / Bus</h5>
              <button>More</button>
            </div>
          </div>

          {/*  Testing card mapping here */}

          <div>
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
