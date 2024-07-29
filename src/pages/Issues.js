/*
Title: Issues.js
Author: Joel Harawa
Purpose: Display the home page to the user
*/

import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import styled from "styled-components";
import {useParams} from "react-router-dom";


// Styled components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    width: 33%;
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
    const [issues, setIssues] = useState([]);

    const handleClick = (pdfUrl) => {
        const newWindow = window.open("", "_blank");
        newWindow.document.write(
            `<iframe src="${pdfUrl}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`
        );
    };

    useEffect(() => {
        const getPosts = async() => {
            try {
                const response = await axios.get(`${apiUrl}/api/get/getIssue`);
                console.log(response);
                setIssues(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);

    return (
        <>
            <Navbar/>
            {issues.length > 0 ? (
            <Container>
            <IssueContent onClick={() => handleClick(issues[0].pdfUrl)}>
                <Issue>{issues[0].edition}</Issue>
                <Cover src={issues[0].photoUrl}/>
                <Metadata>{issues[0].title}</Metadata>
            </IssueContent>
            </Container>
            ) : ""
            }
        </>
    );
}

export default Issues;