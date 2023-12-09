import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from "react-router-dom";

const Container = styled.div`
    height: 52vh;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

const InfoTitle = styled.h1`
    font-size: calc(40px + 4vw);
    font-family: 'Archivo Black', sans-serif;
    text-align: center;
    display: flex;
    height: 20%;
    line-height: 0.8;
    color: white;
`;

const Info = styled.p`
    font-size: 4vh;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    display: flex;
    height: 30%;
    color: white;
`;

const InfoLink = styled(Link)`
    font-size: 2.8vh;
    font-family: 'Archivo Black', sans-serif;
    display: flex;
    text-align: center;
    height: 30%;
    color: white;
    &:hover {
      text-decoration:underline;
      color: white;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeadContent = () => {
    const apiUrl = 'https://18.219.147.241';
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async() => {
            try {
                console.log("get that post")
                const response = await axios.get(`${apiUrl}/api/post/getPost`);

                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error, "This failed");
            }
        }
        getPosts();
    }, []);


    let index = posts.length-1;
    return (
            <div>
                {posts.length === 0 ? (
                    <Container>
                        <Image src={""}></Image>
                        <Wrapper>
                            <InfoTitle>"Loading..."</InfoTitle>
                            <Info>"Loading...</Info>
                            <InfoLink to="">"Loading..."</InfoLink>
                        </Wrapper>
                    </Container>
                    ) : (
                    <Container>
                        <Image src={posts[index].photoUrl}></Image>
                        <Wrapper>
                            <InfoTitle>{posts[index].title}</InfoTitle>
                            <Info>{posts[index].tag}</Info>
                            <InfoLink to={`/posts/${index}`}>READ MORE</InfoLink>
                        </Wrapper>
                    </Container>
            )}
            </div>
    );
}

export default HeadContent;