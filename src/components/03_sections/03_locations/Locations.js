import { Wrapper, Title, ImagesWrapper, Image } from "./LocationsStyle";
import dorridge from "../../../assets/04_locations/dorridge.jpg"
import earlswood from "../../../assets/04_locations/earlswood.jpg"


const Locations = () => {
    return (
        <Wrapper>
            <Title>Locations We Cover</Title>
            <ImagesWrapper>
                <Image src={dorridge} />
                <Image src={earlswood} />
            </ImagesWrapper>
        </Wrapper>
    )
}

export default Locations