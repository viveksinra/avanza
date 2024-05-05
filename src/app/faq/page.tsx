import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import FaqContent from "../../components/Faq/FaqContent";
import ContactUs from "../../components/Faq/ContactUs";
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
        pageTitle="FAQ"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="FAQ"
      />

      <FaqContent />

      <ContactUs />

      <FooterTwo />
    </>
  );
}
