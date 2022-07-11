
import { FaRegUser, FaTags } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { VscCalendar } from "react-icons/vsc";
import Slider from "react-slick";
import Content from "../ImageWithText/Content";
import "./news.css";

function BlogSlider() {
  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="prev-arrows">
        <FiArrowLeft />
      </div>
    ),
    nextArrow: (
      <div className="next-arrows">
        <FiArrowRight />
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

      <div className="quar-BlogSlider">
        <div className="container">
          <div className="card-heading">
            <Content arrayData={headingData} />
          </div>

          <div className="quar-ProSliderMain2">
            <Slider {...settings}>
              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      The Most Inspiring Interior Design Of 2021
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>

              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/3.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>

              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/4.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      Recent Commercial Real Estate Transactions
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>
              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      The Most Inspiring Interior Design Of 2021
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>

              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/3.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>

              <div className="quar-ProSliderMain2__item">
                <div className="quar--BlogImg">
                  <a href="https://google.com" title="BlogImg">
                    <img
                      src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/4.jpg"
                      alt="productImg-img"
                    />
                  </a>
                </div>
                <div className="quar--productInfo">
                  <div class="quar-blog__blog-meta">
                    <ul>
                      <li class="quar-blog__blog-author">
                        <a href="https://google.com">
                          <FaRegUser />
                          by: Admin
                        </a>
                      </li>
                      <li class="quar-blog__blog-tags">
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                        <a href="https://google.com">
                          <FaTags />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 class="quar-blog-title">
                    <a href="https://google.com" title="product-title">
                      Recent Commercial Real Estate Transactions
                    </a>
                  </h2>
                </div>
                <div className="quar--productInfoBottom">
                  <div className="quar-agent-details">
                    <VscCalendar />

                    <div className="quar-agent-tile">
                      <h5>July 23, 2021</h5>
                    </div>
                  </div>
                  <div className="quar-product-action">
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogSlider;
