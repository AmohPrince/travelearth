import React from "react";
import "./Trips.css";

//category is an object containg the trip type and the background img
const Trips = ({ theme, category }) => {
  // const tripImage = document.querySelector(".Trips__container");

  return (
    <div
      className="Trips__container flex__container-v"
      style={{
        backgroundImage: `url(${category.bgImage})`,
      }}
    >
      <div
        className="Trips__absolute flex__container-v"
        style={{
          backgroundColor: theme.tripsColor,
        }}
      >
        <div className="Trips__text">
          <p className="p__poppins">{category.type}</p>
        </div>
        <div className="Trips__button">
          <p className="p__poppins">Start trip today </p>
        </div>
      </div>
    </div>
  );
};

export default Trips;
