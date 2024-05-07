"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    title: "Digital Marketing",
    imageSrc: "/images/services/it-service1.png",
    imageAlt: "Digital Marketing",
    features: [
      "SEO Marketing",
      "Email Marketing",
      "Facebook Marketing",
      "Data Scraping",
      "Social Marketing",
      "Youtube Marketing"
    ]
  },
  {
    title: "Web Design & Development",
    imageSrc: "/images/services/it-service2.png",
    imageAlt: "Web Design & Development",
    features: [
      "Responsive Design",
      "UI / UX Design",
      "Mobile App Development",
      "Laravel Development",
      "React Development",
      "Angular Development"
    ]
  },
  {
    title: "Cloud Storage Service",
    imageSrc: "/images/services/it-service3.png",
    imageAlt: "Cloud Storage Service",
    features: [
      "Cloud Database",
      "Hybrid Cloud",
      "Email Servers",
      "Website Hosting",
      "File Storage",
      "Backup Systems"
    ]
  },
  {
    title: "SEO Consultancy",
    imageSrc: "/images/services/it-service4.png",
    imageAlt: "SEO Consultancy",
    features: [
      "Content Marketing",
      "SEO Optimization",
      "Social Marketing"
    ]
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100">
        <div className="container">
          {servicesData.map((service, index) => (
            <div className="overview-box it-overview" key={index}>
              <div className="overview-content">
                <div className="content">
                  <h2>{service.title}</h2>
                  <p>
                    We believe brand interaction is key to communication. Real
                    innovations and positive customer experience are the heart
                    of success.
                  </p>

                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span>
                          <i className="bx bxs-badge-check"></i>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="rm-btn">
                    <Link href="/services/2" className="default-btn">
                      Read More <span></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="overview-image">
                <div className="image">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={index % 2 === 0 ? 852 : 770}
                    height={index % 2 === 0 ? 580 : 582}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
