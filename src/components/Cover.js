import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 52vh;
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0,0,0, 0.4);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    background-color: rgba(0,0,0, 0.4);
    height: 100%;
    width: 100%;
    top: -0.1px;
    display: flex;
    justify-content: center;
    flex-direction: column;
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

const InfoData = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Category = styled.p`
    color: white;
    font-family: 'Cormorant Garamond', serif;
    font-weight: bold;
    font-size: 18px;
    margin-left: -20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
`;

const Date = styled.p`
    color: white;
    font-size: 18px;
    font-family: 'Cormorant Garamond', serif;
    margin-left: 20px;
`;
const Cover = ({imageLink, infoTitle, category, date}) => {
    return (
        <Container>
            <Image src={imageLink}></Image>
            <Wrapper>
                <InfoData>
                    <Category>{category}</Category>
                    <Date>{date}</Date>
                </InfoData>
                <InfoTitle>{infoTitle}</InfoTitle>
            </Wrapper>
        </Container>
    );
}

export default Cover;