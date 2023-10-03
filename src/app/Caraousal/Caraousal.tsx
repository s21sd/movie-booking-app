"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MovieCardType } from '../types/types';
import Moviecard from './Moviecard';
const Caraousal = () => {
    const Movie: MovieCardType[] = [
        {
            title: "Fukr3y",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODIuNEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350845-lsbjjfrggs-portrait.jpg",
            _id: "1",
            rating: 8.2,
            type: "Comedy/Drama"
        },
        {
            title: "Javan",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA0OTIuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-htbdqyftsc-portrait.jpg",
            _id: "2",
            rating: 8.4,
            type: "Action/Thriller"
        },
        {
            title: "The Vaccine War",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTguNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00344388-bjntuyfblr-portrait.jpg",
            _id: "3",
            rating: 8.3,
            type: "Drama"
        },
        {
            title: "The Creator",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTEuM0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360287-jmhftuvdqd-portrait.jpg",
            _id: "4",
            rating: 8.5,
            type: "Action"
        },
        {
            title: "The Nun 2",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICA0NC44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363916-xfaaanbjex-portrait.jpg",
            _id: "5",
            rating: 8.5,
            type: "Hriller"
        },
        {
            title: "Dream Girl 2",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICA3OC4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-fggahaxafv-portrait.jpg",
            _id: "6",
            rating: 8.5,
            type: "Comedy/Drama"
        },
        {
            title: "Fukr3y",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODIuNEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350845-lsbjjfrggs-portrait.jpg",
            _id: "1",
            rating: 8.2,
            type: "Comedy/Drama"
        },
        {
            title: "Javan",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA0OTIuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-htbdqyftsc-portrait.jpg",
            _id: "2",
            rating: 8.4,
            type: "Action/Thriller"
        },
        {
            title: "The Vaccine War",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTguNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00344388-bjntuyfblr-portrait.jpg",
            _id: "3",
            rating: 8.3,
            type: "Drama"
        },
        {
            title: "The Creator",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTEuM0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360287-jmhftuvdqd-portrait.jpg",
            _id: "4",
            rating: 8.5,
            type: "Action"
        },
        {
            title: "The Nun 2",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICA0NC44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363916-xfaaanbjex-portrait.jpg",
            _id: "5",
            rating: 8.5,
            type: "Hriller"
        },
        {
            title: "Dream Girl 2",
            imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICA3OC4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-fggahaxafv-portrait.jpg",
            _id: "6",
            rating: 8.5,
            type: "Comedy/Drama"
        },




    ]
    return (
        <div className='sliderOut'>

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    Movie.map((movie) => {
                        return (
                            <SwiperSlide>
                                <Moviecard {...movie} />
                               
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Caraousal