import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            {/* Image Section */}
            <div className='md:w-1/2'>
                <img src={FavBookImg} alt='Favorite Books' className='rounded md:w-10/12' />
            </div>

            {/* Text Section */}
            <div className='md:w-1/2 space-y-4 flex flex-col justify-center'>
                <h2 className='text-4xl font-bold md:w-3/4 leading-snug'>
                    Discover Your Next <span className='text-blue-700'>Favorite Read!</span>
                </h2>

                <p className='text-lg md:w-5/6 text-gray-700'>
                    Dive into a world of stories, ideas, and adventures. Whether you're into bestsellers,
                    hidden gems, or literary award-winners — we've got a book for every reader.
                </p>

                {/* Stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listings</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
                </div>

                {/* Button */}
                <Link to="/shop" className='block mt-4'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Explore More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FavBook
