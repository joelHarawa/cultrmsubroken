import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import {createHashRouter, RouterProvider, Route} from "react-router-dom";
import AboutAdmin from "./pages/AboutAdmin";
import PostsAdmin from "./pages/PostsAdmin";
import GetInvolvedAdmin from "./pages/GetInvolvedAdmin";
import ContactAdmin from "./pages/ContactAdmin";
import BlogAdmin from "./pages/BlogAdmin";


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
        path:"/getinvolved",
        element: <GetInvolved/>
    },
    {
        path:"/contact",
        element: <Contact/>
    },
    {
        path:"/posts",
        element: <Posts/>
    },
    {
        path:"/posts/:postIndex",
        element: <Posts/>
    },
    {
        path:"/admin",
        element: <Admin/>
    },
    {
        path:"/blog",
        element: <Blog/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/admin/about",
        element: <AboutAdmin/>
    },
    {
        path:"/admin/posts",
        element: <PostsAdmin/>
    },
    {
        path:"/admin/getInvolved",
        element: <GetInvolvedAdmin/>
    },
    {
        path:"/admin/contact",
        element: <ContactAdmin/>
    },
    {
        path:"/admin/blog",
        element: <BlogAdmin/>
    }
]);
const App = () => {
    return <RouterProvider router={router}/>;

}
export default App;