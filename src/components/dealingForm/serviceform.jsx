import React from "react";
import Button from "../button/button";
import './service.css';
import {selectArr1 , selectArr2 ,selectArr3} from './servicedata';
// import FaAngleDown from "react-icons/fa";
const Dealer = () => {

  return (
    <>
      <div className="dropDownFind_container">
        <div className="container">
          <form className="drop-form" action="/action_page.php">
          <select className="drop__select">
          {selectArr1.map((items)=>{
            return<>
              <option value={items.options}>{items.options}</option>
           
            </>
          })
          }
          </select>

          <select className="drop__select">
          {selectArr2.map((items)=>{
            return<>
              <option value={items.options}>{items.options}</option>
              
            </>
          })
          }
          </select>
          <select className="drop__select">
          {selectArr3.map((items)=>{
            return<>
              <option value={items.options}>{items.options}</option>
           
            </>
          })
          }
          </select>


           <Button type="primary" content="Find Now"/>
          </form>
        </div>
      </div>
    </>
  );
};
export default Dealer;
