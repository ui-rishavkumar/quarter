import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./aminities.css";
import Content from "../ImageWithText/Content";
import AminitiesData from "./aminitiesdata";
const AminitiesCategory = () => {
  const headingData = [
    {
      about: "Our aminities",
      sectionTitle: "Building Aminities",
      titleText: "",
    },
  ];
  return (
    <>
      <div className="aminities-wrapper">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>
          <div className="animities--box">
            {AminitiesData.map((items) => {
              return (
                <>
                  <div className="aminities_section">
                    <a href="#">
                      <div class="aminities-icon">{items.icon}</div>
                      <span class="aminities-title">{items.title}</span>
                      <span class="aminities-btn">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default AminitiesCategory;
