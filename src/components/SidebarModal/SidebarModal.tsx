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
              AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES - FZCO is a startup, founded in 2024 and headquartered in Dubai, UAE. We specialize in providing innovative technical solutions, sourcing equipment, spare parts, and offering services that help optimize your oilfield operations. Our expertise includes Artificial Lift and production solutions, aimed at supporting clients in managing both CAPEX and operating costs, while helping you meet your financial goals and operational objectives. From drilling and completion to production and maintenance, our comprehensive solutions are designed to enhance efficiency and performance across all phases of your operations.
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
