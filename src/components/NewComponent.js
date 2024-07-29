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

const Input = styled.input`
    width: 80vw;
    height: 3vh;
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

const Date = styled.input`
  width: 80vw;
  height: 3vh;
  padding: 5px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
`;

const ButtonBox = styled.div`
    padding: 15px;
    width: 80vw;
    display: flex;
    justify-content: center;
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

const NewComponent = () => {
    const apiUrl = 'https://18.219.147.241';
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [tag, setTag] = useState("");
    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photo", photo)
            article.append("title", title);
            article.append("body", body);
            article.append("category", category);
            article.append("date", date);
            article.append("tag", tag);

            const response = await axios.post(`${apiUrl}/api/post/addPost`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
        } catch (error) {
            console.error("Error submitting article");
        }
    }


    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleBody = (e) => {
        setBody(e.target.value);
    }

    const handleTag = (e) => {
        setTag(e.target.value);
    }
    const handleUpload = (e) => {
        setPhoto(e.target.files[0]);

        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreview").src = reader.result;
            console.log("selected photo", photo);
        }
        if (photo) {
            reader.readAsDataURL(photo);
        }
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }
    return (
        <Container>
            <Title>New Article</Title>
            <SubtitleBox>
                <Subtitle>Article Title</Subtitle>
            </SubtitleBox>
            <Input placeholder="Enter article title..."
                   value={title}
                   onChange={handleTitle}
            />
            <SubtitleBox>
                <Subtitle>Article Body</Subtitle>
            </SubtitleBox>
            <Body placeholder="Enter article body..."
                  value={body}
                  onChange={handleBody}
            />
            <SubtitleBox>
                <Subtitle>Category</Subtitle>
            </SubtitleBox>
            <Input placeholder="Enter article category..."
                   value={category}
                   onChange={handleCategory}
            />
            <SubtitleBox>
                <Subtitle>Article Title</Subtitle>
            </SubtitleBox>
            <Input placeholder="Enter article tag line..."
                   value={tag}
                   onChange={handleTag}
            />
            <SubtitleBox>
                <Subtitle>Date</Subtitle>
            </SubtitleBox>
            <Date type="date" value={date} onChange={handleDate}/>

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
            <ButtonBox>
                <Button onClick={handleSubmit}>Submit Article</Button>
            </ButtonBox>
        </Container>
    )
}
export default NewComponent;