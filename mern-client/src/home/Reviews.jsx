import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { FaStar } from 'react-icons/fa6'


// import required modules
import { Pagination } from 'swiper/modules';


const Reviews = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"I recently bought a few novels from this platform, and the experience was fantastic! The website was easy to navigate, and my order arrived quickly and in perfect condition. Highly recommend for book lovers!"</p>
                                <h5 className='text-lg font-medium'>Samantha Lee</h5>
                                <p className='text-base'>Book Enthusiast</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"Absolutely loved this platform! I found all my favorite books and some new releases I’ve been wanting. The prices were great, and the delivery was fast. I’ll definitely be back for more purchases!"</p>
                                <h5 className='text-lg font-medium'>Mark Ping</h5>
                                <p className='text-base'>CEO, ABC Bookstore</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"This is by far the best place to find rare books at great prices. I was able to get my hands on a limited edition collection that I couldn’t find anywhere else. The service was exceptional as well!"</p>
                                <h5 className='text-lg font-medium'>Liam Wright</h5>
                                <p className='text-base'>Avid Reader</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"An outstanding platform! I’ve been able to buy and sell books here with ease. The support team is very responsive, and I’ve never had an issue with my orders. Truly a great experience!"</p>
                                <h5 className='text-lg font-medium'>Emily Dawson</h5>
                                <p className='text-base'>Book Collector</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"This site made it so easy to sell my used books and get a great price for them! It was fast, and I didn’t have to worry about any complicated processes. I’ll be using this platform again!"</p>
                                <h5 className='text-lg font-medium'>John Smith</h5>
                                <p className='text-base'>Independent Seller</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>"I was a little hesitant at first, but the platform exceeded my expectations. Fast delivery, great customer support, and a smooth shopping experience. Will definitely keep using it for all my book purchases!"</p>
                                <h5 className='text-lg font-medium'>Olivia Green</h5>
                                <p className='text-base'>Book Buyer</p>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default Reviews
