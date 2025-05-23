import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}
                <div className='space-y-8 md:w-1/2 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books
                        <span className='text-blue-700'> for the Best Prices</span></h2>
                    <p className='md:w-4/5'>Explore our vast library of new and pre-loved books across all genres. Whether you're buying your next adventure or selling your favorite classic, we've made it simple, fast, and secure.</p>
                    <div>
                        <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none bg-white' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>

                {/* right side */}
                <div>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    )
}

export default Banner