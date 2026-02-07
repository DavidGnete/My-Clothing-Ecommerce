"use client";

import {  Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import Image from 'next/image';


import 'swiper/css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';


interface Props {
    images: string[];
    title:string;
    clasName?: string;
}

export const ProductMovileSlideShop = ({images, title, clasName}: Props) => {

  return (
    <div className={clasName}>

    
     <Swiper
     style={{
      width: '100vw',
      height: '500px'
     }}
        pagination
        autoplay = {
            {
                delay: 2500
            }
        }
        modules={[FreeMode,  Autoplay, Pagination]}
        className="mySwiper2"
      >

        {
            images.map ( image => ( 
            <SwiperSlide key={image}>
                <Image loading='lazy'
                width={600}
                height={500}
                src={image }
                alt={title}
                className=" object-fill"
                />
               
                
            </SwiperSlide>

            ))
        }
      </Swiper>

    </div>
  )
}
