import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Handle errors

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/all-books', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setBooks(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch books');
                }
            } catch (err) {
                setError('An error occurred while fetching books');
                console.error("Error fetching books:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/book/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert("Book deleted successfully!");
                setBooks(prev => prev.filter(book => book._id !== id));
            } else {
                alert("Failed to delete the book.");
            }
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Error deleting the book.");
        }
    };

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>; // Show error if any

    return (
        <div className="px-4 py-6">
            <h2 className="text-3xl font-bold mb-6">Manage Books</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Author</th>
                            <th className="py-2 px-4 border">Category</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book._id} className="text-center">
                                <td className="py-2 px-4 border">{book.bookTitle}</td>
                                <td className="py-2 px-4 border">{book.authorName}</td>
                                <td className="py-2 px-4 border">{book.category}</td>
                                <td className="py-2 px-4 border flex justify-center gap-4">
                                    <Link
                                        to={`/admin/dashboard/edit-books/${book._id}`}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(book._id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooks;
