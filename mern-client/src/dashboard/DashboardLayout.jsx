import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-white min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
