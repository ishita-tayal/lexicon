import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaPlus, FaBook, FaThLarge } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-100 text-gray-800 border-r border-gray-300 px-4 pb-6 pt-6 min-h-screen">
            <h2 className="text-xl font-semibold mb-8 text-center text-gray-900">
                Admin Panel
            </h2>

            <nav className="flex flex-col gap-3">
                {/* Dashboard Link */}
                <NavLink
                    to="/admin/dashboard"
                    className="flex items-center gap-3 px-4 py-2 rounded-md transition text-gray-600 hover:bg-gray-200"
                >
                    <FaThLarge /> Dashboard
                </NavLink>

                {/* Upload Book Link */}
                <NavLink
                    to="upload"
                    className="flex items-center gap-3 px-4 py-2 rounded-md transition text-gray-600 hover:bg-gray-200"
                >
                    <FaPlus /> Upload Book
                </NavLink>

                {/* Manage Books Link */}
                <NavLink
                    to="manage"
                    className="flex items-center gap-3 px-4 py-2 rounded-md transition text-gray-600 hover:bg-gray-200"
                >
                    <FaBook /> Manage Books
                </NavLink>

                {/* Back to Home Link */}
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition mt-8"
                >
                    <FaHome /> Back to Home
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
