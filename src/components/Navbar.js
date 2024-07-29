import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "./Logo";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Container = styled.div`
    height:8vh;
    background-color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

const MenuItem = styled(Link)`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 30px;
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
`;
const LogoItem = styled(Link)`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 30px;
    text-decoration: none;
    color: black;
`;

const Navbar = () => {
    const {user, getProfile} = useContext(AuthContext);
    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Container>
            <Wrapper>
                    <LogoItem to={"/"}><Logo/></LogoItem>
                    <MenuItem to="/issues">ISSUES</MenuItem>
                    <MenuItem to="/blog/allposts">BLOG</MenuItem>
                    <MenuItem to="/about">ABOUT US</MenuItem>
                    {user ? <MenuItem to="/profile">
                    <Profile>
                        <ProfileImage src={user.profilePicture}/>
                    </Profile></MenuItem> :
                     <MenuItem to="/login">
                     <Profile>
                         <ProfileImage src={"https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"}/>
                     </Profile></MenuItem>
                      }
            </Wrapper>
        </Container>
    )
}


export default Navbar;