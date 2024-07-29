/*
Title: About.js
Author: Joel Harawa
Purpose: Display the about page to the user
*/

import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {FaInstagram} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    justify-content: space-between;
`;

const Right = styled.div`
    display: flex;
    flex:direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    border: 2px solid black;
    width: 80%;
    height: 80%;
`;

const Socials = styled.div`
`;

const Text = styled.span`
    width: 80%;
    margin-left: 15%; 
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    padding: 3%;
`;

const SocialLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 38px;
    margin-left: 20px; /* Adjust spacing as needed */
`;

const TopLeft = styled.div`
    display: flex;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoText = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    text-align: center;
`;

const RegularText = styled.span`
    font-size: 68px;
`;

const MirroredR = styled.span`
    transform: scaleX(-1);
    display: inline-block;
    font-size: 68px;
`;

const SubText = styled.span`
    text-align: center;
    font-size: 22px;
`;

const About = () => {
    const apiUrl = 'https://18.219.147.241';
    const [about, setAbout] = useState([]);

    // Get the content to display from the backend 
    useEffect(() => {
        const getAbout = async() => {
            try {
                const response = await axios.get(`${apiUrl}/api/get/about`);
                console.log(response.data);
                setAbout(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getAbout();
    }, []);

    let index = about.length -1;
    if (about.length > 0) {
    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Left>
                        <TopLeft>
                            <LogoContainer>
                                <LogoText>
                                    <RegularText>CULT</RegularText>
                                    <MirroredR>R</MirroredR>
                                </LogoText>
                                <SubText>M A G A Z I N E</SubText>
                            </LogoContainer>
                        </TopLeft>
                        <Text>{about[index].body ? about[index].body : "Loading..."}</Text>
                        <Socials>
                            <SocialLink href="https://www.instagram.com/cultr_magazine/">
                                <FaInstagram/>
                            </SocialLink>
                            <SocialLink href="mailto:cultrm@gmail.com">
                                <FaEnvelope/>
                            </SocialLink>
                            <SocialLink href="mailto:rso.cultrmagazine@msu.edu">
                                <FaEnvelope/>
                            </SocialLink>
                        </Socials>
                    </Left>
                    <Right>
                        <Image src={about[index].photoUrl ? about[index].photoUrl : ""}/>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
    }
}

export default About;