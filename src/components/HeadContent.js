import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 52vh;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const InfoTitle = styled.h1`
    font-size: calc(40px + 4vw);
    font-family: 'Archivo Black', sans-serif;
    text-align: center;
    display: flex;
    height: 20%;
    line-height: 0.8;
`;

const Info = styled.p`
    font-size: 4vh;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    display: flex;
    height: 30%;
`;

const InfoLink = styled.p`
    font-size: 2.8vh;
    font-family: 'Archivo Black', sans-serif;
    display: flex;
    text-align: center;
    height: 30%;
`;

const HeadContent = () => {
    return (
        <Container>
            <Wrapper>
                <InfoTitle>Finding Culture at MSU</InfoTitle>
                <Info>All of the communities, clubs and organizations that you can join</Info>
                <InfoLink>READ MORE</InfoLink>
            </Wrapper>
        </Container>
    );
}

export default HeadContent;