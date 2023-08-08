import React from 'react'
import "./portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import One from "../../img/one.jpg";
import Two from "../../img/two.jpg";
import Three from "../../img/three.jpg";
import Shopping from "../../img/shopping.png";
import 'swiper/css'

const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span>Recents Projects</span>
            <span>Portfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'>
            
                <SwiperSlide>
                    <img src={One} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Two} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Three} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Shopping} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>   
   
     )
}

export default Portfolio
