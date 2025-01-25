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
    <div className="about-area py-4">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div 
              className="about-image w-100" 
              style={{ 
                position: 'relative', 
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                width: '100%'
              }}
            >
              <Image
                src={imageSrc}
                alt="image"
                fill
                style={{ 
                  objectFit: "contain"
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="about-content">
              <h2  style={{color:"#B5167F"}}>{title}</h2>
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
  );
};

export default OneProduct;