import React from "react";

import styles from "../Team/team.module.scss";

import TeamCard from "./TeamCard";

// Import individual team photos
import wolli from "../Team/Static/wolli.png";
import joerg from "../Team/Static/joerg.png";
import jan from "../Team/Static/jan.png";
import peter from "../Team/Static/peter.png";
import michel from "../Team/Static/michel.png";

const Team = () => {
  // Add individual card data here that will be mapped below
  // Alt tag updates with name
  const cards = [
    // ? Wolli
    {
      id: "1",
      img: wolli,
      name: "Wolfgang Franke",
      duties: "Prokurist der Fahrschul GmbH & Ausbilder auf Nutzfahrzeugen",
    },

    // ? Jörg
    {
      id: "2",
      img: joerg,
      name: "Jörg Seeberger",
      duties: "Geschäftsführer & Leiter der Ausbildung",
    },

    // ? Robby

    {
      id: "3",
      // img: examplePhoto,
      name: "Robby Mittag",
      duties: "Ausbilder auf Nutzfahrzeugen",
    },

    // ? Jan

    {
      id: "3",
      img: jan,
      name: "Jan Säuberlich",
      duties: "Ausbilder für PKW & Motorrad",
    },

    // ? Peter

    {
      id: "3",
      img: peter,
      name: "Peter Wildner",
      duties: "Ausbilder für PKW & Motorrad",
    },

    // ? Michel

    {
      id: "3",
      img: michel,
      name: "Michel Klein",
      duties: "Aktueller Fahrlehreranwärter in Ausbildung für PKW",
    },

    // ? Nancy

    {
      id: "3",
      // img: examplePhoto,
      name: "Nancy Köhler",
      duties: "Die gute Seele im Büro (Organisation, Anmeldung etc.)",
    },

    // ? Lanë

    {
      id: "3",
      // img: examplePhoto,
      name: "Lanë",
      duties: "Büroschnuffi für Kundenbetreuung & Fahrlehrerüberwachung",
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
        {/*  Cards are mapped here from array - passed into TeamCard*/}
        {cards.map((card) => (
          <TeamCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Team;
