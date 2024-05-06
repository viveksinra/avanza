"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">About Our Services</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              At AVANZA, we understand the importance of engaging with our clients. Real innovation and delivering a positive customer experience are fundamental to successful communication.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Which product categories do you specialize in?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        At AVANZA, we specialize in a wide range of products and services tailored to the oil and gas industry. From OCTG & line pipe to completion equipment, wellhead valves, and more, we are equipped to meet your needs.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer consulting services for optimizing oilfield operations?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Yes, we provide comprehensive consulting services aimed at enhancing operational efficiency and productivity in oilfield operations. Our team of experts is dedicated to offering tailored solutions to meet your specific requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are your commitments to safety and environmental sustainability?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        At AVANZA, safety and environmental sustainability are at the core of everything we do. We adhere to the highest standards to ensure the safety of our employees and the protection of the environment in which we operate.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do you ensure the quality of your products and services?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Quality assurance is paramount at AVANZA. We employ rigorous quality control measures at every stage of our operations to ensure that our products and services meet the highest industry standards.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is your approach to innovation in the oil and gas sector?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Innovation is key to our success at AVANZA. We collaborate with industry leaders to develop and implement cutting-edge solutions that address the evolving needs of the oil and gas sector, driving efficiency and productivity.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I get started with AVANZA's products and services?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Getting started with AVANZA is simple. Get in touch with our team, and we'll work with you to understand your requirements and provide tailored solutions that meet your needs, helping you achieve your operational goals.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why should I choose AVANZA for my oil and gas business needs?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        AVANZA is dedicated to exceeding client expectations by delivering value-driven solutions that enhance operational efficiency and productivity. With our commitment to quality, safety, and environmental responsibility, choosing AVANZA means choosing reliability and excellence for your business.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
