import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "./Logo";
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

const Name = styled.p`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
`;

const AdminNavbar = () => {
    const {admin, getAdminProfile} = useContext(AuthContext);
    useEffect(() => {
        getAdminProfile();
    }, []);

    return (
        <Container>
            <Wrapper>
                    <LogoItem to={"/admin/"}><Logo/></LogoItem>
                    <MenuItem to="/admin/about">EDIT ABOUT US</MenuItem>
                    <MenuItem to="/admin/issues">EDIT ISSUES</MenuItem>
                    <MenuItem to="/admin/login">EDIT LOGIN</MenuItem>
                    <MenuItem to="/admin/signup">EDIT SIGN UP</MenuItem>
                    {admin ? <Name>{admin.firstName}</Name> : ""}
            </Wrapper>
        </Container>
    )
}

export default AdminNavbar