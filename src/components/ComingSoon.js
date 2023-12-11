import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 92vh;
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
`;

const InfoTitle = styled.h1`
  font-size: calc(40px + 4vw);
  font-family: 'Archivo Black', sans-serif;
  text-align: center;
  display: flex;
  height: 100%;
  line-height: 0.8;
  color: black;
`;
const ComingSoon = () => {
    return (
        <Container>
            <InfoTitle>Coming Soon...</InfoTitle>
        </Container>
    )
}

export default ComingSoon;