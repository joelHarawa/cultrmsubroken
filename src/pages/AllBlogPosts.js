import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { formatTime } from "../components/BlogPost";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
`;


const Posts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const PostImageContainer = styled.div`
    height: 100%;
    width: 15%; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const PostTitle = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    padding-top: 8px;
`;

const PostAuthor = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    padding-top: 8px;
`;

const PostDate = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding-top: 8px;
`;

const Post = styled.div`
    display: flex;
    width: 90%;
    background-color: #f2f2f2;
    border-radius: 15px;
    overflow: hidden;
    height: 15vh;
    margin-top: 15px;
    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

const PostData = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 100%;
`;

const AllBlogPosts = () => {
    const apiUrl = 'https://18.219.147.241';
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        const getPosts = async () => {
            try {
            const response = await axios.get(`${apiUrl}/api/get/getPost`);
            console.log(response);
            setPosts(response.data);
            } catch (error) {
                console.error(error);
            } 
        }
        getPosts();
    }, [])

    const handlePostClick = (index) => {
        navigate(`/blog/${index}`);
    }


    return (
        <>
            <Navbar/>
            <Container>
                <Header>
                    <Title>All Blog Posts</Title>
                </Header>
                <Posts>
                {posts.slice().reverse().map((post, reversedIndex) => {
                // Find the original index by subtracting the reversed index from the length of the posts array minus 1
                const originalIndex = posts.length - 1 - reversedIndex;
    
                return (
                <Post key={post._id} onClick={() => handlePostClick(originalIndex)}>
                    <PostImageContainer>
                        <PostImage src={post.photoUrl}/>
                    </PostImageContainer>
                    <PostData>
                        <PostTitle>{post.title}</PostTitle>
                        <PostAuthor>{post.firstName} {post.lastName}</PostAuthor>
                        <PostDate>{formatTime(post.createdAt)}</PostDate>
                    </PostData>
                </Post>
                );
                })}
                </Posts>
            </Container>
        </>
    )
}

export default AllBlogPosts;