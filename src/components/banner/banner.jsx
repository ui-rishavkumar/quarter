import React from "react";
import Button from "../button/button";
import banner1 from "./image/banner1.png";
import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight ,FaArrowLeft ,FaPlay ,FaHome} from "react-icons/fa";
const Info = [
  {
    id:1,
    icon: <FaHome />,
    btn:"any query",
    subheading: "hello world",
    heading: "Find your dream house by us",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
    play:<FaPlay />
  },
  {
    id:2,
    icon: <FaHome />,
    btn:"our service",
    btn1:"learn more",
    subheading: "hello rishav",
    heading: "Find your dream",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  }
];
const Banner = () => {
  var settings = {
    nav: true,
    arrow:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="prev"><FaArrowLeft /></div>,
     nextArrow: <div className="next"><FaArrowRight /></div>,
  };
  return (
    
    <>
     
      <div className="banner-section">

          <Slider {...settings}>
            {Info.map((items) => {
              let customClass;
                if(items.id === 2){
                    customClass='changeClass';
                }
                else{
                    customClass='';
                }
              return (
                <>
                <div className="container">
                  <div className="banner__wrapper">
                    <div className={`banner-info ${customClass}`}>
                      <h5 className="banner__info__subheading">
                        {items.icon}
                        <span>{items.subheading}</span>
                      </h5>
                      <h2 className="banner__content_heading">
                        {items.heading}
                      </h2>
                      <div className="banner-text ">
                        <p>{items.text}</p>
                      </div>
                      <div className="btn-wrapper">
                        <a>
                          <Button type="primary" content={items.btn}/>
                        </a>
                        {items.btn1!==undefined? <Button type="secondary" content={items.btn1}/> : null} 
                        {items.play!==undefined?  <a className="videoPlay">{items.play}</a>: null}
            
                      </div>
                    </div>
                    <div className="banner-image">
                      <img src={banner1} alt="" />
                    </div>
                  </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      
    </>
  );
};
export default Banner;

// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import Button from "../button/button";
// import banner1 from "./image/banner1.png";
// import "./banner.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const Info = [
//   {
//     icon: <FaMapMarkerAlt />,
//     subheading: "hello world",
//     heading: "Find your dream",
//     text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     subheading: "hello world",
//     heading: "Find your dream",
//     text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     subheading: "hello world",
//     heading: "Find your dream",
//     text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
//   },
// ];
// const Banner = () => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//   return (
//     <>
//     <div className="hero-banner">
//      <Slider {...settings}>
//       <div className="banner-section">
//         <div className="container">
//           {Info.map((items) => {
//             return (
//               <>
//                 <div className="banner__wrapper">
//                   <div className="banner-info">
//                     <h5 className="banner__info__subheading">
//                       {items.icon}
//                       <span>{items.subheading}</span>
//                     </h5>
//                     <h2 className="banner__content_heading">{items.heading}</h2>
//                     <div className="banner-text">
//                       <p>{items.text}</p>
//                     </div>
//                     <div className="btn-wrapper">
//                       <a>
//                         <Button />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="banner-image">
//                     <img src={banner1} alt="" />
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//       </Slider>
//       </div>
//     </>
//   );
// };
// export default Banner;
