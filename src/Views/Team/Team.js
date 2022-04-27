import React from "react";

import styles from "../Team/team.module.scss";

import FlipCard from "./Flipcard";

// Import individual team photos
import examplePhoto from "../Team/Static/example-headshot.png";

const Team = () => {
  // Add individual card data here that will be mapped below
  const cards = [
    // ? Wolli
    {
      id: "1",
      // Img from import
      // Alt tag updates with name
      img: examplePhoto,
      name: "Wolfgang Franke",
      duties: "PKW / LKW / Bus",

      back: "back test",
    },

    // ? Jörg
    {
      id: "2",
      // Img from import
      // Alt tag updates with name
      img: examplePhoto,
      name: "Jörg Seeberger",
      duties: "PKW / Moped",

      back: "back test",
    },

    {
      id: "3",
      img: examplePhoto,
      name: "TEST",
      duties: "TEST",

      back: "back test",
    },
  ];

  return (
    <>
      <div className={styles["team-page-container"]}>
        {/*  // Todo: Waiting for text */}
        {/* <p>Longer about text will go here..</p> */}
        <h2 className={styles["heading"]}>Meet the team</h2>

        <div className={styles["cards-container"]}>
          {/*  Cards are mapped here from array - passed into FlipCard*/}
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
