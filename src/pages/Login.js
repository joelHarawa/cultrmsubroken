import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {AuthContext} from "../context/AuthContext";

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


const Login = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });
    const [serverError, setServerError] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPassowrdError] = useState(false);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
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

    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (regex.test(inputs.password)) {
            setPassowrdError(false);
            return true;
        }
        setPassowrdError(true);
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail() && validatePassword()) {
            try {
                await login(inputs);
                navigate("/blog");
            } catch (error) {
                console.log("Error during login:", error);
                setServerError(error.response.data.message);
            }
        } else {

        }
    }
    return(
      <>
          <Navbar/>
          <Container>
              <ImageContainer>
                  <Image src={require("../images/IMG_7461.jpeg")}/>
              </ImageContainer>
              <Wrapper>
                  <Head>
                      <Title>Login</Title>
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
                  <Image src={require("../images/IMG_1547.jpeg")}/>
              </ImageContainer>
          </Container>
      </>
  )
}

export default Login;