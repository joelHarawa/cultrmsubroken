import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const InfoTitle = styled.h1`
    font-size: calc(40px + 4vw);
    font-family: 'Archivo Black', sans-serif;
    text-align: center;
    display: flex;
    height: 20%;
    line-height: 0.8;
`;

const Body = styled.p`
    font-size: 20px;
    font-family: 'Cormorant Garamond', serif;
`;
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <InfoTitle>Get Involved</InfoTitle>
                    <Body>Subscribe to the newsletter

                        Meeting Schedule

                        Bessey Room 300</Body>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Home;