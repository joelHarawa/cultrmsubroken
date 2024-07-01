import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images/slides', false, /\.(png|jpe?g|svg)$/));

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1  
        )
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1  
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <SlideImage src={images[currentIndex]}/>
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

export default Slides;