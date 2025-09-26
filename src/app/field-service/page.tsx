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
        pageTitle="Field Service"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Field Service"
      />

      {/* Hero Section */}
      <div className="about-area" style={{paddingTop: "50px", paddingBottom: "20px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 style={{color:"#B5167F"}}>ESP Services at AVANZA</h2>
                <p>
                  At AVANZA, we offer a comprehensive range of Electrical Submersible Pump (ESP) services to support oil producers worldwide. Our team consists of highly trained and experienced field service professionals, experts in ESP downhole unit installation and pulling, surface equipment installation, commissioning, troubleshooting, and repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="overview-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Comprehensive ESP Solutions</h2>
            <p>
              With extensive experience working alongside major ESP manufacturers, we provide reliable services to both national and international oil operators.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-data"></i>
                </div>
                <h3>ESP Sizing & Selection</h3>
                <p>Experienced professionals provide expert guidance for a wide range of well operating conditions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-play-button"></i>
                </div>
                <h3>Installation & Removal</h3>
                <p>Field personnel specialize in the installation and removal of Electrical Submersible Pump (ESP) systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>VSD & Switchboard Services</h3>
                <p>Installation, commissioning, troubleshooting, and repairs for Variable Speed Drive and switchboard systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-research"></i>
                </div>
                <h3>Startup & Monitoring</h3>
                <p>Support for initial production and continuous monitoring to ensure optimal performance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Maintenance & Repairs</h3>
                <p>Routine and emergency maintenance for ESP and surface electrical equipment.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Testing & Overhaul</h3>
                <p>Comprehensive ESP system and surface equipment testing, overhaul, and repair services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Services Section */}
      <div className="overview-area overflow-hidden pb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Advanced Analysis</span>
                <h2>Root Cause Analysis & Optimization</h2>
                <p>
                  Investigation and analysis of ESP and surface equipment failures using advanced methods, including DIFA (Dismantle Inspection and Failure Analysis), to identify failure mechanisms and prevent recurrence.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Data Analysis & Performance Optimization
                  </h4>
                  <p>
                    ESP and surface equipment performance analysis with recommendations for production optimization and maximum system run life.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Consultation & Training
                  </h4>
                  <p>
                    ESP and VSD consultation, plus training programs for customer personnel to ensure safe and efficient operations.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Field Operations Supervision
                  </h4>
                  <p>
                    On-site supervision to ensure safe and efficient operations throughout the project lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <img
                src="/images/about-img1.png"
                alt="ESP Field Service"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our ESP Service Excellence</h2>
            <p>Numbers that showcase our commitment to quality ESP services</p>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  500
                  <span className="sign-icon">+</span>
                </h3>
                <p>ESP Installations Completed</p>
                <div className="back-text">E</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  98
                  <span className="sign-icon">%</span>
                </h3>
                <p>Success Rate</p>
                <div className="back-text">S</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>15</h3>
                <p>Years of Experience</p>
                <div className="back-text">Y</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  50
                  <span className="sign-icon">+</span>
                </h3>
                <p>Certified Technicians</p>
                <div className="back-text">T</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="sub-title">Our Commitment</span>
                <h2>Delivering Expert ESP Solutions</h2>
                <p>
                  At AVANZA, we are committed to delivering expert ESP solutions that maximize production efficiency and system reliability. Our comprehensive approach ensures your operations run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}


