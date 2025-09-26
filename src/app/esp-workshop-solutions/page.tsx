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
        pageTitle="ESP Workshop Solutions"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="ESP Workshop Solutions"
      />

      {/* Hero Section */}
      <div className="about-area" style={{paddingTop: "50px", paddingBottom: "20px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 style={{color:"#B5167F"}}>Complete ESP Workshop Solutions</h2>
                <p>
                  In addition to test benches, we supply a full range of assembly, disassembly, and servicing equipment required to set up or upgrade your ESP workshop. These solutions support both routine maintenance and in-depth DIFA (Dismantling, Inspection, and Failure Analysis) activities.
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
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Workshop Setup</span>
                <h2>Professional ESP Workshop Equipment</h2>
                <p>
                  Our comprehensive workshop solutions enable you to perform complete ESP maintenance, repair, and analysis operations in-house. From assembly benches to specialized tooling, we provide everything needed for professional ESP servicing.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Complete Workshop Setup
                  </h4>
                  <p>
                    Everything needed to establish or upgrade your ESP workshop with professional-grade equipment and tooling.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> DIFA Analysis Capability
                  </h4>
                  <p>
                    Specialized equipment for Dismantling, Inspection, and Failure Analysis to identify root causes and prevent recurrence.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <img
                src="/images/about-img1.png"
                alt="ESP Workshop Solutions"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pump Workshop Equipment */}
      <div className="overview-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Pump Equipment</span>
            <h2>Pump Workshop Equipment</h2>
            <p>Specialized equipment for ESP pump assembly, disassembly, and maintenance operations.</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Assembly & Disassembly Bench</h3>
                <p>Hydraulic system-equipped bench for safe and efficient pump assembly and disassembly operations.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-data"></i>
                </div>
                <h3>Shaft Straightening Bench</h3>
                <p>Air/hydraulic system for precision pump shaft straightening and alignment operations.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Specialized Tooling</h3>
                <p>Complete set of pump assembly and disassembly tooling for efficient workshop operations.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">             
                  <i className="flaticon-research"></i>
                </div>
                <h3>Chemical Cleaning System</h3>
                <p>Advanced cleaning system for thorough pump component cleaning and preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motor Workshop Equipment */}
      <div className="overview-area ptb-100 pt-0" style={{backgroundColor: "#f8f9fa"}}>
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Motor Equipment</span>
            <h2>Motor Workshop Equipment</h2>
            <p>Comprehensive motor servicing equipment for ESP motor maintenance and repair.</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Motor Assembly Bench</h3>
                <p>Specialized bench for motor assembly and disassembly operations with proper tooling support.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Motor Stator & Shaft Washer</h3>
                <p>Cleaning equipment for motor stators and shafts, ensuring optimal performance and longevity.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-play-button"></i>
                </div>
                <h3>Rotor Oven System</h3>
                <p>Advanced burn-off cleaning oven for rotor maintenance and refurbishment operations.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Assembly Tooling</h3>
                <p>Complete set of specialized tooling for motor assembly and disassembly procedures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Equipment */}
      <div className="overview-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Additional Equipment</span>
            <h2>Complete Workshop Support</h2>
            <p>Additional equipment and tooling to complete your ESP workshop setup.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-research"></i>
                </div>
                <h3>Seal/Protector Equipment</h3>
                <p>Specialized bench and tooling for seal/protector and gas separator assembly and disassembly.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>ESP Breakout Machine</h3>
                <p>Heavy-duty wrench and breakout machine for ESP assembly and disassembly operations.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-data"></i>
                </div>
                <h3>Cable Repair Equipment</h3>
                <p>Complete cable repair and testing equipment including spooler, tools, and meters.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>VSD Repair System</h3>
                <p>Variable Speed Drive repair and testing system with specialized tools and instruments.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Storage & Organization</h3>
                <p>Storage racks for ESP equipment and component parts washer for workshop organization.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one mb-4">
                <div className="icon">
                  <i className="flaticon-play-button"></i>
                </div>
                <h3>Inspection Tooling</h3>
                <p>General shop tooling and specialized inspection equipment for quality assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-area ptb-100" style={{backgroundColor: "#f8f9fa"}}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title">Why Choose AVANZA</span>
            <h2>Your Trusted ESP Workshop Partner</h2>
            <p>We provide comprehensive ESP workshop solutions backed by expertise and quality.</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> API RPII-Compliant Solutions
                  </h4>
                  <p>
                    All our testing solutions meet API RPII standards for inspection and integrity.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Complete Workshop Capability
                  </h4>
                  <p>
                    Full ESP testing and workshop setup capability from a single trusted source.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> PLC Automation & Software
                  </h4>
                  <p>
                    Advanced PLC automation with proprietary test software for precision control.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Training & Support
                  </h4>
                  <p>
                    Comprehensive operator training and ongoing technical support.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Universal Compatibility
                  </h4>
                  <p>
                    Compatible with all major ESP manufacturers' equipment and systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-image">
                <img
                  src="/images/about-img1.png"
                  alt="Why Choose AVANZA"
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
                <h2>Ready to Setup Your ESP Workshop?</h2>
                <p>
                  Contact us today to discuss your ESP workshop requirements and get a customized solution.
                </p>
                <a href="/contact" className="default-btn">
                  Request Consultation <span></span>
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


