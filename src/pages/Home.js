/*
Title: Home.js
Author: Joel Harawa
Purpose: Display the home page to the user
*/

import React from "react";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slides/>
        </div>
    );
}

export default Home;