import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className='mt-28 mb-20 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-12'>Find All Books Here</h2>
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {books.map(book => (
                    <div
                        key={book._id}
                        className='bg-white shadow-md rounded-2xl p-4 flex flex-col text-center hover:shadow-xl transition duration-300 h-[550px]'
                    >
                        <img
                            src={book.imageURL}
                            alt={book.bookTitle}
                            className='w-full h-64 object-cover rounded-xl mb-4'
                        />
                        <h3 className='text-lg font-semibold mb-1 truncate'>{book.bookTitle}</h3>
                        <p className='text-gray-600 text-sm mb-1'>by {book.authorName}</p>
                        <p className='text-xs text-blue-500 mb-2'>{book.category}</p>
                        <p className='text-gray-500 text-sm mb-4 line-clamp-3'>
                            {book.bookDescription}
                        </p>
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
                ))}
            </div>
        </div>
    );
};

export default Shop;
