"use client";

import React from "react";
import Image from "next/image";

const Overview: React.FC = () => {
  return (
    <>
      <div 
        className="bd-overview-area pt-100 pb-70"
        style={{ backgroundImage: `url(/images/big-data-home/overview/overview-bg.jpg)` }}
      >
        <div className="container">
          <div className="bd-overview-content">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-sm-6">
                <div className="bd-overview-card">
                  <div className="overview-image">
                    <Image
                      src="/images/big-data-home/overview/image-1.png"
                      alt="image"
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3>Safe And Secure</h3>
                  <p>
                    AVANZA ensures safety and security measures are paramount in all operations, maintaining the highest standards to safeguard personnel and assets.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="bd-overview-card">
                  <div className="overview-image">
                    <Image
                      src="/images/big-data-home/overview/image-2.png"
                      alt="image"
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3>Operations Management</h3>
                  <p>
                    AVANZA optimizes operations through advanced management techniques, ensuring efficiency and effectiveness across all processes.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="bd-overview-card">
                  <div className="overview-image">
                    <Image
                      src="/images/big-data-home/overview/image-3.png"
                      alt="image"
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3>Expert Support</h3>
                  <p>
                    AVANZA provides expert support and consultation services, leveraging industry knowledge and experience to drive success for our clients.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="bd-overview-card">
                  <div className="overview-image">
                    <Image
                      src="/images/big-data-home/overview/image-4.png"
                      alt="image"
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3>Risk Management</h3>
                  <p>
                    AVANZA implements comprehensive risk management strategies, identifying and mitigating potential risks to ensure operational continuity and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
