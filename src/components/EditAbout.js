import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubtitleBox = styled.div`
    width: 80vw;
`;

const ButtonBox = styled.div`
    padding: 15px;
    width: 80vw;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
  font-family: 'Archivo Black', sans-serif;
`;

const Subtitle = styled.h2`
  font-family: 'Archivo Black', sans-serif;
`;

const Body = styled.textarea`
    height: 20vh;
    width: 80vw;
    padding: 5px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 1.5vh 5vw;
  font-family: 'Cormorant Garamond', serif;
  border: none;
  font-size: 15px;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 50vh;
    margin-top: 10px;
    background-color: #ddd;
    justify-content: center;
    align-items: center;
`;

const Photo = styled.input`
    display: none;
`;

const PhotoLabel = styled.label`
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 1.5vh 5vw;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 100%;
  background-color: #ddd;
  object-fit: cover;
`;
const EditAbout = () => {
    const apiUrl = 'https://18.219.147.241';
    const [intro, setIntro] = useState("");
    const [body, setBody] = useState("");
    const [photo, setPhoto] = useState("");
    const handleSubmit = async () => {
        try {
            const about = new FormData();
            about.append("intro", intro);
            about.append("body", body);
            about.append("photo", photo)


            const response = await axios.post(`${apiUrl}/api/post/postAbout`, about, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
        } catch (error) {
            console.error("Error submitting article");
        }
    }

    const handleIntro = (e) => {
        setIntro(e.target.value);
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

    const handleBody = (e) => {
        setBody(e.target.value);
    }



    return (
        <Container>
            <Title>About us</Title>
            <SubtitleBox>
                <Subtitle>Intro</Subtitle>
            </SubtitleBox>
            <Body placeholder="Enter intro...(show linebreaks with \n)"
                value={intro}
                onChange={handleIntro}/>
            <SubtitleBox>
                <Subtitle>Photo</Subtitle>
            </SubtitleBox>
            <ImageContainer>
                <ImagePreview id="imagePreview" src={photo ? URL.createObjectURL(photo) : ""}/>
                <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
            </ImageContainer>
            <ButtonBox>
                <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
            </ButtonBox>
            <SubtitleBox>
                <Subtitle>Body</Subtitle>
            </SubtitleBox>
            <Body placeholder="Enter intro...(show linebreaks with \n)"
                  value={body}
                  onChange={handleBody}/>
            <ButtonBox>
                <Button onClick={handleSubmit}>Submit Article</Button>
            </ButtonBox>
        </Container>
    )
}

export default EditAbout;