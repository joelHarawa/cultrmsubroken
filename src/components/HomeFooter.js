import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    background-color: black;
    display: flex;
    height: 50vh;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    width: 70%;
`;

const Section = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding-top: 10vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Spacer = styled.div`
    height: 10%;
`;

const Subtitle = styled.h1`
    color: white;
    font-size: 20px;
    font-family: 'Cormorant Garamond', serif;
    font-weight: bold;
    height: 10%;
`;

const Sitemap = styled(Link)`
  color: white;
  font-size: 16px;
  font-family: 'Cormorant Garamond', serif;
  height: 10%;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    padding: 8px;
    font-family: 'Archivo Black', sans-serif;
    &:hover{
      cursor: pointer;
    }
    width: 50%;
`;

const Input = styled.input`
  padding: 5px;
`;

const IconTray = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HomeFooter = () => {
    return (
        <Container>
            <Content>
                <Section>
                    <Wrapper>
                        <Subtitle>Need help?</Subtitle>
                        <Sitemap to="/about">About</Sitemap>
                        <Sitemap to="/">Home</Sitemap>
                        <Sitemap to="/contact">Contact</Sitemap>
                        <Sitemap to="/login">Admin</Sitemap>
                    </Wrapper>
                </Section>
                <Section>
                    <Wrapper>
                        <Subtitle>Get in touch</Subtitle>
                        <Sitemap to="https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.7577,-122.4376,12z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu">123 Example St, San Francisco, CA 12345-6789</Sitemap>
                        <Sitemap to="mailto:hello@example.com">hello@example.com</Sitemap>
                    </Wrapper>
                </Section>
                <Section>
                    <Wrapper>
                        <Subtitle>Follow us</Subtitle>
                        {/*<FacebookIcon/>*/}
                        {/*<InstagramIcon/>*/}
                        {/*<TwitterIcon/>*/}
                        {/*<YoutubeIcon/>*/}
                        {/*<PinterestIcon/>*/}
                    </Wrapper>
                </Section>
                <Section>
                    <Wrapper>
                        <Subtitle>Subscribe to newsletter</Subtitle>
                        <Spacer>
                            <Input placeholder="Type your email..."/>
                        </Spacer>
                        <Spacer>
                            <Button>Subscribe</Button>
                        </Spacer>
                    </Wrapper>
                </Section>
            </Content>
        </Container>
    );
}
export default HomeFooter;