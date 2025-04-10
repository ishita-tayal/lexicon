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
                        <input type='search' name='search' id='search' placeholder='Search a book' />
                    </div>
                </div>

                {/* right side */}
                <div>Right Side</div>
            </div>
        </div>
    )
}

export default Banner