import React from "react";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import Content from "./Content";
import  "./imageText.css";
import { FaHouseUser,FaMountain,FaHeartbeat,FaPlay} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import Button from "../button/button";
const Marketplace = () => {
  const headingData = [
    {
        about:'Welcome',
        sectionTitle:'Rishav The Leading Real Estate Rental Marketplace',
        titleText:'Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services'
    }
];
  return (
    <>
      <div className="imagetext-wrapper">
        <div className="container">
          <div className="imageText__wrapper">
            <div className="image-container">
              <div className="right--image">
                <img src={image1} alt="" />
                <div className="left--image">
                  <img src={image2} alt="" />
                  <a className="videoPlay pulse1"><FaPlay /></a>
                </div>
              </div>
            </div>
            <div className="text-container">
              <Content arrayData={headingData}/>
              <ul class="text-container-list">
                                <li><span className='ImgText--icon'><FaHouseUser /></span><p>Smart Home Design</p></li>
                                <li><span className='ImgText--icon'><FaMountain /></span><p>Beautiful Scene Around</p></li>
                                <li><span className='ImgText--icon'><FaHeartbeat /></span><p>Exceptional Lifestyle</p></li>
                              <li><span className='ImgText--icon'><RiSecurePaymentLine /></span><p>Complete 24/7 Security</p></li>
                            </ul>
              <div class="text__callout ">
                <p>
                  "Enimad minim veniam quis nostrud exercitation llamco laboris.
                  Lorem ipsum dolor sit amet"{" "}
                </p>
              </div>
              <div class="btn-wrapper text__btn">
              <Button type="primary" content="Our Services"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Marketplace;
