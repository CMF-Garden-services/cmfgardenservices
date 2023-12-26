import { Wrapper, ImageWrapper, Image } from "./HomeStyle";
import one from "../../../assets/01.jpg";
import two from "../../../assets/02.jpg";
import three from "../../../assets/03.jpg";
import cmf from "../../../assets/CMF.png"

const Home = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image id="home" src={cmf} />
            </ImageWrapper>
            {/* <Image src={two} />
            <Image src={three} /> */}
        </Wrapper>
    )
}

export default Home