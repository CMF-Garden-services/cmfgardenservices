import { useState } from "react";
import { Wrapper, HashtagLocations, Title, ImagesWrapperContainer, ImagesWrapper, ImageWrapper, ImageCaption, Image, LargeImageWrapper, LargeImage, CloseIcon } from "./LocationsStyle";
import { Images } from "./Images";
import { IoClose } from "react-icons/io5";


const Locations = () => {
    const[largeImg, setLargeImg] = useState(false)
    const[imageId, setImageId] = useState()
    const[imageCaption, setImageCaption] = useState()

    const showLargeImage = (e) => {
        setImageId(e.target.id)
        setImageCaption(e.target.name)
        setLargeImg(true)
    }
    
    const hideLargeImage = () => {
        setLargeImg(false)
    }

    return (
        <Wrapper>
            {largeImg && <LargeImageWrapper largeImg={largeImg}>
                <LargeImage src={imageId} alt="large image"/>
                <ImageCaption>{imageCaption}</ImageCaption>
                <CloseIcon onClick={hideLargeImage}>
                <IoClose />
                </CloseIcon>
            </LargeImageWrapper>}

            <HashtagLocations id="locations" />
            <Title>Locations We Cover</Title>
            <ImagesWrapperContainer>
                <ImagesWrapper>
                    {Images.map((record, index) => (
                        <ImageWrapper key={index} onClick={showLargeImage}>
                            <Image id={record.image_large} name={record.caption} src={record.image} alt={record.caption}/>
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                    {Images.map((record, index) => (
                        <ImageWrapper key={index} onClick={showLargeImage}>
                            <Image id={record.image_large} name={record.caption} src={record.image} alt={record.caption}/>
                            <ImageCaption>{record.caption}</ImageCaption>
                        </ImageWrapper>))}
                </ImagesWrapper>
            </ImagesWrapperContainer>
        </Wrapper>
    )
}

export default Locations