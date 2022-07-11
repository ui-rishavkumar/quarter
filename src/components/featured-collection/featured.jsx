import React from "react";
import { TbBed, TbBath, TbCar, TbSquare } from "react-icons/tb";
import Content from "../ImageWithText/Content";
import featuredimage from "./image/featuredimage.jpg";
import "./featured.css";
import author from "./image/author.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// const featuredarr=[
//     {
//         :"choose area",
//     },
//     {
//         options:"value2",
//     },
//     {
//         options:"value3",
//     },
// ];

const Featured = () => {
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
      about: "Properties",
      sectionTitle: "Featured listing",
      titleText: "",
    },
  ];
  return (
    <>
      <div className="featured-collection banner-section">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>

          <div className="featured---card">
            <Slider {...settings}>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-main-card">
                <div className="featured-collection-card">
                  <div className="image__info">
                    <img src={featuredimage} alt="" />
                    <div class="featured-product-badge">
                      <ul>
                        <li class="sale-badge">For Rent</li>
                      </ul>
                    </div>
                    <div class="product-img-location-gallery">
                      <div class="product-img-location">
                        <ul>
                          <li>
                            <a href="#/contact" tabindex="0">
                              <i class="flaticon-pin"></i> Belmont Gardens,
                              Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-img-gallery go-top">
                        <ul>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="#/product-details" tabindex="0">
                              <i class="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="featred__info">
                    <div class="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 class="product-title go-top">
                      <a href="#/product-details" tabindex="0">
                        Beautiful Flat in Manhattan{" "}
                      </a>
                    </h2>
                    <div class="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="selling-service">
                      <li>
                        <p>
                          3<TbBath />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbCar />
                        </p>
                        <span>bedrooms</span>
                      </li>
                      <li>
                        <p>
                          3<TbSquare />
                        </p>
                        <span>bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div class="product-info-bottom">
                    <div class="real-estate-agent">
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
                    <div class="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                            tabindex="0"
                          >
                            <i class="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <span class="go-top">
                            <a
                              title="Product Details"
                              href="#/product-details"
                              tabindex="0"
                            >
                              <i class="flaticon-add"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
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
export default Featured;
