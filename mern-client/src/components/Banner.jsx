import React from 'react'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}
                <div>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus aperiam praesentium. Expedita eos atque blanditiis libero, molestias enim laudantium omnis quasi quibusdam inventore cupiditate earum. Sequi quia cum totam.</p>
                    <div>
                        <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none bg-white' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>

                {/* right side */}
                <div>Right Side</div>
            </div>
        </div>
    )
}

export default Banner