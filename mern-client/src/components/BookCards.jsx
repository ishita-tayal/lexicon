import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({ headline, books }) => {
    return (
        <div className="my-16 px-4 lg:px-24">
            <h2 className="text-5xl text-center font-bold text-black my-5">{headline}</h2>

            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    grabCursor={true}
                    simulateTouch={true}
                    allowTouchMove={true}
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id}>
                            <div className="flex flex-col h-full">
                                <Link to={`/book/${book._id}`}>
                                    <div className='relative'>
                                        <img
                                            src={book.imageURL}
                                            alt={book.bookTitle}
                                            className="rounded-md w-full h-64 object-cover"
                                        />
                                    </div>
                                </Link>
                                <div className='mt-2 text-center flex flex-col flex-grow'>
                                    <h3 className="text-lg font-semibold">{book.bookTitle}</h3>
                                    <p className="text-gray-600">{book.authorName}</p>
                                    <p className="text-blue-700 font-semibold mt-1">₹300.00</p>
                                    <div className='mt-auto'>
                                        <a
                                            href={book.bookPDFURL}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                                        >
                                            Read Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
