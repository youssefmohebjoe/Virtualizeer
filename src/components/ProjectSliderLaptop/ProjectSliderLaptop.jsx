import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './ProjectSliderLaptop.module.css';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import WhiteDoveNursery from '../../assets/images/White Dove Nursery.jpg'
import StudioApartment from '../../assets/images/Studio Apartment.jpg'
import SmartVisionSchool from '../../assets/images/Smart Vision School.jpg'
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <div className='mt-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    speed={1000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 50,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                  <SwiperSlide >
                        <div className="mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=tFJf6Ji4GL5">
                                <img className="rounded-t-lg" src={WhiteDoveNursery} alt="White Dove Nursery" />
                            </Link>
                            <div className="p-5">
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=tFJf6Ji4GL5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">White Dove Nursery</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=tFJf6Ji4GL5" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                    Take a tour
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=2gbZvKDuyRV">
                                <img className="rounded-t-lg" src={StudioApartment} alt="Studio Apartment" />
                            </Link>
                            <div className="p-5">
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=2gbZvKDuyRV">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Studio Apartment</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=2gbZvKDuyRV" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                    Take a tour
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=WFnZ1J7JdQg">
                                <img className="rounded-t-lg" src={SmartVisionSchool} alt="Studio Apartment" />
                            </Link>
                            <div className="p-5">
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=WFnZ1J7JdQg">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smart Vision School</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                                <Link to="https://my.matterport.com/show/?play=1&lang=en-US&m=WFnZ1J7JdQg" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                    Take a tour
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
