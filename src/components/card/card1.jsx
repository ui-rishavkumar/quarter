import React from "react";
import cardimage1 from "./images/cardimage1.png";

import './card.css';
const Carddata = [
  {
    cardimage1:cardimage1 ,
    cardheading: "Buy a home",
    cardtext: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    card__link: "",
  },
  {
    cardimage1:cardimage1 ,
    cardheading: "Rent a home",
    cardtext: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    card__link: "",
  },
  {
    cardimage1:cardimage1 ,
    cardheading: "Sell a home",
    cardtext: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    card__link: "",
  },
];
const Card1 = () => {
  return (
    <>
      {Carddata.map((items) => {
        return (
          <>
          <div className="card">
            <div className="card-info">
              <div className="card__image">
                <img src={items.cardimage1} alt="" />
              </div>
              <div className="card-text">
                <h3 className="card-heading">{items.cardheading}</h3>
                <p>
                 {items.cardtext}
                </p>
                <a className="card__link" href="">
                  learn more
                </a>
              </div>
            </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Card1;
