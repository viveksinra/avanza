import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";

export default function Page() {
  return (
    <>
          <TopHeader />
      <NavbarThree />

      <PageHeader
        pageTitle="Contact"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Contact"
      />

      <ContactForm />

      <ContactInfo />

      <FooterTwo />
    </>
  );
}
