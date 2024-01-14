import { Wrapper, Title, ImagesWrapper, ImageWrapper, ImageCaption, Image } from "./LocationsStyle";
import dorridge from "../../../assets/04_locations/dorridge.jpg"
import earlswood from "../../../assets/04_locations/earlswood.jpg"
import henley from "../../../assets/04_locations/henley.jpg"
import lapworth from "../../../assets/04_locations/lapworth.jpg"
import solihull from "../../../assets/04_locations/solihull.jpg"


const Locations = () => {
    return (
        <Wrapper id="locations">
            <Title>Locations We Cover</Title>
            <ImagesWrapper>
                <ImageWrapper>
                    <Image src={dorridge} />
                    <ImageCaption>Dorridge</ImageCaption>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={earlswood} />
                    <ImageCaption>Earlswood</ImageCaption>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={henley} />
                    <ImageCaption>Henley-in-Arden</ImageCaption>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={lapworth} />
                    <ImageCaption>Lapworth</ImageCaption>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={solihull} />
                    <ImageCaption>Solihull</ImageCaption>
                </ImageWrapper>
            </ImagesWrapper>
        </Wrapper>
    )
}

export default Locations