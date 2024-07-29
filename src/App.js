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
import LoginAdmin from "./pages/LoginAdmin";
import SignUpAdmin from "./pages/SignUpAdmin";
import AddBlogPost from "./pages/AddBlogPost";
import AllBlogPosts from "./pages/AllBlogPosts";
import EditLogin from "./pages/EditLogin";
import EditSignUp from "./pages/EditSignUp";

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
        path:"/blog/:id",
        element: <Blog/>
    },
    {
        path:"/blog/addpost",
        element: <AddBlogPost/>
    },
    {
        path:"/blog/allposts",
        element: <AllBlogPosts/>
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
        path:"/signup",
        element: <SignUp/>
    },
    {
        path:"/admin/login",
        element: <EditLogin/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/admin/signup",
        element: <EditSignUp/>
    },
    {
        path: "/admin",
        element: <SignUp/>
    },
    {
        path:"/adminLogin",
        element: <LoginAdmin/>
    },
    {
        path:"/adminSignup",
        element: <SignUpAdmin/>
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