/*
Title: EditHome.js
Author: Joel Harawa
Purpose: Component that allows admin to edit slides on homepage
*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Styled components

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
`;

const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    width: 1000px;
    height: 600px;
`;

const SlideImage = styled.img`
    object-fit: cover;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 50%;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    height: 100%;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 100%;
  background-color: #ddd;
  object-fit: cover;
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

const Photo = styled.input`
    display: none;
`;

const Submit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
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

const Slides = () => {
    const apiUrl = 'https://18.219.147.241';
    const [slides, setSlides] = useState([]);
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async() => {
            try {
                console.log("get that post")
                const response = await axios.get(`${apiUrl}/api/get/getSlide`);
                console.log(response.data);
                setSlides(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);

    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photo", photo);
            const response = await axios.post(`${apiUrl}/api/post/addSlide`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
            navigate("/");
        } catch (error) {
            console.error("Error submitting article", error);
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

    return (
        <Container>
            <Left>
            <SlideContainer>
                    <ImagePreview id="imagePreview" src={photo ? URL.createObjectURL(photo) : ""}/>
                    <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
                    <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
            </SlideContainer>
            <Submit>
                <Button onClick={handleSubmit}>Submit</Button>
            </Submit>
            </Left>
        </Container>
    )
}

export default Slides;