import React from "react";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import HomePosts from "../components/HomePosts";
import HomeFooter from "../components/HomeFooter";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeadContent/>
            <HomePosts/>
            <HomeFooter/>
        </div>
    );
}

export default Home;