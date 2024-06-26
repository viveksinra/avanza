"use client";

import React from "react";
import Image from "next/image";

interface SidebarModalProps {
  active: string;
  onClick: (active: boolean) => void;
}

const SidebarModal: React.FC<SidebarModalProps> = ({ active, onClick }) => {
  const closeModal = (): void => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
              AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES - FZCO is a dynamic and innovative company established in 2024 and headquartered in Dubai, UAE. With a commitment to excellence and a focus on delivering high-quality products and services, AVANZA is a leading provider in the oil and gas industry. Our comprehensive range of offerings includes equipment supplies and services tailored to various aspects of oilfield operations, from drilling and completion to production and maintenance.

              </p>
            </div>
          </div>

      

          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  
                  <span>sales@avanzaofess.com</span>
                </h2>

             
              </div>
            </div>
          </div>

          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-close"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarModal;
