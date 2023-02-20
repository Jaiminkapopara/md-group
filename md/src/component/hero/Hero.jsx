import React from 'react'
import './hero.css';
import hero from '../../assets/2.jpg'
import img1 from '../../assets/7.jpg'
import img2 from '../../assets/8.jpg'
import img3 from '../../assets/11.jpg'
import img4 from '../../assets/3.jpg'
import img5 from '../../assets/4.jpg'
import img6 from '../../assets/5.jpg'
import img7 from '../../assets/12.jpg'
import img8 from '../../assets/10.jpg'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";



import { BiUpArrowCircle } from 'react-icons/bi';



const Hero = () => {


  return (
    <div className='hero'>
      <div className="img" >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={hero} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img8} alt="" /></SwiperSlide>

          </Swiper>

         
      </div>

      <div className="up">
        <a href="#">
          <BiUpArrowCircle className='arrow' />
        </a>
      </div>
    </div>
  )
}

export default Hero
