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
    }
]);
const App = () => {
    return <RouterProvider router={router}/>;

}
export default App;