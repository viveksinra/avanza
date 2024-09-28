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
                AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES - FZCO is a startup, founded in 2024 and headquartered in Dubai, UAE. We specialize in providing innovative technical solutions, sourcing equipment, spare parts, and offering services that help optimize your oilfield operations. Our expertise includes Artificial Lift and production solutions, aimed at supporting clients in managing both CAPEX and operating costs, while helping you meet your financial goals and operational objectives. From drilling and completion to production and maintenance, our comprehensive solutions are designed to enhance efficiency and performance across all phases of your operations.
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
                  Our mission at AVANZA is to be a trusted partner for our clients, providing them with reliable and efficient solutions that enhance their operational efficiency and maximize their productivity in the oil and gas sector. We strive to maintain the highest standards of quality, safety, and environmental sustainability in all our endeavors.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Delivering Excellence
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Setting Higher Standards
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
