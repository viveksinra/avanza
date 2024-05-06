"use client";

import React from "react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">About Us</span>
                <h2>Leading the Future of Oilfield Solutions</h2>
                <p>
                  At AVANZA, we are pioneers in revolutionizing the oil and gas industry through digital innovations. We prioritize authentic interactions and a seamless customer experience to drive success. Our commitment to excellence ensures genuine products and services that prioritize the needs of our clients.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Advanced Technology Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Predictive Analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Comprehensive Data Analysis
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Tailored Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Expert Support Team
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> 24/7 Assistance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    AVANZA's journey is marked by genuine innovation and a steadfast commitment to customer satisfaction. We listen attentively to our clients' needs, fostering a culture of creativity and excellence.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Active Listening
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Exceptional Talent
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Striving for Excellence
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Elevating Branding Standards
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    AVANZA is on a mission to redefine the oil and gas sector through genuine innovation and customer-centric solutions. We aspire to exceed expectations and deliver tangible results.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Delivering Excellence
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Setting Higher Standards
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Cultivating Innovative Thinking
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Building Trust Through Action
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    AVANZA embodies authenticity and reliability in every aspect of our operations. We prioritize integrity, ensuring our clients receive unparalleled support and solutions that drive success.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Authenticity at Core
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Comprehensive Coverage
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Setting Trends
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Elevating Brand Visibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default AboutArea;
