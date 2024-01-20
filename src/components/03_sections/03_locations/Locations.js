import { useState } from "react";
import { Wrapper, HashtagLocations, Title, ImagesWrapperContainer, ImagesWrapper, ImageWrapper, ImageCaption, Image, LargeImageWrapper, LargeImage, CloseIcon } from "./LocationsStyle";
import { Images } from "./Images";
import dorridge from "../../../assets/04_locations/dorridge.jpg"


const Locations = () => {
    const[largeimg, setLargeimg] = useState(false)

    const showLargeImage = (e) => {

        setLargeimg(true)
    }
    
    const hideLargeImage = () => {
        setLargeimg(false)
    }

    return (
        <Wrapper>
            {largeimg && <LargeImageWrapper largeimg={largeimg}>
                <LargeImage src={dorridge} />
                <ImageCaption>Dorridge</ImageCaption>
                <CloseIcon onClick={hideLargeImage}>X</CloseIcon>
            </LargeImageWrapper>}

            <HashtagLocations id="locations" />
            <Title>Locations We Cover</Title>
            <ImagesWrapperContainer>
                <ImagesWrapper>
                    {Images.map((record, index) => (
                        // <ImageWrapper key={index} onClick={(() => alert("hi"))}>
                        <ImageWrapper key={index} onClick={showLargeImage}>
                            <Image id={record.caption} src={record.image} />
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                    {Images.map((record, index) => (
                        <ImageWrapper key={record.ind} onClick={showLargeImage}>
                            <Image src={record.image} />
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                </ImagesWrapper>
            </ImagesWrapperContainer>
        </Wrapper>
    )
}

export default Locations