import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import FaqContent from "../../components/Faq/FaqContent";
import ContactUs from "../../components/Faq/ContactUs";
import Footer from "../../components/Layout/Footer";

import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";

const faqData = [
    {
      question: "Which product categories do you specialize in?",
      answer: "At AVANZA, we specialize in a wide range of products and services tailored to the oil and gas industry. From OCTG & line pipe to completion equipment, wellhead valves, and more, we are equipped to meet your needs."
    },
    {
      question: "Do you offer consulting services for optimizing oilfield operations?",
      answer: "Yes, we provide comprehensive consulting services aimed at enhancing operational efficiency and productivity in oilfield operations. Our team of experts is dedicated to offering tailored solutions to meet your specific requirements."
    },
    {
      question: "What are your commitments to safety and environmental sustainability?",
      answer: "At AVANZA, safety and environmental sustainability are at the core of everything we do. We adhere to the highest standards to ensure the safety of our employees and the protection of the environment in which we operate."
    },
    {
      question: "How do you ensure the quality of your products and services?",
      answer: "Quality assurance is paramount at AVANZA. We employ rigorous quality control measures at every stage of our operations to ensure that our products and services meet the highest industry standards."
    },
    {
      question: "What is your approach to innovation in the oil and gas sector?",
      answer: "Innovation is key to our success at AVANZA. We collaborate with industry leaders to develop and implement cutting-edge solutions that address the evolving needs of the oil and gas sector, driving efficiency and productivity."
    },
    {
      question: "How can I get started with AVANZA's products and services?",
      answer: "Getting started with AVANZA is simple. Get in touch with our team, and we'll work with you to understand your requirements and provide tailored solutions that meet your needs, helping you achieve your operational goals."
    },
    {
      question: "Why should I choose AVANZA for my oil and gas business needs?",
      answer: "AVANZA is dedicated to exceeding client expectations by delivering value-driven solutions that enhance operational efficiency and productivity. With our commitment to quality, safety, and environmental responsibility, choosing AVANZA means choosing reliability and excellence for your business."
    }
  ];

export default function Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer
            }
        }))
    };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <TopHeader />
      <NavbarThree />

      <PageHeader
        pageTitle="FAQ"
      />

      <FaqContent />

      <ContactUs />

      <FooterTwo />
    </>
  );
}
