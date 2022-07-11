import React, { useState } from "react";
import Content from "../ImageWithText/Content";
import tab1 from "./image/tab1.png";
import "./Tab.css";
import TabData from "./tabData";
const Tabs = () => {
  const [toggleState , setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index)
  }
  const headingData = [
    {
      about: "Apartment sketch",
      sectionTitle: "Apartment plan",
      titleText: "",
    },
  ];
  return (
    <>
      <div className="tab-section">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>
          <div className="tab__links">
            {TabData.map((items,index)=>{
              return(
                <>
                <div className="cus-tab">
                <div className={toggleState ===index ? "tabs active-tab" : "tabs"} onClick={() => toggleTab(index)}>{items.tabhead}</div>
                </div>
                </>
              )
            })}
            
            
          </div>
          {TabData.map((items,index)=>{ 
            return(
              <>
              <div className={toggleState === index ? "tab__content active-tab" : "tab__contents"}>
          <div className="tab__content">
            <div className="tab-info-wrapper">
              <div class="tab-plan-info ">
                <h2>{items.tabhead}</h2>
                <p>
                  {items.tabpara}
                </p>
                <div class="tab-info-list">
                  <ul>
                  
                    <li>
                      <label>{items.featured1}</label>
                      <span>{items.featuredValue1}</span>
                    </li>
                    <li>
                      <label>{items.featured2}</label>
                      <span>{items.featuredValue2}</span>
                    </li>
                    <li>
                      <label>{items.featured3}</label>
                      <span>{items.featuredValue3}</span>
                    </li>
                    <li>
                      <label>{items.featured4}</label>
                      <span>{items.featuredValue4}</span>
                    </li>
                    <li>
                      <label>{items.featured5}</label> <span>{items.featuredvalue5}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-img-wrapper">
              <div className="tab-info-img">
                <img src={tab1} alt="" />
              </div>
              </div>
            </div>
          </div>
              </>
            )
          })}
          
          
        </div>
      </div>
    </>
  );
};
export default Tabs;
