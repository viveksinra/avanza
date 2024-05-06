"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="bd-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bd-about-image">
                <Image
                  src="/images/big-data-home/about/about.png"
                  alt="image"
                  width={1036}
                  height={980}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bd-about-content">
                <span className="sub-title">ABOUT AVANZA</span>
                <h3>
                  Trusted Partner <span>in Oilfield Solutions</span> with Data-Driven Insights
                </h3>
                <p>
                  AVANZA is committed to redefining the possibilities and potential of oilfield operations through innovative digital solutions and industry expertise.
                </p>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-1.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Drilling Support</h4>
                  <p>
                    We provide comprehensive drilling support to optimize operations and enhance efficiency.
                  </p>
                </div>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-2.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Well Completion</h4>
                  <p>
                    Our well completion solutions ensure seamless project execution and superior performance.
                  </p>
                </div>

                <div className="inner-content-card">
                  <div className="icon-image">
                    <Image
                      src="/images/big-data-home/about/image-3.png"
                      alt="image"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h4>Artificial Lift Solutions</h4>
                  <p>
                    We offer advanced artificial lift solutions to maximize production and optimize reservoir performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bd-about-shape">
          <Image
            src="/images/big-data-home/about/shape.png"
            alt="image"
            width={42}
            height={176}
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
