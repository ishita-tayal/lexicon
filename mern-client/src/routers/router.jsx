import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App"
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
// import UploadBook from "../dashboard/UploadBook";
// import ManageBooks from "../dashboard/ManageBooks";
// import EditBooks from "../dashboard/EditBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "admin/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: 'true',
                        element: <Dashboard />
                    },
                    // {
                    //     path: 'upload',
                    //     element: <UploadBook />
                    // },
                    // {
                    //     path: 'manage',
                    //     element: <ManageBooks />
                    // },
                    // {
                    //     path: 'edit-books/:id',
                    //     element: <EditBooks />
                    // }
                ]
            }
        ]
    },
]);

export default router;