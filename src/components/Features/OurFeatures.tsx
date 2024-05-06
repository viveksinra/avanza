"use client";

import React from "react";
import Image from "next/image";

const OurFeatures: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/features-image/feature-image1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Our Features</span>
                <h2>Innovative Solutions to Enhance Your Operations!</h2>
                <p>
                  At AVANZA, we prioritize brand interaction and effective communication. Our focus lies in providing genuine innovations and ensuring a positive customer experience, which are integral to successful business operations. We value our customers and draw inspiration from their lives and needs.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Advanced Drilling Support
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Cutting-edge Well Completion Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Artificial Lift Technologies
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Reliable Production Operations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Comprehensive Facility Maintenance
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Groundbreaking Personnel Outsourcing
                    </span>
                  </li>
                </ul>
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

export default OurFeatures;
