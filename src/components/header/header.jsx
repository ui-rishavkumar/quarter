import React, { useState ,useEffect } from "react";
import "./header.css";
import logo from "./image/logo.png";
import { FaSistrix, FaRegUser } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
const lists = [
  {
    menu: "Home",
    icon: "+",
    link: "https://google.com ",
  },
  {
    menu: "About",
    icon: "+",
    link: "https://youtube.com ",
  },
  {
    menu: "shop",
    icon: "+",
    link: "https://google.com ",
  },
  {
    menu: "news",
    icon: "+",
    link: "https://google.com ",
  },
  {
    menu: "pages",
    icon: "+",
    link: "https://google.com ",
  },
  {
    menu: "Contact",
    icon: "",
    link: "https://google.com ",
  },
];
// const icons =[
//     {
//         icon:
//     }
// ]
const Header = () => {
  const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 400)
        });
    })
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <header className= {`${scroll? `header sticky--header` : "header"}`}>
        <div className="container">
          <div className="main-header">
            <div className="logo">
              <a href="">
                <img src={logo} alt=""></img>
              </a>
            </div>
            <div className="header-menu">
              <ul className="menu-list">
                {lists.map((item, index) => {
                  return (
                    <>
                      <li className="menu_list">
                        {" "}
                        <a href={item.link}>
                          {item.menu} <span>{item.icon}</span>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            {/* <ul>
        {icon.map((item,index)=>{
                return(
                    <>
                    <li>{item.menu}</li>
                    </>
                )
            })} 
        </ul> */}
            <div className="header-icons">
              <div className="search-wrap icon">
                <div className="search-icon h--icons">
                  <FaSistrix />
                </div>
              </div>
              <div className="user-wrap icon ">
                <div className="user-icon h--icons">
                  <FaRegUser />
                </div>
              </div>
              <div className="cart-wrap icon">
                <div className="cart-icon h--icons">
                  <CgShoppingCart />
                </div>
              </div>
              <div className="mob-toggle">
                <div className="icon">
                  <div className="mob-togle-icon h--icons" onClick={ToggleSidebar}>
                    <GiHamburgerMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar ToggleSidebar={()=>ToggleSidebar()} isOpen={isOpen}/>
        
      </header>
    </>
  );
};
export default Header;
export {lists};
