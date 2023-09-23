import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import Card from "./card";
const Testimonials = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() => {
    function o() {
      const tes = document.getElementById("TESTIMONIALS");
      if (window.scrollY > tes.offsetTop - 500) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll", o);
  }, []);
  return (
    <div id="TESTIMONIALS">
      {displayM && (
        <>
          <h1>People talk about us</h1>
          <h4>
            I got a job that was in accordance with the salary and field of work
            The process of submitting an appilication was quite cosy
          </h4>
          <div id="t-1">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                100: {
                  width: 100,
                  slidesPerView: 0.4,
                },
                753: {
                  width: 768,
                  slidesPerView: 1.7,
                },
              }}
            >
              <SwiperSlide>
                <Card img={"./IMG/people1.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people2.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people1.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people2.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people1.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people2.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people1.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people2.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card img={"./IMG/people1.jpg"} />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
