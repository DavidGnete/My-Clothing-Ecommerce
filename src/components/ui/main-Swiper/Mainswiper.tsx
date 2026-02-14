"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import styles from './mainSwiper.module.css';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination, Autoplay } from 'swiper/modules';


interface Props {
  images: string[],


}

export const Mainswiper = ({images}: Props) => {
  return (
    <div>
        <Swiper  pagination={{
        }}
        loop
        autoplay={{delay: 3000, disableOnInteraction: false,}}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className={styles.mySwiper} >
        {
          images.map ( image => (
          <SwiperSlide className={styles.mySwiper}>
            <Image 
            src={`/promotion/${image}`}
            alt='imagenes'
            fill
            priority
            className='object-cover'/>
          </SwiperSlide>
          ))

          
        }

        
       
      </Swiper>
    </div>
  )
}
