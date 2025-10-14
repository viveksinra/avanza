import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESP Workshop Solutions | Avanza OFESS',
  description: 'Full-service ESP Workshop Solutions from Avanza OFESS, including equipment, tools, and setup.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="ESP Workshop Solutions"
      />
      <div className="container pt-100 pb-100">
        <h1>ESP Workshop Solutions</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          ESP Workshop Solutions provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
