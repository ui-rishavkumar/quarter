import React from "react";
import Content from "../ImageWithText/Content";
import "./card.css";
import Card1 from "./card1";
const Card = () => {
  const headingData = [
    {
      about: "Our service",
      sectionTitle: "Our main focus",
      titleText: "",
    },
  ];
  return (
    <>
      <div className="main-card">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>
          <div className="card_section">
          <Card1 />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
