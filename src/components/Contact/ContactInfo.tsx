"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>Email Here</h3>
                <p>sales@avanzaofess.com</p>
              </div>
            </div>

            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Location Here</h3>
                <p>AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES – FZCO
Building A1, Dubai Digital Park, 
Dubai Silicon Oasis, 
Dubai, United Arab Emirates</p>
              </div>
            </div>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
