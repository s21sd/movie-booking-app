"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const width = window.innerWidth;
const height = window.innerHeight;
const Slider = () => {

    const [banner, setBanner] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1694155301901_offeroftheweekdesktop.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1695071372300_web.jpg'
        }
    ])
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    banner.map((banner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image src={banner.imgUrl} alt='images' width={width} height={height / 2} style={{
                                    objectFit: 'cover'
                                }} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider