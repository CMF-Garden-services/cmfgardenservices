import { Wrapper, Image } from "./HomeStyle";
import landscape from "../../../assets/landscape.jpg"

const Home = () => {
    return (
        <Wrapper>
                <Image id="home" src={landscape} />
        </Wrapper>
    )
}

export default Home