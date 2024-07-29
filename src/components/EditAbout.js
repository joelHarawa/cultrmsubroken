import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {FaInstagram} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

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
    width: 45%;
`;

const Wrapper = styled.div`
    display: flex;
    border: 2px solid black;
    width: 80%;
    height: 80%;
`;

const Socials = styled.div`
`;

const Text = styled.textarea`
    border: 2px solid black;
    width: 70%;
    margin-left: 15%; 
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    padding: 3%;
    height: 40%;
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

const Submit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 80%;
`;

const PhotoLabel = styled.label`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    font-size: 20px;
    color: white;
    position: absolute;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const Button = styled.button`
    font-family: "DM Sans", serif;
    border: none;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    font-size: 20px;
    color: white;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.input`
    display: none;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 100%;
  background-color: #ddd;
  object-fit: cover;
`;


const EditAbout = () => {
    const apiUrl = 'https://18.219.147.241';
    const [about, setAbout] = useState([]);
    const [photo, setPhoto] = useState("");
    const [body, setBody] = useState("");
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

    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photo", photo)
            article.append("body", body);
            const response = await axios.post(`${apiUrl}/api/post/postAbout`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
        } catch (error) {
            console.error("Error submitting article");
        }
    }

    const handleUpload = (e) => {
        setPhoto(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreview").src = reader.result;
            console.log("selected photo", photo);
        }
        if (photo) {
            reader.readAsDataURL(photo);
        }
    }

    const handleChange = (e) => {
        setBody(e.target.value);
        console.log(body);
    }

    let index = about.length -1;
    return (
        <>
            <AdminNavbar/>
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
                        <Text onChange={handleChange} placeholder="Edit about us text"/>
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
                        <ImageContainer>
                            <ImagePreview id="imagePreview" src={photo ? URL.createObjectURL(photo) : ""}/>
                            <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
                            <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
                        </ImageContainer>
                    </Right>
                </Wrapper>
                <Submit>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Submit>
            </Container>
        </>
    );
}

export default EditAbout;