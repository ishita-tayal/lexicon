import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required icons
import { FaStar } from 'react-icons/fa6';

// Import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-4xl font-extrabold text-center mb-12 leading-snug text-gray-900'>What Our Customers Are Saying</h2>
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
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "I recently bought a few novels from this platform, and the experience was fantastic! The website was easy to navigate, and my order arrived quickly and in perfect condition. Highly recommend for book lovers!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>Samantha Lee</h5>
                                <p className='text-sm text-gray-500'>Book Enthusiast</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "Absolutely loved this platform! I found all my favorite books and some new releases I’ve been wanting. The prices were great, and the delivery was fast. I’ll definitely be back for more purchases!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>Mark Ping</h5>
                                <p className='text-sm text-gray-500'>CEO, ABC Bookstore</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "This is by far the best place to find rare books at great prices. I was able to get my hands on a limited edition collection that I couldn’t find anywhere else. The service was exceptional as well!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>Liam Wright</h5>
                                <p className='text-sm text-gray-500'>Avid Reader</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "An outstanding platform! I’ve been able to buy and sell books here with ease. The support team is very responsive, and I’ve never had an issue with my orders. Truly a great experience!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>Emily Dawson</h5>
                                <p className='text-sm text-gray-500'>Book Collector</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "This site made it so easy to sell my used books and get a great price for them! It was fast, and I didn’t have to worry about any complicated processes. I’ll be using this platform again!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>John Smith</h5>
                                <p className='text-sm text-gray-500'>Independent Seller</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-white shadow-xl p-8 rounded-xl border border-gray-200'>
                        <div className='space-y-4'>
                            <div className='flex items-center text-amber-500 gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='text-gray-700 mb-4 font-medium leading-relaxed'>
                                    "I was a little hesitant at first, but the platform exceeded my expectations. Fast delivery, great customer support, and a smooth shopping experience. Will definitely keep using it for all my book purchases!"
                                </p>
                                <h5 className='text-lg font-semibold text-gray-900'>Olivia Green</h5>
                                <p className='text-sm text-gray-500'>Book Buyer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
