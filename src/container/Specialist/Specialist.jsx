import "./Specialist.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Img/Doctors/imgd1.png";
import img2 from "../Img/Doctors/imgd2.png";
import img3 from "../Img/Doctors/imgd3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const Specialist = () => {
  return (
    <div className="specialist">
      <div className="specialist-heading">Our Medical Specialist</div>
      <div>
        <div className="container-offer-slider-s">
          <Swiper
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 992px
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className=" offer-slider-s"
          >
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mySwiper-specialist">
                <img src={img3} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Specialist;
