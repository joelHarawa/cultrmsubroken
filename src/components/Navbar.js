import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "./Logo";
import axios from "axios";

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

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const apiUrl = 'https://18.219.147.241';
                const response = await axios.get(`${apiUrl}/api/get/profile`, { withCredentials: true});
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProfile();
    }, []);

    return (
        <Container>
            <Wrapper>
                    <MenuItem to={"/"}><Logo/></MenuItem>
                    <MenuItem to="/issues">ISSUES</MenuItem>
                    <MenuItem to="/blog">BLOG</MenuItem>
                    <MenuItem to="/about">ABOUT US</MenuItem>
                    {user ? <MenuItem to="/profile"></MenuItem> : ""}
            </Wrapper>
        </Container>
    )
}


export default Navbar;