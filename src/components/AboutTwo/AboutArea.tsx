"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/X0Dpd52pfp0?si=vmqtYgTwq247soib"]}
      />

      <div className="about-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img2.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="solution-video">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="flaticon-play-button"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                  <span className="sub-title">About Us</span>
                  <h2>Welcome to AVANZA OILFIELD EQUIPMENT SUPPLIES AND SERVICES,</h2>
                  <p>
                  where reliability meets innovation in oilfield equipment supplies and services. 
                  </p>
                </div>
                
                <div className="about-text">
                  <h4>At AVANZA</h4>
                  <p>
                  we understand the critical importance of seamless operations in the oil and gas industry.
                   With years of expertise under our belt, we specialize in delivering top-tier equipment 
                   and comprehensive services tailored to meet the unique demands of your operations. 
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our commitment</h4>
                  <p>
                  Our commitment goes beyond just providing products – we offer quick and reliable support
                   to keep your operations running smoothly around the clock. Whether you're in need of 
                   essential equipment, technical expertise, or rapid response services, we've got you covered. 
                  </p>
                </div>

                <div className="about-text">
                  <h4>Partner with us</h4>
                  <p>
                  Partner with us and experience the difference of working
                   with a trusted industry leader. Explore our range of high-quality
                    products and discover how we can elevate your operations to new 
                    heights of efficiency and success. 
                  </p>
                  <h6>
                  Join us as we pave the way for excellence in oilfield equipment supplies and services.
                   Your success is our priority, and together, we'll fuel a future of endless possibilities.
                    </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
