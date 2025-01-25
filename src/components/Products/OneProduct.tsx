"use client";

import React from "react";
import Image from "next/image";

interface OneProductProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const OneProduct: React.FC<OneProductProps> = ({ title, description, imageSrc, features }) => {
  return (
    <>
      <div className="about-area" style={{paddingTop: "1px", paddingBottom: "1px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src={imageSrc}
                  alt="image"
                  width={830}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2 style={{color:"#B5167F"}}>{title}</h2>
                <p>{description}</p>

                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <span>
                        <i className="fas fa-check"></i> {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
