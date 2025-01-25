"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterTwo: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo-white.png"
                    alt="logo"
                    width={124}
                    height={38}
                  />
                </Link>
                <p>
                  AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES - FZCO, established in 2024 and based in Dubai, UAE, is a dynamic company in the oil and gas industry.
                </p>

              
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card ps-5">
                <h3>About</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about">
                      <i className="fa-solid fa-angles-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <i className="fa-solid fa-angles-right"></i> Our Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="fa-solid fa-angles-right"></i> Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </Link>
                  </li>
           
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card ps-5">
                <h3>Resources</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/terms-and-conditions">
                      <i className="fa-solid fa-angles-right"></i> Terms and Condition
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">
                      <i className="fa-solid fa-angles-right"></i> Privacy Policy
                    </Link>
                  </li>               
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Projects
                    </Link>
                  </li>               
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card">
                <h3>Contact Info</h3>

                <ul className="contact-links">
                  <li>
                    <span>Address:</span> AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES – FZCO
Building A1, Dubai Digital Park, 
Dubai Silicon Oasis, 
Dubai, United Arab Emirates
                  </li>
                  <li>
                    <span>Website:</span>{" "}
                    <a href="https://avanzaofess.com/"  target="_blank">
                      www.avanzaofess.com
                    </a>
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:sales@avanzaofess.com">sales@avanzaofess.com</a>
                  </li>
          
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <div className="footer-wrap-shape">
          <Image
            src="/images/Avanza/icon/oandg.png"
            alt="image"
            width={63}
            height={58}
          />
        </div>
      </div>

      <div className="copyright-wrap-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                Copyright &copy;{currentYear} AVANZA. All rights reserved{" "}
                <a href="https://avanzaofess.com/" target="_blank">
                  AVANZA
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6">
              <ul className="list">
                <li>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTwo;
