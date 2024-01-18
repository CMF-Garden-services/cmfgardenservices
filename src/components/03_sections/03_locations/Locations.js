import { Wrapper, HashtagLocations, Title, ImagesWrapperContainer, ImagesWrapper, ImageWrapper, ImageCaption, Image } from "./LocationsStyle";
import { Images } from "./Images";
import dorridge from "../../../assets/04_locations/dorridge.jpg"
import earlswood from "../../../assets/04_locations/earlswood.jpg"
import henley from "../../../assets/04_locations/henley.jpg"
import lapworth from "../../../assets/04_locations/lapworth.jpg"
import solihull from "../../../assets/04_locations/solihull.jpg"
import stratford from "../../../assets/04_locations/stratford.jpg"
import wooten from "../../../assets/04_locations/wooten.jpg"


const Locations = () => {
    return (
        <Wrapper>
            <HashtagLocations id="locations" />
            <Title>Locations We Cover</Title>
            <ImagesWrapperContainer>
            <ImagesWrapper>
                {Images.map((record, index) => (
                    <ImageWrapper key={index}>
                        <Image src={record.image} />
                        <ImageCaption>{record.caption}</ImageCaption>
                    </ImageWrapper>))}
                {Images.map((record, index) => (
                    <ImageWrapper key={index}>
                        <Image src={record.image} />
                        <ImageCaption>{record.caption}</ImageCaption>
                    </ImageWrapper>))}
            </ImagesWrapper>
            </ImagesWrapperContainer>
        </Wrapper>
    )
}

export default Locations