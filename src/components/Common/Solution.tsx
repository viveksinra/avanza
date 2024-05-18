"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const AvanzaSolution: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=X0Dpd52pfp0"]}
      />

      <div
        className="solution-area ptb-100 extra-pb"
        style={{
          backgroundImage: `url(/images/solution-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="solution-content">
                <span className="sub-title">Watch Our Video</span>
                <h2>Discover Solutions Tailored for Your Operations</h2>
                <p>
                  At Avanza, authenticity is our hallmark. We prioritize the needs of our clients, drawing inspiration from their requirements and experiences.
                </p>

                <Link href="/contact" className="default-btn">
                  Contact Us <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="solution-video">
                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvanzaSolution;
