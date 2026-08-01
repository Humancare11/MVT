"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import  "./Testimonials.css";
export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "HumanCare MVT made my cardiac surgery journey stress-free. From the first consultation to post-treatment follow-up, every step was professionally handled.",
      name: "Ahmed Al-Rashid",
      country: "UAE",
    },
    {
      stars: 5,
      text: "My mother received excellent cancer treatment in India. The team's dedication and the hospital's facilities exceeded our expectations.",
      name: "Grace Adeyemi",
      country: "Nigeria",
    },
    {
      stars: 5,
      text: "The affordable knee replacement surgery changed my life. Thank you HumanCare for the seamless experience and caring support.",
      name: "Mohammad Rahman",
      country: "Bangladesh",
    },
    {
      stars: 5,
      text: "HumanCare's team guided us throughout the medical visa, travel, and treatment phases. Truly grateful for their support.",
      name: "Sarah Williams",
      country: "UK",
    },
    {
      stars: 5,
      text: "Best medical tourism service! They arranged everything and ensured we were comfortable during the whole treatment.",
      name: "Omar Bin Khalid",
      country: "Saudi Arabia",
    },
    {
      stars: 5,
      text: "My father underwent successful spine surgery in India. Thank you HumanCare for your excellent coordination and compassionate support.",
      name: "Lilian Moyo",
      country: "Kenya",
    },
  ];

  return (
    <>
    <section className="testimonial-section">
        <div className="container">
      <div className="testimonial-header">
        <span className="tag">Testimonials</span>
        <h2>Patient Success Stories</h2>
        <p>Hear from international patients who trusted us with their healthcare journey</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-slider"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="stars" role="img" aria-label={`${review.stars} out of 5 stars`}>
                {"★".repeat(review.stars)}
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="reviewer">
                <div className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.country}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
    </>
  );
}
