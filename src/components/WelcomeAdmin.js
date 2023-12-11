import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;

const InfoTitle = styled.h1`
  font-size: calc(40px + 4vw);
  font-family: 'Archivo Black', sans-serif;
  text-align: center;
  display: flex;
  line-height: 0.8;
  color: black;
`;

const Info = styled.p`
    font-size: 4vh;
    font-family: 'Cormorant Garamond', serif;
    display: flex;
    color: black;
    text-align: center;
    padding-left: 12vw;
`;
const WelcomeAdmin = () => {
    return (
        <Container>
            <InfoTitle>Welcome to the Admin homepage!</InfoTitle>
            <Info>Here you can add posts, and edit the Contact, Get Involved, Blog, and About pages.</Info>
        </Container>
    )
}

export default WelcomeAdmin;