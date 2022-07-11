import React from "react";
import image3 from "./image/image3.png";
import Content from "../ImageWithText/Content";
import "./selling.css";
import image4 from "./image/image4.jpg"
import { TbBed, TbBath, TbCar, TbSquare } from "react-icons/tb";
const Selling = () => {
  const headingData = [
    {
      about: "About us",
      sectionTitle: "The Leading Real Estate Rental Marketplace",
      titleText:
        "Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services",
    },
  ];
  return (
    <>
      <div className="imagetext-wrapper main-selling">
        <div className="container">
          <div className="imageText__wrapper">
            <div className="text-container">
              <Content arrayData={headingData} />
              <ul class="selling text-container-list">
                <li>
                  <p>Smart Home Design</p>
                </li>
                <li>
                  <p>B eautiful Scene Around</p>
                </li>
                <li>
                  <p>Exceptional Lifestyle</p>
                </li>
                <li>
                  <p>Complete 24/7 Security</p>
                </li>
              </ul>
              <ul className="selling-service">
                <li>
                    <p>3<TbBath /></p><span>bedrooms</span>
                </li>
                <li>
                    <p>3<TbCar /></p><span>bedrooms</span>
                </li>
                <li>
                    <p>3<TbSquare /></p><span>bedrooms</span>
                </li>
                <li>
                    <p>3<TbBed /></p><span>bedrooms</span>
                </li>  
              </ul>
              <ul className="selling__image">
                <li>
                    <a>
                        <img src={image4} alt="" />
                    </a>
                </li>
                <li>
                    <a>
                        <img src={image4} alt="" />
                    </a>
                </li>
                <li>
                    <a>
                        <img src={image4} alt="" />
                    </a>
                </li>
              </ul>
            </div>
            <div className="image-container">
              <div className="right--image">
                <img src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selling;
