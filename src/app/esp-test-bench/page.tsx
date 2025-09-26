import React from "react";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import NavbarThree from "../../components/Layout/NavbarThree";
import PageHeader from "../../components/Common/PageHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="ESP Test Bench"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="ESP Test Bench"
      />

      {/* Hero Section */}
      <div className="about-area" style={{paddingTop: "50px", paddingBottom: "20px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 style={{color:"#B5167F"}}>ESP Test Benches & Workshop Equipment</h2>
                <p>
                  At AVANZA we provide complete solutions for testing, inspection, and servicing of ESP (Electric Submersible Pump) systems. Our test benches are designed in accordance with API RPII standards, ensuring accurate, reliable, and standardized testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="overview-area overflow-hidden ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-image">
              <img
                src="/images/about-img1.png"
                alt="ESP Test Bench"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">API RPII Compliance</span>
                <h2>Professional Testing Solutions</h2>
                <p>
                  We supply ESP Test Benches and associated equipment designed in accordance with API RPII (API Recommended Practice for Inspection and Integrity) standards. Our solutions cover both downhole and surface ESP systems.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> PLC-Controlled Automation
                  </h4>
                  <p>
                    Each test bench is equipped with an integrated PLC-controlled station and proprietary software, ensuring precise control and detailed reporting.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Comprehensive Training
                  </h4>
                  <p>
                    We provide comprehensive training programs, enabling teams to operate test benches and perform inspections with confidence.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> In-House Testing Capability
                  </h4>
                  <p>
                    Operators and service providers gain the ability to conduct accurate, reliable, and standardized testing in-house.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Benches Section */}
      <div className="overview-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Products</span>
            <h2>Complete Range of ESP Test Benches</h2>
            <p>
              We offer a complete range of test benches compatible with major ESP manufacturers' equipment, designed for reliability and precision.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Horizontal Pump Test Bench (HPTS)</h3>
                <p>For performance testing of ESP pumps, validating flow, pressure, and efficiency before field deployment. Ensures optimal pump performance and reliability.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-data"></i>
                </div>
                <h3>Motor Idle Slant Test (MIST)</h3>
                <p>For testing ESP motors under controlled conditions, ensuring reliability and operational readiness. Validates motor performance before deployment.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Motor Dry-Out System</h3>
                <p>For drying out motor stators following major repairs, restoring insulation resistance and extending service life. Essential for motor refurbishment.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-research"></i>
                </div>
                <h3>Seal/Protector Test Bench</h3>
                <p>For testing ESP seals and protectors, verifying effectiveness in protecting motors against wellbore fluids and pressure variations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <span className="sub-title">Why Choose Our Test Benches</span>
                <h2>Maximize Your ESP Testing Capabilities</h2>
                <p>
                  With our test benches and workshop equipment, customers gain full control over their ESP testing and maintenance operations — reducing downtime, improving reliability, and lowering operating costs.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Reduced Downtime
                  </h4>
                  <p>
                    In-house testing capabilities eliminate the need for external testing services, significantly reducing operational downtime.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Improved Reliability
                  </h4>
                  <p>
                    Standardized testing procedures ensure consistent quality and reliability of ESP equipment before deployment.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Lower Operating Costs
                  </h4>
                  <p>
                    Comprehensive in-house testing and maintenance capabilities result in significant long-term cost savings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
            <div className="why-choose-image">
                <img
                  src="/images/about-img1.png"
                  alt="ESP Testing Benefits"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Ready to Enhance Your ESP Testing Capabilities?</h2>
                <p>
                  Contact us today to learn more about our ESP test benches and how they can improve your operations.
                </p>
                <a href="/contact" className="default-btn">
                  Get Quote <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}


