import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Issues from "./pages/Issues";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import {createHashRouter, RouterProvider, Route} from "react-router-dom";
import AboutAdmin from "./pages/AboutAdmin";
import IssuesAdmin from "./pages/IssuesAdmin";
import BlogAdmin from "./pages/BlogAdmin";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";


const router = createHashRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/about",
        element: <About/>
    },
    {
        path:"/issues",
        element: <Issues/>
    },
    {
        path:"/blog",
        element: <Blog/>
    },
    {
        path:"/admin",
        element: <Admin/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path:"/admin/about",
        element: <AboutAdmin/>
    },
    {
        path:"/admin/issues",
        element: <IssuesAdmin/>
    },
    {
        path:"/admin/blog",
        element: <BlogAdmin/>
    },
]);
const App = () => {
    return <RouterProvider router={router}/>;

}
export default App;