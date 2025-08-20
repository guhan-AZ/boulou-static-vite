import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/img/boulo-ipo-logo.png";

const Footer = () => {
  return (
    <>
      <footer class="footer__area-three fix">
        <div class="container">
          <div class="footer__top-two footer__top-three">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="footer__widget">
                  <h4 class="footer__widget-title">Follow us On:</h4>
                  <div class="footer__content-two">
                    <div class="footer__social footer__social-three">
                      <ul class="list-wrap">
                        <li>
                          <a
                            href="https://www.facebook.com/BoulouLPO"
                            target="_blank"
                          >
                            <img
                              src="assets/img/icons/facebook.svg"
                              alt=""
                              class="injectable footer-social facebook-icon"
                            />
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/BoulouLpo" target="_blank">
                            <img
                              src="assets/img/icons/twitter.svg"
                              alt=""
                              class="injectable footer-social"
                            />
                           X (Twitter)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/bouloulpo/"
                            target="_blank"
                          >
                            <img
                              src="assets/img/icons/instagram.svg"
                              alt=""
                              class="injectable footer-social"
                            />
                            Instagram
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/boulou-lpo/"
                            target="_blank"
                          >
                            <img
                              src="assets/img/icons/linkedin-black.svg"
                              alt=""
                              class="injectable footer-social"
                            />
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="footer__widget">
                  <h4 class="footer__widget-title">Quick Links</h4>
                  <ul class="footer__widget-link list-wrap">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>

                    <li>
                      <Link to="/roles">Roles</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/Career">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div class="footer__widget">
                  <h4 class="footer__widget-title">Services</h4>
                  <ul class="footer__widget-link list-wrap">
                    <li>
                      <Link to="/paralegal-service">Paralegal Service</Link>
                    </li>
                    <li>
                      <Link to="/contract-life-cycle-management">
                        Contract Life Cycle
                      </Link>
                    </li>
                    <li>
                      <Link to="/document-review">Document Review</Link>
                    </li>
                    <li>
                      <Link to="/admin-supports">Admin Supports</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="footer__widget">
                  <h4 class="footer__widget-title">Contact</h4>
                  <div class="footer__contact-two">
                    <ul class="list-wrap">
                      <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="#">
                        11-13 Westminster Road, Kingston 10, Jamaica.
                        </a>
                      </li>
                      <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="#">
                          4400 N Federal Hwy Suite 8, Boca Raton, FL 33431, USA.
                        </a>
                      </li>
                      <li>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:paralegalservices@bouloulpo.com">
                          paralegalservices@bouloulpo.com
                        </a>
                      </li>
                      <li>
                        <i class="fa-solid fa-phone-volume"></i>
                        <a href="tel:1-561-409-5858"> 1-561-409-5858</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__bottom-three">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="footer__bottom-logo">
                  <a class="footer-logo">
                    <img src={footerlogo} alt="logo" />
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="copyright__content-three">
                  <p>Copyright © Boulou LPO | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
