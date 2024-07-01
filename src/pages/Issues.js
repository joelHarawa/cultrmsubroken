import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const IssuesBar = styled.div`
    height:8vh;
    background-color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Issue = styled.button`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 30px;
    background-color: white;
    border: none;
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
`;

const IssueContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Cover = styled.img`
    width: 30vw;
    height: 50vh;
    object-fit: contain   
`;

const Metadata = styled.p`
    font-family: 'DM Sans', serif;
    width: 28vw;
    font-size: 20px;
    text-align: center;
`;

const Issues = () => {
    const apiUrl = 'https://18.219.147.241';
    const [issue, setissue] = useState(-1);
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
        <>
            <Navbar/>
            <Container>
            <IssuesBar>
                <Wrapper>
                    <Issue onClick={""}>2024 FALL</Issue>
                </Wrapper>
            </IssuesBar>
            <IssueContent>
                <Cover src={require("../images/CULTR Magazine Final.jpg")}/>
                <Metadata>Finding Culuture at MSU</Metadata>
            </IssueContent>
            </Container>
        </>
    );
}

export default Issues;