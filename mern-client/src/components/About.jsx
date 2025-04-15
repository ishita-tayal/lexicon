import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Link } from 'react-router-dom'
import Book1 from '../assets/about-1.jpg'
import Book2 from '../assets/about-2.jpg'
import Book3 from '../assets/about-3.jpg'
import Book4 from '../assets/about-4.jpg'
import Book5 from '../assets/about-5.jpg'
import Book6 from '../assets/about-6.jpg'
import Carbook1 from '../assets/car-book-1.jpg'
import Carbook2 from '../assets/car-book-2.jpg'
import Carbook3 from '../assets/car-book-3.jpg'
import Carbook4 from '../assets/car-book-4.jpg'
import Carbook5 from '../assets/car-book-5.jpg'


const About = () => {
    return (
        <div className="min-h-screen font-sans text-black">
            <div className="bg-white py-12 px-6 md:px-20 mt-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Get to Know Lexicon</h1>
                    <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto">
                        More than a bookstore — we're a community of readers building something beautiful.
                    </p>
                </div>
            </div>

            {/* Discover Section */}
            <div className="bg-teal-100 py-20 px-6 md:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
                        <img src={Book1} alt="Book 1" className="object-cover w-full h-48" />
                        <img src={Book2} alt="Book 2" className="object-cover w-full h-48" />
                        <img src={Book3} alt="Book 3" className="object-cover w-full h-48" />
                        <img src={Book4} alt="Book 4" className="object-cover w-full h-48" />
                        <img src={Book5} alt="Book 5" className="object-cover w-full h-48" />
                        <img src={Book6} alt="Book 6" className="object-cover w-full h-48" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 text-black">Your New Favorite Book <span className="text-blue-700">Lives Here!</span></h2>
                        <p className="text-gray-700 mb-6">
                            Ready to fall in love with reading all over again? Browse unforgettable stories, hidden gems, and timeless classics — all in one place.


                        </p>
                        <Link to='/shop'>
                            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Visit Shop</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Story and Carousel Section */}
            <div className="bg-white py-16 px-6 md:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 rounded-3xl shadow-xl bg-teal-100 border border-teal-200">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lexicon began with a mission to bridge the gap between readers and stories.
                            We envisioned a place where books weren’t just sold — they were experienced.
                            With carefully curated collections, thoughtful reviews, and a platform to read
                            instantly, Lexicon is built for the modern-day book lover.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="w-52 h-96" // narrower width
                        >
                            {[
                                { genre: "fantasy", image: Carbook1 },
                                { genre: "non-fiction", image: Carbook2 },
                                { genre: "romance", image: Carbook3 },
                                { genre: "thriller", image: Carbook4 },
                                { genre: "sci-fi", image: Carbook5 },
                            ].map(({ genre, image }, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="rounded-2xl shadow-xl border bg-white flex flex-col overflow-hidden p-2"
                                >
                                    <img
                                        src={image}
                                        alt={`${genre} genre`}
                                        className="w-full h-80 object-contain rounded-xl"
                                    />
                                    <div className="text-center mt-2 px-2">
                                        <h3 className="text-base font-semibold capitalize text-blue-700">
                                            Top {genre} books
                                        </h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-teal-100 py-20 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
                    <p className="text-gray-700 leading-loose">
                        To democratize reading by making books accessible, affordable, and enjoyable.
                        Whether you’re a collector, a casual reader, or someone rediscovering books,
                        Lexicon ensures a seamless experience from shelf to screen. Every page turned
                        is a story closer to your next favorite world.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-white py-20 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">What We Value</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal-400 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Diversity</h3>
                        <p className="text-gray-600 text-sm">
                            From regional literature to global bestsellers — every voice deserves a shelf.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal-400 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Accessibility</h3>
                        <p className="text-gray-600 text-sm">
                            Browse, buy, and read — anytime, anywhere, on any device.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal-400 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Passion</h3>
                        <p className="text-gray-600 text-sm">
                            Run by bibliophiles for bibliophiles — because we know the joy of a good book.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="bg-teal-100 py-10 text-center">
                <p className="text-blue-700 text-sm italic">
                    Crafted for readers. Powered by stories. — Team Lexicon 📚
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Lexicon is a project by Ishita Tayal, built with love for books and code.
                </p>
            </div>
        </div>
    );
};

export default About;