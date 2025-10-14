import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESP Drive Systems (VSD, AFE) | Avanza OFESS',
  description: 'High-performance ESP Drive Systems from Avanza OFESS, including Variable Speed Drives (VSD), 12-24 Pulse, and AFE Drives.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Drive Systems for ESP"
      />
      <div className="container pt-100 pb-100">
        <h1>Drive Systems for ESP</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          Drive Systems for ESP provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
