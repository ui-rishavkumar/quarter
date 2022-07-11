import React from "react";
import Content from "../ImageWithText/Content";
import "./testimonials.css";
import author from "../featured-collection/image/author.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = () => {
  var settings = {
    nav: true,
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding:'60px',
    prevArrow: (
      <div className="prev">
        <FaArrowLeft />
      </div>
    ),
    nextArrow: (
      <div className="next">
        <FaArrowRight />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const headingData = [
    {
      about: "Our Testimonials",
      sectionTitle: "Client Feedback",
      titleText: "",
    },
  ];
  return (
    <>
      <div className="testimonials-section">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>
          <div className="testimonias-wrapper">
          <Slider {...settings}>
            <div className="testimonials-content">
                <div className="testimonials-info">
                    <p>
                    <RiDoubleQuotesL />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, 
                    sed dos mod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte
                    </p>
                    <div class="real-estate-agent testimonials__agent">
                      <div class="agent-img go-top">
                        <a href="#/team-details" tabindex="0">
                          <img src={author} alt="#" />
                        </a>
                      </div>
                      <div class="agent-brief go-top">
                        <h6>
                          <a href="#/team-details" tabindex="0">
                            William Seklo
                          </a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-content">
                <div className="testimonials-info">
                    <p>
                    <RiDoubleQuotesL />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, 
                    sed dos mod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte
                    </p>
                    <div class="real-estate-agent testimonials__agent">
                      <div class="agent-img go-top">
                        <a href="#/team-details" tabindex="0">
                          <img src={author} alt="#" />
                        </a>
                      </div>
                      <div class="agent-brief go-top">
                        <h6>
                          <a href="#/team-details" tabindex="0">
                            William Seklo
                          </a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-content">
                <div className="testimonials-info">
                    <p>
                    <RiDoubleQuotesL />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, 
                    sed dos mod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte
                    </p>
                    <div class="real-estate-agent testimonials__agent">
                      <div class="agent-img go-top">
                        <a href="#/team-details" tabindex="0">
                          <img src={author} alt="#" />
                        </a>
                      </div>
                      <div class="agent-brief go-top">
                        <h6>
                          <a href="#/team-details" tabindex="0">
                            William Seklo
                          </a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-content">
                <div className="testimonials-info">
                    <p>
                    <RiDoubleQuotesL />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, 
                    sed dos mod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte
                    </p>
                    <div class="real-estate-agent testimonials__agent">
                      <div class="agent-img go-top">
                        <a href="#/team-details" tabindex="0">
                          <img src={author} alt="#" />
                        </a>
                      </div>
                      <div class="agent-brief go-top">
                        <h6>
                          <a href="#/team-details" tabindex="0">
                            William Seklo
                          </a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                </div>
            </div>
            </Slider>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Testimonial;
