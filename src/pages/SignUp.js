/*
Title: SignUp.js
Author: Joel Harawa
Purpose: Display the sign up page to the user
*/

import styled from "styled-components";
import Navbar from "../components/Navbar";
import React, { useEffect, useContext, useState } from "react";
import {AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styled components
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
    height: 40vh;
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

const Button = styled.button`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    font-size: 20px;
    color: white;
    &:hover {
        cursor: pointer;
        border: 1px solid black;
        background-color: white;
        color: black;
    }
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

const SignUp = () => {
    const apiUrl = 'https://18.219.147.241';
    const {signup} = useContext(AuthContext);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPassowrdError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [photos, setPhotos] = useState([]);

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
    });

    const validateName = () => {
        const regex = /^(?=.*[a-zA-Z])[a-zA-Z]+$/;
        if (regex.test(inputs.firstName) && regex.test(inputs.lastName)) {
            setNameError(false);
            return true;
        }
        setNameError(true);
        return false;
    }

    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (regex.test(inputs.password1) && inputs.password1 === inputs.password2) {
            setPassowrdError(false);
            return true;
        }
        setPassowrdError(true);
        return false;
    }

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(inputs.email)) {
            console.log("valid")
            setEmailError(false);
            return true;
        }
        setEmailError(true);
        return false;
    }

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        if (validateName() && validatePassword() && validateEmail()) {
            try {
                await signup(inputs);
                console.log("Signup successful")
                navigate("/login");
            } catch (e) {
                console.log(e)
            }
        }
        console.log(inputs);    
    }

    useEffect(() => {
        const getPhotos = async() => {
            try {
                const response = await axios.get(`${apiUrl}/api/get/getSignup`);
                console.log(response);
                setPhotos(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPhotos();
    })

    return(
        <>
            <Navbar/>
            {photos.length ? 
            <Container>
                <ImageContainer>
                    <Image src={photos[0].photoLeftUrl}/>
                </ImageContainer>
                <Wrapper>
                    <Head>
                        <Title>Sign Up</Title>
                    </Head>
                    <InputBlock>
                        <Input name="firstName" placeholder="First Name" onChange={handleChange}/>
                        <Input name="lastName" placeholder="Last Name" onChange={handleChange}/>
                        <Input name="email" placeholder="email@domain.com" type="email" onChange={handleChange}/>
                        <Input name="password1" placeholder="Password" type="password" onChange={handleChange}/>
                        <Input name="password2" placeholder="Password" type="password" onChange={handleChange}/>
                    </InputBlock>
                    {nameError === true ? 
                  <ErrorBlock>
                        <Error>Error: check both names</Error>
                        <Error>Both names should have at least one letter, no digits or special characters.</Error>
                    </ErrorBlock> : 
                   "" }
                {emailError === true ? 
                  <ErrorBlock>
                        <Error>Error: check your email</Error>
                        <Error>It should be of the form: "email@domain.com"</Error>
                    </ErrorBlock> : 
                   "" }
                   {passwordError === true ? 
                  <ErrorBlock>
                        <Error>Error: check both passwords match</Error>
                        <Error>Each password should contain at least:</Error>
                        <Error>8 characters, 1 capital letter, 1, number, 1 special character</Error>
                    </ErrorBlock> : 
                   "" }
                   {serverError.length > 0 ?
                   <ErrorBlock>
                       <Error>Error: {serverError}</Error>
                   </ErrorBlock> : 
                   "" }
                    <ButtonBlock>
                        <Button onClick={handleSubmit}>Sign Up</Button>
                    </ButtonBlock>
                </Wrapper>
                <ImageContainer>
                    <Image src={photos[0].photoRightUrl}/>
                </ImageContainer>
            </Container>
            : ""}
        </>
    )    
}

export default SignUp;