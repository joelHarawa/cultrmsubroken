/*
Title: AdminLogin.js
Author: Joel Harawa
Purpose: Display the login page to the admin
*/

import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
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

const SignUp = styled(Link)`
    color: blue;
`;

// Login component, user enters credentials and submits to be verified
const LoginAdmin = () => {
    // Credential variables
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });
    const apiUrl = 'https://18.219.147.241';
    const [photos, setPhotos] = useState([]);
    const [serverError, setServerError] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPassowrdError] = useState(false);
    const {adminLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    // Change the values being saved in the inputs as it is being typed 
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    // Verify the email entered is a valid email
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
    
    // Verify the password entered is a valid password
    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (regex.test(inputs.password)) {
            setPassowrdError(false);
            return true;
        }
        setPassowrdError(true);
        return false;
    }
    
    // Send the email and the password to the backend for verification
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail() && validatePassword()) {
            try {
                await adminLogin(inputs);
                navigate("/admin");
            } catch (error) {
                console.log("Error during login:", error);
                setServerError(error.response.data.message);
            }
        } else {

        }
    }

    useEffect(() => {
        const getPhotos = async() => {
            try {
                const response = await axios.get(`${apiUrl}/api/get/getLogin`);
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
          <AdminNavbar/>
          {photos.length > 0 ? 
          <Container>
            
              <ImageContainer>
                  <Image src={photos[0].photoLeftUrl}/>
              </ImageContainer>
              <Wrapper>
                  <Head>
                      <Title>Admin Login</Title>
                  </Head>
                  <InputBlock>
                      <Input name="email" placeholder="email@domain.com" onChange={handleChange}/>
                      <Input name="password" placeholder="Password" type="password" onChange={handleChange}/>
                  </InputBlock>
                  {emailError === true ? 
                  <ErrorBlock>
                        <Error>Error: check your email</Error>
                        <Error>It should be of the form: "email@domain.com"</Error>
                    </ErrorBlock> : 
                   "" }
                   <Info>New admin user? sign up <SignUp to={"/adminSignup"}>here</SignUp>.</Info>
                   {passwordError === true ? 
                  <ErrorBlock>
                        <Error>Error: check your password</Error>
                        <Error>Password should contain at least:</Error>
                        <Error>8 characters, 1 capital letter, 1, number, 1 special character</Error>
                    </ErrorBlock> : 
                   "" }
                   {serverError.length > 0 ?
                   <ErrorBlock>
                       <Error>Error: {serverError}</Error>
                   </ErrorBlock> : 
                   "" }
                  <ButtonBlock>
                      <Button onClick={handleSubmit}>Login</Button>
                  </ButtonBlock>
              </Wrapper>
              <ImageContainer>
                  <Image src={photos[0].photoRightUrl}/>
              </ImageContainer>
          </Container>
          : "" }
      </>
  )
}

export default LoginAdmin;