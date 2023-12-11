import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    height:8vh;
    background-color: white;
    border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled(Link)`
    font-size: 22px;
    margin: 0;
    font-family: 'Archivo Black', sans-serif;
    cursor: pointer;
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
`;

const MenuItem = styled(Link)`
    font-size: 18px;
    font-family: 'Cormorant Garamond', serif;
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
                <Left>
                    <Logo to={"/"}>CULTR</Logo>
                </Left>
                <Right>
                    <MenuItem to="/admin/about">Edit About</MenuItem>
                    <MenuItem to="/admin">Admin Home</MenuItem>
                    <MenuItem to="/admin/posts">Add Posts</MenuItem>
                    <MenuItem to="/admin/getinvolved">Edit Get Involved</MenuItem>
                    <MenuItem to="/admin/contact">Edit Contact</MenuItem>
                    <MenuItem to="/admin/blog">Edit Blog</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default AdminNavbar;