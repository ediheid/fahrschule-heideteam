import React, { useEffect } from "react";

import styles from "../Team/team.module.scss";

import FlipCard from "./Flipcard";

// Import individual team photos
import examplePhoto from "../Team/Static/example-headshot.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

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

      backInfoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla arcu nisl, eu pellentesque enim aliquam in. Etiam lobortis orci et eros dapibus lacinia. Vivamus quis lacinia massa, vitae dignissim elit. Curabitur ut magna efficitur metus hendrerit fermentum. Cras sed nunc ligula. Nunc a luctus ligula. Nam faucibus",
    },

    // ? Jörg
    {
      id: "2",
      // Img from import
      // Alt tag updates with name
      img: examplePhoto,
      name: "Jörg Seeberger",
      duties: "PKW / Moped",

      backInfoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla arcu nisl, eu pellentesque enim aliquam in. Etiam lobortis orci et eros dapibus lacinia. Vivamus quis lacinia massa, vitae dignissim elit. Curabitur ut magna efficitur metus hendrerit fermentum. Cras sed nunc ligula. Nunc a luctus ligula. Nam faucibus",
    },

    {
      id: "3",
      img: examplePhoto,
      name: "TEST",
      duties: "TEST",

      backInfoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla arcu nisl, eu pellentesque enim aliquam in. Etiam lobortis orci et eros dapibus lacinia. Vivamus quis lacinia massa, vitae dignissim elit. Curabitur ut magna efficitur metus hendrerit fermentum. Cras sed nunc ligula. Nunc a luctus ligula. Nam faucibus",
    },
  ];

  return (
    <div data-aos="fade-up" className={styles["team-page-container"]}>
      {/*  // Todo: Waiting for text */}
      {/* <p>Longer about text will go here..</p> */}
      <h2 className={styles["heading"]}>
        {" "}
        <span>Meet the</span> Team
      </h2>
      <div className={styles["heading-underline"]}></div>

      <div className={styles["cards-container"]}>
        {/*  Cards are mapped here from array - passed into FlipCard*/}
        {cards.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Team;
