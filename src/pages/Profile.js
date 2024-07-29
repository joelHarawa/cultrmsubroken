/*
Title: Profile.js
Author: Joel Harawa
Purpose: Display the profile page to the user
*/

import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

// Styled Components
const Containter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ImageContainer = styled.div`
    display: flex;
    border-radius: 50%;
    height: 100px;
    width: 100px; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const FileInput = styled.input`
    position: absolute;
    width: 100px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
`;

const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Headers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

const Header = styled.h3`
    font-family: "Poppins", sans-serif;
`;

const Email = styled.p`
    font-family: "Poppins", sans-serif;
`;

const PostImageContainer = styled.div`
    height: 100%;
    width: 15%; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const PostTitle = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    padding-top: 8px;
`;

const PostAuthor = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    padding-top: 8px;
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const Post = styled.div`
    display: flex;
    margin-top: 10px;
    width: 90%;
    background-color: #f2f2f2;
    border-radius: 15px;
    overflow: hidden;
    height: 10vh;
    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const Sections = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const PostData = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 100%;
`;

const Button = styled.button`
    margin-top: 5px;
    font-family: "DM Sans", serif;
    border: none;
    padding: 6px;
    background-color: black;
    font-size: 12px;
    color: white;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const Profile = () => {
    const apiUrl = 'https://18.219.147.241';
    const {user, getProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [changing, setChanging] = useState(false);
    useEffect(() => {
        getProfile();
        console.log(user)
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate, getProfile]);
    setProfilePicture(user.profilePicture);

    // function to change the user's profile picture
    const changePicture = (e) => {
        setChanging(true);
        setProfilePicture(e.target.files[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById("photoPreview").src = reader.result;
            console.log("selected photo");
        }
        if (profilePicture) {
            reader.readAsDataURL(profilePicture);
        }
    }

    useEffect(()=> {
        const getMyPosts = async () => {
            try {
                const response = await axios.post(`${apiUrl}/api/get/getMyPost`, {email: user.email});
                console.log(response);
                setMyPosts(response.data);
            } catch (error) {
                console.error(error);
            } 
        }
        const getFavorites = async () => {
            try {
                const response = await axios.post(`${apiUrl}/api/get/favorites`, {email: user.email});
                console.log("here are your faves: ", response);
                setFavorites(response.data);
            } catch (error) {
                console.error(error);
            } 
        }
        getMyPosts();
        getFavorites();
    }, [])

    const handlePostClick = (index) => {
        navigate(`/blog/${index}`);
    }
    console.log(myPosts, favorites);

    return (
        <>
            <Navbar/>
            <Containter>
                <ImageContainer>
                    <ProfileImage id="photoPreview" src={profilePicture}/>               
                </ImageContainer>
                {changing ? <Button onClick={changePicture}>Upload Profile Picture</Button> : "" }
                <Head>
                    <Header>{user.firstName + " " + user.lastName}</Header>
                    <Email>{user.email}</Email>
                </Head>
                <Posts>
                    <Headers>
                        <Header>My Posts</Header>
                        <Header>My Favorites</Header>
                    </Headers>
                    <Sections>
                    <Section>
                        {myPosts.map((post, index) => (
                        <Post key={post._id} onClick={() => handlePostClick(post.index)}>
                            <PostImageContainer>
                                <PostImage src={post.photoUrl}/>
                            </PostImageContainer>
                            <PostData>
                                <PostTitle>{post.title}</PostTitle>
                                <PostAuthor>Me</PostAuthor>
                            </PostData>
                        </Post>
                        ))}
                    </Section>
                    <Section>
                        {favorites.map((post, index) => (
                        <Post key={post.post._id} onClick={() => handlePostClick(post.index)}>
                            <PostImageContainer>
                                <PostImage src={post.post.photoUrl}/>
                            </PostImageContainer>
                            <PostData>
                                <PostTitle>{post.post.title}</PostTitle>
                                <PostAuthor>{post.post.author}</PostAuthor>
                            </PostData>
                        </Post>
                        ))}
                    </Section>
                    </Sections>
                </Posts>
            </Containter>
        </>
    )
}

export default Profile;