import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 12vh;
`;

const BodyImage = styled.img`
    height: 75vh;
    width: 75vh;
`;

const TextContainer = styled.div`
  width: 75vh;
`;

const SponsoredContent = styled.div`
  width: 75vh;
  display: flex;
  align-items: center;
`;

const SponsorInfo = styled.p`
  display: flex;
  flex: 1;
  align-items: flex-start;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: bold;
`;

const Sponsors = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const BodyText = styled.p`
    font-size: 20px;
    font-family: 'Cormorant Garamond', serif;
`;

const Body = ({pictureLink, bodyText}) => {
    return (
        <BodyContainer>
            <TextContainer>
                <BodyText>{bodyText}</BodyText>
            </TextContainer>
            <SponsoredContent>
                <SponsorInfo>Sponsored Content</SponsorInfo>
                <Sponsors>God knows it</Sponsors>
            </SponsoredContent>
        </BodyContainer>
    );
}

export default Body;