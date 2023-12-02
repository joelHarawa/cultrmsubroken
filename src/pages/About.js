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

const Title = styled.h1`
    font-size: calc(40px + 4vw);
    font-family: 'Archivo Black', sans-serif;
    text-align: center;
    display: flex;
    height: 20%;
    line-height: 0.8;
`;

const Subtitle = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  height: 5%;
  line-height: 0.8;
  justify-content: left;
`;


const Image = styled.img`
    width: 90%;
`;

const Body = styled.p`
    font-size: 20px;
    font-family: 'Cormorant Garamond', serif;
    width: 90%;
`;

const SubWrapper = styled.div`
    width: 90%;
`;

const Info = styled.div`
  font-size: 20px;
  font-family: 'Cormorant Garamond', serif;
  width: 20%;
  flex: 1;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
const About = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title>About</Title>
                    <Image src="https://cultr6.files.wordpress.com/2023/06/noguchi-table-wine-magazines.jpg"/>
                    <Body>Five years ago, recently married couple Fred and Anna founded Cult, a blog about their passion for design, food and travel. Based between Amsterdam and Tenerife, they have always appreciated the time and care artisans put into manufacturing quality products. They traveled to learn how these products were made, and began documenting their travels.</Body>
                    <SubWrapper>
                        <Subtitle>Get in Touch</Subtitle>
                        <InfoWrapper>
                            <Info>Balboastraat 54 Amsterdam,
                                Noord-Holland, 1234</Info>
                            <Info>fred@cult.ish / anna@cult.ish
                                (123) 456-0987</Info>

                        </InfoWrapper>
                    </SubWrapper>
                </Wrapper>
            </Container>
        </div>
    );
}

export default About;