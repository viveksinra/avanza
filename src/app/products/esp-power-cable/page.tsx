import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESP Power Cable Supplier Dubai | Avanza OFESS',
  description: 'Avanza OFESS is a leading ESP power cable supplier in Dubai, offering a range of high-quality cables for oilfield operations.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="ESP Power Cable"
      />
      <div className="container pt-100 pb-100">
        <h1>ESP Power Cable</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          ESP Power Cables provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
