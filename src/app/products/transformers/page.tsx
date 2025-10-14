import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transformers for ESP Systems | Avanza OFESS',
  description: 'Avanza OFESS supplies reliable ESP transformers, including Step Up, Step Down, and Phase Shifting transformers.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Transformers for ESP"
      />
      <div className="container pt-100 pb-100">
        <h1>Transformers for ESP Systems</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          Transformers for ESP Systems provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
