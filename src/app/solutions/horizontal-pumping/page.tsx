import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horizontal Pumping Systems | Avanza OFESS',
  description: 'Discover Avanza OFESS\'s advanced Horizontal Pumping Systems and Solutions, engineered for performance.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Horizontal Pumping Systems"
      />
      <div className="container pt-100 pb-100">
        <h1>Horizontal Pumping Systems and Solutions</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          Horizontal Pumping Systems provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
