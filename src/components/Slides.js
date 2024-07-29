import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

// Styled components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    position: absolute;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    padding: 18px;
    font-size: 18px;
    opacity: 0.3;
    &:hover {
        opacity: 1;
    }
`;

const Slides = () => {
    const [slides, setSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const apiUrl = 'https://18.219.147.241';

    useEffect(() => {
        const getSlides = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/get/getSlide`);
                console.log(response);
                setSlides(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Failed to get the Slides", error);
            }
        }
        getSlides();
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1  
        )
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1  
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [slides]);

    if (slides.length > 0) {
        return (
            <Container>
                <SlideImage src={slides[currentIndex].photoUrl}/>
                <ButtonContainer>
                    <Button onClick={prevSlide}>
                        <FaChevronLeft/>
                    </Button>
                    <Button onClick={nextSlide}>
                        <FaChevronRight/>
                    </Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default Slides;