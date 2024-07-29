/*
Title: Blog.js
Author: Joel Harawa
Purpose: Display the current blog post to the user
*/

import react, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";
import BlogPost from "../components/BlogPost";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { 
    FaChevronLeft, FaChevronRight, FaNewspaper, FaPlus
 } from "react-icons/fa";

// Styled components
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;



const Blog = () => {
    
    return(
        <>
            <Navbar/>
            <Container>
                <BlogPost/>
            </Container> 
        </>
    );
}

export default Blog;