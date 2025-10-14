import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oilfield Equipment Supplier UAE (Dubai) | Avanza OFESS',
  description: 'Avanza OFESS is your trusted oilfield equipment supplier in the UAE, with a major hub in Dubai. We provide comprehensive solutions.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Oilfield Equipment Supplier UAE"
      />
      <div className="container pt-100 pb-100">
        <h1>Oilfield Equipment Supplier in UAE</h1>
        <p>
          Content for this page is coming soon. This page will detail our services
          as a leading oilfield equipment supplier in the UAE.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
