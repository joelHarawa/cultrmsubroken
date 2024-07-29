/*
Title: Login.js
Author: Joel Harawa
Purpose: Display the login page to the user
*/

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

// Styled Components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`;

const ImageContainer = styled.div`
    display: flex;
    background-color: #ddd;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 90vh
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
`;

const Title = styled.h1`
    font-family: "DM Sans", serif;
    text-align: center;
`;

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    width: 50%;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    font-family: "DM Sans", serif;
    font-size: 20px;
    padding: 10px;
    width: 100%;
`;

const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 50%;
`;

const ErrorBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Error = styled.p`
    color: red;
    font-size: 12px;
    font-family: "DM Sans", serif;
    height: 1vh;
`;

const Info = styled.p`
    font-size: 16px;
    font-family: "DM Sans", serif;
    height: 1vh;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
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

// Login component, user enters credentials and submits to be verified
const Login = () => {
    const apiUrl = 'https://18.219.147.241';
    const [photoLeft, setPhotoLeft] = useState("");
    const [photoRight, setPhotoRight] = useState("");
    const {admin} = useContext(AuthContext);
    const navigate = useNavigate();

    // Change the values being saved in the inputs as it is being typed 
    const handleUploadLeft = (e) => {
        setPhotoLeft(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreviewLeft").src = reader.result;
            console.log("selected photo", photoLeft);
        }
        if (photoLeft) {
            reader.readAsDataURL(photoLeft);
        }
    }

    // Change the values being saved in the inputs as it is being typed 
    const handleUploadRight = (e) => {
        setPhotoRight(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreviewRight").src = reader.result;
            console.log("selected photo", photoRight);
        }
        if (photoRight) {
            reader.readAsDataURL(photoRight);
        }
    }
    
    // Send the email and the password to the backend for verification
    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photoLeft", photoLeft);
            article.append("photoRight", photoRight);
            const response = await axios.post(`${apiUrl}/api/post/addLogin`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
            navigate("/login");
        } catch (error) {
            console.error("Error submitting article", error);
        }
    }

    return(
      <>
          <Container>
              <ImageContainer>
                <ImagePreview id="imagePreviewLeft" src={photoLeft ? URL.createObjectURL(photoLeft) : ""}/>
                <PhotoLabel htmlFor="photoInputLeft">Upload Photo</PhotoLabel>
                <Photo type="file" id="photoInputLeft" accept="image/*" onChange={handleUploadLeft}/>
              </ImageContainer>
              <Wrapper>
              <Submit>
                <Button onClick={handleSubmit}>Submit</Button>
             </Submit>
              </Wrapper>
              <ImageContainer>
                <ImagePreview id="imagePreviewRight" src={photoRight ? URL.createObjectURL(photoRight) : ""}/>
                <PhotoLabel htmlFor="photoInputRight">Upload Photo</PhotoLabel>
                <Photo type="file" id="photoInputRight" accept="image/*" onChange={handleUploadRight}/>
              </ImageContainer>
          </Container>
      </>
  )
}

export default Login;