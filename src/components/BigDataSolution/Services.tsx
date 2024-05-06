"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="bd-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
              See Wide Range Of Our <span>Services</span> With Avanza Solutions
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-1.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Drilling Support</Link>
                </h3>
                <p>
                  Avanza offers comprehensive drilling support services to enhance operational efficiency and safety in oilfield operations.
                </p>

                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-2.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Well Completion</Link>
                </h3>
                <p>
                  Avanza provides well completion solutions tailored to optimize production and maximize reservoir performance.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-3.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Artificial Lift Solutions</Link>
                </h3>
                <p>
                  Avanza offers innovative artificial lift solutions to optimize production and increase oil recovery rates.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-4.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Production Operations</Link>
                </h3>
                <p>
                  Avanza provides comprehensive production operations support to maximize efficiency and optimize oil and gas production.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-5.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Facility Maintenance</Link>
                </h3>
                <p>
                  Avanza offers reliable facility maintenance services to ensure operational continuity and safety in oilfield facilities.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="bd-services-card">
                <div className="services-image">
                  <Image
                    src="/images/big-data-home/services/image-6.png"
                    alt="image"
                    width={56}
                    height={56}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Ground Engineering</Link>
                </h3>
                <p>
                  Avanza provides ground engineering solutions to support safe and efficient oilfield operations and infrastructure development.
                </p>
                <Link href="/services/details" className="get-started-btn">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
