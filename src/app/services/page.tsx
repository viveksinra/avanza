import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import WhyChooseUs from "../../components/Services/WhyChooseUs";
import WhatWeDo from "../../components/Services/WhatWeDo";
import Footer from "../../components/Layout/Footer";
import ServicesOverview from "../../components/ServicesTwo/ServicesOverview";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";
export default function Page() {
  return (
    <>
         <TopHeader />
      <NavbarThree />

      <PageHeader
        pageTitle="Services Style One"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Services Style One"
      />

<ServicesOverview />

      <WhatWeDo />

      <FooterTwo />
    </>
  );
}
