import React from 'react';
import NavbarThree from '@/components/Layout/NavbarThree';
import PageHeader from '@/components/Common/PageHeader';
import FooterTwo from '@/components/Layout/FooterTwo';
import TopHeader from '@/components/BigDataSolution/TopHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Lift Solutions | Avanza OFESS',
  description: 'Explore our comprehensive Artificial Lift Solutions designed for efficiency and reliability in oilfield operations.',
};

export default function Page() {
  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Artificial Lift Solutions"
      />
      <div className="container pt-100 pb-100">
        <h1>Artificial Lift Solutions</h1>
        <p>
          Content for this page is coming soon. This page will detail the
          Artificial Lift Solutions provided by Avanza OFESS.
        </p>
      </div>
      <FooterTwo />
    </>
  );
}
