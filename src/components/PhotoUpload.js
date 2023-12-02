import React, {useState} from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Photo = styled.input`
    display: none;
`;

const PhotoLabel = styled.label`
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 1.5vh 5vw;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-top: 10px;
`;


const PhotoUpload = () => {
    const [photo, setPhoto] = useState(null);
    const handleUpload = (event) => {
        const selected = event.target.files[0];

        if (selected) {
            const imageUrl = URL.createObjectURL(selected);
            setPhoto(imageUrl);
        }
    }

    return (
        <ImageContainer>
            {photo && <ImagePreview src={photo} alt="Preview"/>}
            <PhotoLabel htmlFor="photoInput">Upload Photo</PhotoLabel>
            <Photo type="file" id="photoInput" accept="image/*" onChange={handleUpload}/>
        </ImageContainer>
    );
}

export default PhotoUpload;