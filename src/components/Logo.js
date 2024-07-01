import styled from "styled-components";

const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: flex-start;
`;

const Text = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 32px;
`;

const RegularText = styled.span`
`;

const MirroredR = styled.span`
    transform: scaleX(-1);
    display: inline-block;
`;

                                                
const Logo = () => {
    return(
    <Container>
        <Text>
            <RegularText>CULT</RegularText>
            <MirroredR>R</MirroredR>
        </Text>
    </Container>
    );   
}

export default Logo;