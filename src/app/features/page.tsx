import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import OurFeatures from "../../components/Features/OurFeatures";
import OurFeaturesTab from "../../components/Common/OurFeaturesTab";
import FunFacts from "../../components/Common/FunFacts";
import PartnerWithTitle from "../../components/Common/Partner/PartnerWithTitle";
import Footer from "../../components/Layout/Footer";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";


export default function Page() {
  return (
    <>
       <TopHeader />
       <NavbarThree />

      <PageHeader
        pageTitle="Features"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Features"
      />

      <OurFeatures />

      <OurFeaturesTab />

      <FunFacts />

      <PartnerWithTitle />

      <FooterTwo />
    </>
  );
}
