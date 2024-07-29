import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddPost from "../components/AddPost";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const AddBlogPost = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect (() => {
        if (!user) {
            navigate("/login");
        }
    })
    return (
        <>
        <Navbar/>
        <Container>
            <AddPost/>
        </Container>
        </>
    )
}

export default AddBlogPost;