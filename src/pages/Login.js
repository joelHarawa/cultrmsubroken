import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {AuthContext} from "../context/AuthContext";

const Container = styled.div`
  height: 200px;
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: space-between;
  padding: 100px;
`;

const Bar = styled.div`
  padding: 10px 0px;
`;

const Input = styled.input`
  font-size: 20px;
  font-family: 'Cormorant Garamond', serif;
  padding: 10px;
  border: none;
  border-bottom: 1px solid;
`;

const Title = styled.h2`
  font-size: calc(20px + 2vw);
  font-family: 'Archivo Black', sans-serif;
`

const Button = styled.button`
  font-size: 15px;
  font-family: 'Cormorant Garamond', serif;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

`;

const Login = () => {
    const apiUrl = 'https://18.219.147.241';
    const [inputs, setInputs] = useState({
        username:"",
        password:""
    });
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/admin");
        } catch (error) {
            console.log("Error during login:", error);
        }
    }
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Center>
                        <Title>Log in</Title>
                        <form>
                            <Bar>
                                <Input required type="email" placeholder="username" name="username" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="password" placeholder="password" name="password" size="40" onChange={handleChange}/>
                            </Bar>
                            <Button onClick={handleSubmit} >Log in</Button>
                        </form>
                    </Center>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Login;