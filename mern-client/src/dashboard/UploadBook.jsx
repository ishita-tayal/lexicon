import React, { useState } from 'react';

const UploadBook = () => {
    // State for storing form data
    const [bookData, setBookData] = useState({
        bookTitle: '',
        authorName: '',
        imageURL: '',
        category: '',
        bookDescription: '',
        bookPDFURL: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!bookData.bookTitle || !bookData.authorName || !bookData.bookDescription || !bookData.category || !bookData.imageURL || !bookData.bookPDFURL) {
            alert('All fields are required!');
            return;
        }

        // Get the token from localStorage (or wherever it's stored)
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('You must be logged in to upload a book');
            return;
        }

        // Log the form data to console (optional)
        console.log('Form submitted with data:', bookData);

        try {
            const response = await fetch('http://localhost:5000/upload-book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  // Add the token to the headers
                },
                body: JSON.stringify(bookData),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Book uploaded successfully!');
                setBookData({
                    bookTitle: '',
                    authorName: '',
                    imageURL: '',
                    category: '',
                    bookDescription: '',
                    bookPDFURL: ''
                });
            } else {
                alert('Error uploading book: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error while uploading the book.');
        }
    };

    return (
        <div className="px-6 my-2 min-h-screen">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">Upload a Book</h2>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                {/* Book Title */}
                <div className="mb-6">
                    <label htmlFor="bookTitle" className="block font-semibold text-gray-700 mb-2">Book Title</label>
                    <input
                        type="text"
                        id="bookTitle"
                        name="bookTitle"
                        value={bookData.bookTitle}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book title"
                    />
                </div>

                {/* Author Name */}
                <div className="mb-6">
                    <label htmlFor="authorName" className="block font-semibold text-gray-700 mb-2">Author Name</label>
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        value={bookData.authorName}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter author name"
                    />
                </div>

                {/* Category */}
                <div className="mb-6">
                    <label htmlFor="category" className="block font-semibold text-gray-700 mb-2">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={bookData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book category"
                    />
                </div>

                {/* Book Description */}
                <div className="mb-6">
                    <label htmlFor="bookDescription" className="block font-semibold text-gray-700 mb-2">Book Description</label>
                    <textarea
                        id="bookDescription"
                        name="bookDescription"
                        value={bookData.bookDescription}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book description"
                        rows="4"
                    />
                </div>

                {/* Image URL */}
                <div className="mb-6">
                    <label htmlFor="imageURL" className="block font-semibold text-gray-700 mb-2">Book Image URL</label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        value={bookData.imageURL}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book image URL"
                    />
                </div>

                {/* Book PDF URL */}
                <div className="mb-6">
                    <label htmlFor="bookPDFURL" className="block font-semibold text-gray-700 mb-2">Book PDF Link</label>
                    <input
                        type="text"
                        id="bookPDFURL"
                        name="bookPDFURL"
                        value={bookData.bookPDFURL}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book PDF link"
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                    <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                        Upload Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadBook;
