import React from "react";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import HomePosts from "../components/HomePosts";
import HomeFooter from "../components/HomeFooter";
import HeadVideo from "../components/HeadVideo";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeadVideo/>
            <HomePosts/>
            <HomeFooter/>
        </div>
    );
}

export default Home;