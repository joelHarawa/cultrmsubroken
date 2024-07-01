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

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 50vh;
    margin-top: 10px;
    background-color: #ddd;
    justify-content: center;
    align-items: center;
`;

const Video = styled.input`
    display: none;
`;

const VideoLabel = styled.label`
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 1.5vh 5vw;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
`;

const VideoPreview = styled.video`
  width: 100%;
  max-height: 100%;
  background-color: #ddd;
  object-fit: cover;
`;
const EditHome = () => {
    const apiUrl = 'https://18.219.147.241';
    const [video, setVideo] = useState("");
    const handleSubmit = async () => {
        try {
            const home = new FormData();
            home.append("video", video)


            const response = await axios.post(`${apiUrl}/api/post/postVideo`, home, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
        } catch (error) {
            console.error("Error submitting article");
        }
    }

    const handleUpload = (e) => {
        setVideo(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("videoPreview").src = reader.result;
            console.log("selected video", video);
        }
        if (video) {
            reader.readAsDataURL(video);
        }
    }

    return (
        <Container>
            <Title>Home</Title>
            <SubtitleBox>
                <Subtitle>Video</Subtitle>
            </SubtitleBox>
            <VideoContainer>
                <VideoPreview autoplay controls id="videoPreview" src={video ? URL.createObjectURL(video) : ""}/>
                <Video type="file" name ="video" id="videoInput" accept="video/*" onChange={handleUpload}/>
            </VideoContainer>
            <ButtonBox>
                <VideoLabel htmlFor="videoInput">Upload Video</VideoLabel>
            </ButtonBox>
            <ButtonBox>
                <Button onClick={handleSubmit}>Submit Changes</Button>
            </ButtonBox>
        </Container>
    )
}

export default EditHome;