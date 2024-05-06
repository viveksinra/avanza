import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <span className="sub-title">Why Choose AVANZA</span>
                <h2>Enhancing Operational Efficiency and Productivity</h2>
                <p>
                  At AVANZA, we are dedicated to fostering strong brand interactions to drive effective communication. Our commitment to real innovation and delivering positive customer experiences lies at the core of our successful engagements.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Comprehensive Solutions
                  </h4>
                  <p>
                    AVANZA provides genuine products and services tailored to meet the unique demands of our clients. Customer satisfaction is our priority, and we draw inspiration from their lives and needs.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Tailored Offerings
                  </h4>
                  <p>
                    Our solutions at AVANZA are not one-size-fits-all. We understand that each client has distinct requirements, and we work closely with them to define and deliver customized solutions that address their specific challenges and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
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
