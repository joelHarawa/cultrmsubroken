import react from "react";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";
import BlogPost from "../components/BlogPost";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
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