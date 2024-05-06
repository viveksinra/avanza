"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="bd-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bd-choose-content">
                <span className="sub-title">WHY CHOOSE AVANZA</span>
                <h3>
                  Delivering Excellence <span>in Oilfield Solutions</span>
                </h3>
                <p>
                  We collaborate closely with industry leaders to redefine
                  operational standards and elevate performance across
                  oilfield operations. Our commitment is to push boundaries and
                  unlock the full potential of your projects.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check"></i> Drilling Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Well Completion
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Artificial Lift
                        Solutions
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check"></i> Production
                        Operations
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Facility
                        Maintenance
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Ground
                        Engineering
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="choose-btn">
                  <Link href="/contact" className="default-btn">
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bd-choose-image">
                <Image
                  src="/images/big-data-home/choose.png"
                  alt="image"
                  width={1128}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
