import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";
import OneProduct from "@/components/Products/OneProduct";

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Our Products"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/products"
        breadcrumbTextTwo="Products"
      />
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <h2>Oilfield Equipment Product List</h2>
            <span>A Comprehensive Overview</span>
            <p>
              Our company prides itself on offering a wide range of high-quality oilfield products designed to meet the diverse needs of the industry. Below is a detailed list of the products we currently offer, including their specific applications and benefits.
            </p>
          </div>
        </div>
      </div>
      <OneProduct
        title="Variable Speed Drives"
        description="Variable Speed Drives (VSDs) are essential for optimizing the performance of any electric submersible pumps (ESPs) and other machinery. By adjusting the motor speed to match the required output, VSDs improve efficiency and reduce energy consumption. They also minimize mechanical stress, extending the lifespan of equipment. We offer drives for both permanent magnet motors and induction motors. Ratings and Sizes are available on request."
        imageSrc="/images/about-img1.png"
        features={[
          "Advanced Technology Solutions",
          "Predictive Analytics",
          "Comprehensive Data Analysis",
          "Tailored Services"
        ]}
      />
      <OneProduct
        title="Another Product"
        description="Description for another product."
        imageSrc="/images/another-product.png"
        features={[
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4"
        ]}
      />
      <FooterTwo />
    </>
  );
}
