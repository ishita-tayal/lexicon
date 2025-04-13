import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from '../assets/awardbooks.png'

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-3xl mb-6 font-bold leading-snug'>2025 National Book Awards For Fiction Shortlist</h2>
                    <Link to="https://www.nationalbook.org/submissions-open-for-the-2025-national-book-awards/" className='block mt-4'>
                        <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                            Explore More
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={bookPic} alt="" className='w-96' />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner