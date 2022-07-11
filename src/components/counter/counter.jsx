import React, { useState } from "react";
import { TbPageBreak } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import "./counter.css";
import VisibilitySensor from "react-visibility-sensor";

import CountUp from "react-countup";
const CounterData = [
  {
    counterimg: <TbPageBreak />,
    counterNo: 500,
    counterText: "total area sq",
  },
  {
    counterimg: <HiOutlineOfficeBuilding />,
    counterNo: 200,
    counterText: "Apartments Sold",
  },
  {
    counterimg: <GiFoodTruck />,
    counterNo: 600,
    counterText: "Total Constructions",
  },
  {
    counterimg: <MdOutlineChair />,
    counterNo: 700,
    counterText: "Apartio Rooms",
  },
];
const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <>
      <div className="counter-wrapper">
        <div className="container">
          <div className="main-counter--container">
            {CounterData.map((items) => {
              return (
                <>
                  <div className="counter__wrap">
                    <div className="counter--img">
                      <span>{items.counterimg}</span>
                    </div>
                    <h2 className="counter__no">
                      {" "}
                      <CountUp
                      suffix="+"
                        start={viewPortEntered ? null : 0}
                        end={items.counterNo}
                      >
                        {({ countUpRef }) => {
                          return (
                            <VisibilitySensor
                              active={!viewPortEntered}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setViewPortEntered(true);
                                }
                              }}
                              delayedCall
                            >
                              <h4 ref={countUpRef} />
                            </VisibilitySensor>
                          );
                        }}
                      </CountUp>
                  
                    </h2>
                    <p className="counter__text">{items.counterText}</p>
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
export default Counter;
