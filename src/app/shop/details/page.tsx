import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import PageHeader from "../../../components/Common/PageHeader";
import ProductDetails from "../../../components/Shop/ProductDetails";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Shop Details"
      />

      <ProductDetails />

      <Footer />
    </>
  );
}
