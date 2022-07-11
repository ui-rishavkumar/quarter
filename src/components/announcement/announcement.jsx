
import React from "react";
import { FaRegEnvelope, FaMapMarkerAlt ,FaFacebookF ,FaTwitter ,FaInstagram ,FaDribbble } from  "react-icons/fa";
import "./announcement.css";
import Button from "../button/button";
const arr1 = [
  {
    icon: <FaRegEnvelope />,
    txt: "info@webmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    txt: "15A/Nest tower,NYC",
  },
];
const arr2 = [
  {
    socialIcon: <FaFacebookF />,
  },
  {
    socialIcon: <FaTwitter />,
  },
  {
    socialIcon: <FaInstagram />,
  },
  {
    socialIcon: <FaDribbble />,
  },
];
const Announce = () => {
  return (
    <>
      <div className="announce-wrapper">
        <div className="container">
          <div className="announcement-bar">
            <div className="left-announce">
              <ul className="announcement__list">
                {arr1.map((items) => {
                  return (
                    <>
                      <li>
                      <a href="#">
                        {items.icon} <span className="announe--text">{items.txt}</span> 
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="right-announce">
              <ul className="announcement__socialIcon">
                {arr2.map((items) => {
                  return (
                    <>
                      <li>{items.socialIcon}</li>
                    </>
                  );
                })}
              </ul>
              <div className="announce__button">
              <Button  width="full"  content="Add Listing"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Announce;
