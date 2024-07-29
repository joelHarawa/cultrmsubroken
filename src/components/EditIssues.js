/*
Title: Issues.js
Author: Joel Harawa
Purpose: Display the home page to the user
*/

import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";


// Styled components
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

const Issue = styled.input`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
`;

const IssueContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CoverContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    width: 500px;
    height: 500px;
`;

const PdfContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Metadata = styled.input`
    font-family: 'DM Sans', serif;
    width: 42vw;
    font-size: 20px;
    margin-top: 20px;
`;

const Photo = styled.input`
    display: none;
`;

const Pdf = styled.input`
    display: none;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 100%;
  background-color: #ddd;
  object-fit: contain;
`;

const PhotoLabel = styled.label`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    font-size: 20px;
    color: white;
    position: absolute;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const PdfLabel = styled.label`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    font-size: 20px;
    color: white;
    position: absolute;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`; 

const Button = styled.button`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    font-size: 20px;
    color: white;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const Submit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    height: 10%;
    width: 100%;
`;

const EditIssues = () => {
    const navigate = useNavigate();
    const [pdfName, setPdfName] = useState("");
    const apiUrl = 'https://18.219.147.241';
    const [issues, setIssues] = useState([]);
    const [photo, setPhoto] = useState("");
    const [pdf, setPdf] = useState("");
    const [inputs, setInputs ] = useState({
        edition: "",
        title: ""
    })

    useEffect(() => {
        const getPosts = async() => {
            try {
                console.log("get that post")
                const response = await axios.get(`${apiUrl}/api/post/getIssue`);
                console.log(response.data);
                setIssues(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photo", photo);
            article.append("edition", inputs.edition);
            article.append("title", inputs.title);
            article.append("pdf", pdf);
            const response = await axios.post(`${apiUrl}/api/post/addIssue`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
            navigate("/issues");
        } catch (error) {
            console.error("Error submitting article");
        }
    }

    const handleUpload = (e) => {
        setPhoto(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreview").src = reader.result;
            console.log("selected photo", photo);
        }
        if (photo) {
            reader.readAsDataURL(photo);
        }
    }

    const handlePdfUpload = (e) => {
        const file = e.target.files[0];
        setPdf(file);
        setPdfName(file.name);
        console.log("selected pdf", file);
    };

    return (
        <>
            <Container>
            <IssuesBar>
                <Wrapper>
                    <Issue name="editon" placeholder="Issue Edition..." onChange={handleChange}/>
                </Wrapper>
            </IssuesBar>
            <IssueContent>
                <CoverContainer>
                    <ImagePreview id="imagePreview" src={photo ? URL.createObjectURL(photo) : ""}/>
                    <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
                    <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
                </CoverContainer>
                <Metadata name="title" placeholder="Issue Title..." onChange={handleChange}/>
                <PdfContainer>
                    <PdfLabel htmlFor="pdfInput">Upload PDF {pdfName ? 
                    pdfName : 
                    ""}</PdfLabel>
                    <Pdf type="file" id="pdfInput" accept="application/pdf" onChange={handlePdfUpload}/>
                </PdfContainer>
            </IssueContent>
            <Submit>
                <Button onClick={handleSubmit}>Submit</Button>
            </Submit>
            </Container>
        </>
    );
}

export default EditIssues;