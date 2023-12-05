import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from "react-router-dom";

const Container = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const Wrapper = styled.div`
    width: 90%;
`;

const Intro = styled.p`
    font-weight: bold;
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
`;

const Image = styled.img`
    object-fit: cover;
    height: 45vh;
    width: 45vh;
`;

const Post = styled.div`
    display: flex;
`;


const Headline = styled(Link)`
    font-size: calc(15px + 2vw);
    font-family: 'Archivo Black', sans-serif;
    margin-left: 5vh;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
`;

const HomePosts = () => {
    const [posts, setPosts] = useState([]);
    const [postNumber, setPostNumber] = useState(0);

    useEffect(() => {
        const getPosts = async() => {
            try {
                console.log("get that post")
                const response = await axios.get("/api/post/getPost");

                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);

    return (
        <Container>
            <Wrapper>
                <Intro>Recent Posts</Intro>
                {posts.map((post, index) => (
                <Post>
                    <Image src={post.photoUrl}/>
                    <Headline key={index} to={`/posts/${index}`}>{post.title}</Headline>
                </Post>
                ))}
            </Wrapper>
        </Container>
    );
}

export default HomePosts;