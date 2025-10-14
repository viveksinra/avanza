import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESP Accessories & Spares | Avanza OFESS',
  description: 'Find a complete range of ESP accessories and spares, including splicing tapes, cable bands, and protectors, at Avanza OFESS.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="ESP Accessories & Spares"
      />
      <div className="container pt-100 pb-100">
        <h1>ESP Accessories & Spares</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          ESP accessories and spares provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
