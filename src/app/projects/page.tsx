import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import ProjectsCard from "../../components/Projects/ProjectsCard";
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
        pageTitle="Projects Style One"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Projects Style One"
      />

      <ProjectsCard />
      <FooterTwo />
    </>
  );
}
