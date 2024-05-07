import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import TermsAndConditionsContent from "../../components/TermsAndConditions/TermsAndConditionsContent";
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
        pageTitle="Terms And Conditions"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Terms And Conditions"
      />

      <TermsAndConditionsContent />

      <FooterTwo />

    </>
  );
}
