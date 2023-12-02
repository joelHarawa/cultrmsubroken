import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import axios from "axios";
import Body from "../components/Body";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Toggle = styled.div`
    display: flex;
    height: 10vh;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    justify-content: space-around;
`;

const Direction = styled.h2`
  font-size: calc(20px + 1vw);
  font-family: 'Archivo Black', sans-serif;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

const Posts = () => {
    const apiUrl = 'http://18.219.147.241:4000';
    const {postIndex} = useParams();
    const [posts, setPosts] = useState([]);
    const [postNumber, setPostNumber] = useState(parseInt(postIndex,10) || 0);


    const handlePreviousClick = () => {
        // Decrease the post number when the "PREVIOUS POST" is clicked
        if (postNumber > 0) {
            setPostNumber(postNumber-1);
        } else {
            setPostNumber(posts.length-1);
        }
    };

    const handleNextClick = () => {
        // Increase the post number when the "NEXT POST" is clicked
        if (postNumber === posts.length-1) {
            setPostNumber(0);
        } else {
            setPostNumber(postNumber+1)
        }
    };

    useEffect(() => {
        const getPosts = async() => {
            try {
                console.log("get that post")
                const response = await axios.get(`${apiUrl}/api/post/getPost`);
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);

    return (
        <div>
            <Navbar/>
            {posts.length === 0 ? (
                <Cover imageLink={"loading..."} infoTitle={"loading..."}/>
            ) : (
                <Container>
                    <Cover imageLink={posts[postNumber].photoUrl} infoTitle={posts[postNumber].title} category={posts[postNumber].category} date={posts[postNumber].date}/>
                    <Body bodyText={posts[postNumber].body}/>
                    <Toggle>
                        <Direction onClick={handlePreviousClick}>⬅PREVIOUS POST</Direction>
                        <Direction onClick={handleNextClick}>NEXT POST➞</Direction>
                    </Toggle>
                </Container>
            )}
        </div>
    );
}

export default Posts;