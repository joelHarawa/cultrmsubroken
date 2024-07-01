import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Containter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ImageContainer = styled.div`
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

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getProfile = async () => {
            const apiUrl = 'https://18.219.147.241';
            const response = await axios.get(`${apiUrl}/get/profile`, { withCredentials: true});
            setUser(response.data);
            if (!user) {
                navigate("/login");
            }
        }
        getProfile();
    }, [navigate]);

    return (
        <>
            <Navbar/>
            <Containter>
                <ImageContainer>
                    <ProfileImage src={""}/>
                </ImageContainer>
            </Containter>
        </>
    )
}

export default Profile;