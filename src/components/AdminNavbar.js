import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "./Logo";

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

const AdminNavbar = () => {
    return (
        <Container>
            <Wrapper>
                    <MenuItem to={"/admin/"}><Logo/></MenuItem>
                    <MenuItem to="/admin/about">EDIT ABOUT US</MenuItem>
                    <MenuItem to="/admin/issues">EDIT ISSUES</MenuItem>
                    <MenuItem to="/blog">EDIT BLOG</MenuItem>
            </Wrapper>
        </Container>
    )
}

export default AdminNavbar