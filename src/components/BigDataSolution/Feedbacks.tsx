"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Feedbacks: React.FC = () => {
  return (
    <>
      <div className="unique-feedback-area with-linear-gradient-color pt-100">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
            <span className="sub-title">CLIENT TESTIMONIALS</span>
            <h2>
              Explore Our <span>Client Feedback</span> On Our Services
            </h2>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="unique-feedback-slides"
          >
            {/* First Slide */}
            <SwiperSlide>
              <div className="unique-single-feedback">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “Avanza has been instrumental in our operations. Their dedication to quality and safety is commendable. We highly recommend their services.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>John Smith</h3>
                  <span>Operations Manager</span>
                </div>
                <div className="quote">
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide>
              <div className="unique-single-feedback">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “Avanza's commitment to excellence is unmatched. They consistently deliver top-notch solutions tailored to our needs.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Emily Johnson</h3>
                  <span>Drilling Engineer</span>
                </div>
                <div className="quote">
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Third Slide */}
            <SwiperSlide>
              <div className="unique-single-feedback">
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <p>
                  “Avanza's expertise in the field is unparalleled. Their attention to detail and customer satisfaction make them a valuable partner.”
                </p>
                <div className="client-info">
                  <Image
                    src="/images/cryptocurrency-home/user3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Michael Brown</h3>
                  <span>Production Manager</span>
                </div>
                <div className="quote">
                  <Image
                    src="/images/cryptocurrency-home/quote.png"
                    alt="image"
                    width={118}
                    height={86}
                  />
                </div>
              </div>
            </SwiperSlide>
            
            {/* Additional Slides Go Here */}

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
