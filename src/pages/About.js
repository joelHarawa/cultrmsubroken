import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const InstagramLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding-top: 10px;
    font-size: 30px;
    width: fit-content;
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
    width: 50%;
`;

const Body = styled.p`
    font-size: 20px;
    font-family: 'Cormorant Garamond', serif;
    width: 50%;
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
  flex-direction: column;
  width: 70%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const About = () => {
    const apiUrl = 'https://18.219.147.241';
    const [about, setAbout] = useState([]);
    useEffect(() => {
        const getAbout = async() => {
            try {
                console.log("get about")
                const response = await axios.get(`${apiUrl}/api/post/getAbout`);

                console.log(response.data);
                setAbout(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getAbout();
    }, []);

    let index = about.length -1;
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title>About Us</Title>
                    {about.length === 0 ? (
                        <MainWrapper>
                    <Body>{"Loading..."}</Body>
                    <Image src={"Loading"}/>
                    <Body>{"Loading..."}</Body>
                            </MainWrapper>) : (
                                <MainWrapper>
                    <Body>{about[index].intro}</Body>
                    <Image src={about[index].photoUrl}/>
                    <Body>{about[index].body}</Body>
                                </MainWrapper>
                )}
                    <SubWrapper>
                        <Subtitle>Get in Touch</Subtitle>
                        <InfoWrapper>
                            <Info>Bessey Room 300</Info>
                            <InstagramLink to="https://www.instagram.com/cultr_magazine/">
                                <FaInstagram/>
                            </InstagramLink>
                        </InfoWrapper>
                    </SubWrapper>
                </Wrapper>
            </Container>
        </div>
    );
}

export default About;