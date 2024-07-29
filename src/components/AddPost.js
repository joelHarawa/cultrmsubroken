/*
Title: AddPost.js
Author: Joel Harawa
Purpose: Component to take in and send user inputs to backend
*/
import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
`;

const Cover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    height: 20vh;
    width: 100%;
`; 

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 12vh;
    width: 90%;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthorName = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding-left: 5px;
`;

const Profile = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeText = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
`;

const Content = styled.div`
    display: flex;
    width: 90%;
`;

const Text = styled.textarea`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    width: 100%;
    resize: none;
    height: 150vh;
`;

const Title = styled.textarea`
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    font-weight: 600;
    width: 100%;
    margin-top: 25px;
    resize: none;
    overflow: hidden;
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

const Submit = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 80%;
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

const AddPost = () => {
    const apiUrl = 'https://18.219.147.241';
    const {user} = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        title: "",
        body: ""
    });
    const [background, setBackground] = useState("");
    
    // Create a file reader to allow user to upload photo
    const handleUpload = (e) => {
        setBackground(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("imagePreview").src = reader.result;
            console.log("selected photo", background);
        }
        if (background) {
            reader.readAsDataURL(background);
        }
    }

    // Change the value of the title and body, when user changes inputs
    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    // Upload blog post inputs to the backend
    const handleSubmit = async () => {
        try {
            const article = new FormData();
            article.append("photo", background);
            article.append("title", inputs.title);
            article.append("body", inputs.body);
            article.append("author", user.email);
            const response = await axios.post(`${apiUrl}/api/post/addPost`, article, {
                headers: {"Content-Type" : "multipart/form-data"},
            });
            console.log("Article successfully submitted:", response.data);
        } catch (error) {
            console.error(error, "Error submitting article");
        }
    }

    return (
        <Container>
            <Cover>
                <ImagePreview id="imagePreview" src={background ? URL.createObjectURL(background) : ""}/>
                <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
                <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
            </Cover>
            <Head>
                <Title 
                    name="title" 
                    placeholder="Enter title..."
                    onChange={handleChange}
                    maxlength="200"
                />
            </Head>
            <Head>
                <Author>
                    <Profile>
                        <ProfileImage src={user.profilePicture}/>
                    </Profile>
                    <AuthorName>{user.firstName} {user.lastName}</AuthorName>
                </Author>
            </Head>
            <Content>
                <Text 
                    name= "body" 
                    placeholder="Enter text..."
                    onChange={handleChange}
                    maxlength="4200"
                />
            </Content>
            <Submit>
                    <Button onClick={handleSubmit}>Submit</Button>
            </Submit>
        </Container>
    )
}

export default AddPost;