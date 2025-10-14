import React from "react";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import NavbarThree from "../../components/Layout/NavbarThree";
import PageHeader from "../../components/Common/PageHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import Image from "next/image";
import EspTestBench from "../../components/EspTestBench/EspTestBench";

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="ESP Test Bench"
      />

      <EspTestBench />

      <FooterTwo />
    </>
  );
}


