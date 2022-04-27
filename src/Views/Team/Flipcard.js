import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

import styles from "../Team/team.module.scss";

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
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
          <button onClick={handleClick}>More</button>
        </div>
      </div>

      <div className={styles["cards"]}>
        This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>

    // <div className={styles["cards"]}>
    //   {/* // ! Card inner start */}
    //   <div className={styles["flip-card-inner"]}>
    //     {/*  // ! Card front start */}
    //     <div className={styles["card-front"]}>
    //       <div className={styles["header-bg"]}>
    //         {" "}
    //         <img
    //           src={card.img}
    //           alt={`Headshot of ${card.name}`}
    //           className={styles["profile-photo"]}
    //         ></img>
    //       </div>
    //       <div className={styles["text-container"]}>
    //         <h4>{card.name}</h4>
    //         <h5>{card.duties}</h5>
    //         <button>More</button>
    //       </div>

    //       {/* // ! Card front end below */}
    //     </div>

    //     {/* // ? Card back */}
    //     <div className={styles["card-back"]}>
    //       <p>{card.back}</p>
    //     </div>

    //     {/* // ! Inner ends below */}
    //   </div>
    // </div>
  );
};

export default FlipCard;
