//import React from "react";
//import MainPage from "../components/MainPage/MainPage";
//import { Navigate, Outlet,Route, Routes } from "react-router-dom";
//import AuthorizationBlank from "../components/AuthorizationBlank/AuthorizationBlank";
//import { useAuth } from "../../provider/authProvider";

//export default function RoutesApp() {
//    return (
//        <Routes>
//            <Route path="/" element={<MainPage />} />
//            <Route path="/login" element={<AuthorizationBlank />} />
//            <Route path="*" element={<Navigate to="/" />} />


//        </Routes>
//    );
//}

import React from "react";
import MainPage from "../components/MainPage/MainPage";
import AuthorizationBlank from "../components/AuthorizationBlank/AuthorizationBlank";
import SearchPage from "../components/SearchPage/SearchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";


export default function RoutesApp() {
    const { token } = useAuth();
    const routesForPublic = [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/login",
            element: <AuthorizationBlank />,
        },
    ];
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "/search",
                    element: <SearchPage />,
                },
                
            ],
        },
    ];
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/login",
            element: <AuthorizationBlank />,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
}