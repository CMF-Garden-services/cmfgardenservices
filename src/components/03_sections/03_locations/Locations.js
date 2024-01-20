import { useState } from "react";
import { Wrapper, HashtagLocations, Title, ImagesWrapperContainer, ImagesWrapper, ImageWrapper, ImageCaption, Image, LargeImageWrapper, LargeImage, CloseIcon } from "./LocationsStyle";
import { Images } from "./Images";


const Locations = () => {
    const[largeImg, setLargeImg] = useState(false)
    const[imageId, setImageId] = useState()
    const[imageCaption, setImageCaption] = useState()

    const showLargeImage = (e) => {
        setImageId(e.target.id)
        setImageCaption(e.target.name)
        console.log(e.target.id)
        console.log(e.target.name)
        setLargeImg(true)
    }
    
    const hideLargeImage = () => {
        setLargeImg(false)
    }

    return (
        <Wrapper>
            {largeImg && <LargeImageWrapper largeImg={largeImg}>
                <LargeImage src={imageId} />
                <ImageCaption>{imageCaption}</ImageCaption>
                <CloseIcon onClick={hideLargeImage}>X</CloseIcon>
            </LargeImageWrapper>}

            <HashtagLocations id="locations" />
            <Title>Locations We Cover</Title>
            <ImagesWrapperContainer>
                <ImagesWrapper>
                    {Images.map((record, index) => (
                        <ImageWrapper key={index} onClick={showLargeImage}>
                            <Image id={record.image_large} name={record.caption} src={record.image} />
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                    {Images.map((record, index) => (
                        <ImageWrapper key={index} onClick={showLargeImage}>
                            <Image id={record.image_large} name={record.caption} src={record.image} />
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                </ImagesWrapper>
            </ImagesWrapperContainer>
        </Wrapper>
    )
}

export default Locations