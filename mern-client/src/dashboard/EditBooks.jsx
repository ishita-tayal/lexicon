import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditBooks = () => {
    const bookData = useLoaderData();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        bookTitle: '',
        authorName: '',
        imageURL: '',
        category: '',
        bookDescription: '',
        bookPDFURL: ''
    });

    useEffect(() => {
        if (bookData) {
            setFormData({
                bookTitle: bookData.bookTitle || '',
                authorName: bookData.authorName || '',
                imageURL: bookData.imageURL || '',
                category: bookData.category || '',
                bookDescription: bookData.bookDescription || '',
                bookPDFURL: bookData.bookPDFURL || ''
            });
        }
    }, [bookData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/book/${bookData._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Book updated successfully!');
                navigate('/admin/dashboard/manage');
            } else {
                alert('Failed to update book');
            }
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    return (
        <div className="px-4 min-h-screen">
            <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 max-w-4xl">
                <div className="w-full md:w-[48%]">
                    <label className="block mb-2 font-medium" htmlFor="bookTitle">Book Title</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        type="text"
                        name="bookTitle"
                        value={formData.bookTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full md:w-[48%]">
                    <label className="block mb-2 font-medium" htmlFor="authorName">Author Name</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        type="text"
                        name="authorName"
                        value={formData.authorName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full md:w-[48%]">
                    <label className="block mb-2 font-medium" htmlFor="imageURL">Image URL</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        type="text"
                        name="imageURL"
                        value={formData.imageURL}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full md:w-[48%]">
                    <label className="block mb-2 font-medium" htmlFor="category">Category</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full">
                    <label className="block mb-2 font-medium" htmlFor="bookDescription">Description</label>
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 py-2 h-28"
                        name="bookDescription"
                        value={formData.bookDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full">
                    <label className="block mb-2 font-medium" htmlFor="bookPDFURL">Book PDF Link</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        type="text"
                        name="bookPDFURL"
                        value={formData.bookPDFURL}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mt-6"
                >
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBooks;
