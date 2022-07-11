import React from "react";
import "./footer.css";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { FooterData } from "./footerData";

const arr2 = [
  {
    socialIcon: <FaFacebookF />,
  },
  {
    socialIcon: <FaTwitter />,
  },
  {
    socialIcon: <FaInstagram />,
  },
  {
    socialIcon: <FaDribbble />,
  },
];
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="footer-wrapper">
            <div className="footer_block_list">
              <div className="FooterMain__item--item1">
                <div className="site-logo">
                  <img
                    src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo-2.png"
                    alt="Logo"
                  />
                </div>
                <p className="desc">
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address">
                        <FaMapMarkerAlt />
                        <p>Brooklyn, New York, US</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address">
                        <TbPhoneCall />{" "}
                        <p>
                          <a href="tel:+0123-456789">+0123-456789</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address">
                        <BsEnvelope />{" "}
                        <p>
                          <a href="mailto:example@example.com">
                            example@example.com
                          </a>{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="right-announce">
                  <ul className="announcement__socialIcon">
                    {arr2.map((items) => {
                      return (
                        <>
                          <li>{items.socialIcon}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {FooterData.map((items) => {
                return (
                  <>
                    <div className="FooterMain__item--item1 FooterMain__item--links">
                      <div className="footer-content-wrapper">
                        <div className="footer-title">{items.footerTitle}</div>
                        <div className="footer-collapsible">
                          <div className="footer-collabsible--content">
                            <ul>
                              {items.links.map((items) => {
                                return (
                                  <>
                                    <li>
                                      <a href="#">{items}</a>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="FooterMain__item--item1">
                <div className="footer-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="footer-btn-wrapper">
                        <button className="theme-btn" type="submit">
                          <RiSendPlaneFill />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="payment-list">We Accept</h5>
                  <img
                    src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/payment-4.png"
                    alt="Payment Image"
                  />
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="footer__aside">
              <div className="FooterBottom">
                <div class="copyright-area">
                  <div class="footer_copyright">
                    <div class="copyright-design ">
                      <p>
                        All Rights Reserved @ Company{" "}
                        <span class="current-year">2022</span>
                      </p>
                    </div>
                  </div>
                  <div class="copyright-menu">
                    <ul class="go-top">
                      <li>
                        <a href="https://google.com">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="https://google.com">Claim</a>
                      </li>
                      <li>
                        <a href="https://google.com">Privacy &amp; Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};
export default Footer;
