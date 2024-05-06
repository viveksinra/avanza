"use client";

import React from "react";
import Image from "next/image";

const OurFeatures: React.FC = () => {
  return (
    <>
      <div className="bd-featured-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
            <span className="sub-title">OUR FEATURED</span>
            <h2>
              Enhancing <span>Oilfield</span> Operations with Innovative Solutions
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="bd-featured-card text-center">
                <div className="featured-image">
                  <Image
                    src="/images/big-data-home/featured/image-1.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Drilling Support</h3>
                <p>
                  Avanza provides comprehensive drilling support services tailored to optimize efficiency and safety.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="bd-featured-card text-center">
                <div className="featured-image">
                  <Image
                    src="/images/big-data-home/featured/image-2.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Well Completion</h3>
                <p>
                  Avanza specializes in well completion solutions designed to enhance production and performance.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="bd-featured-card text-center">
                <div className="featured-image">
                  <Image
                    src="/images/big-data-home/featured/image-3.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Artificial Lift Solutions</h3>
                <p>
                  Avanza offers advanced artificial lift solutions for efficient oil and gas production operations.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="bd-featured-card text-center">
                <div className="featured-image">
                  <Image
                    src="/images/big-data-home/featured/image-4.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>Production Operations</h3>
                <p>
                  Avanza delivers tailored production operation services to maximize output and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bd-featured-shape">
          <Image
            src="/images/big-data-home/featured/shape.png"
            alt="image"
            width={94}
            height={64}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
