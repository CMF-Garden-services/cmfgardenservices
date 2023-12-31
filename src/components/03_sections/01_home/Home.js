import { Wrapper, Image } from "./HomeStyle";
import landscape from "../../../assets/landscape.jpg"
import landscape_original from "../../../assets/landscape_original.jpg"
import test4 from "../../../assets/test4.jpg"
import test4a from "../../../assets/test4a.jpg"
import garden from "../../../assets/garden.jpg"

const Home = () => {
    return (
        <Wrapper>
                {/* <Image id="home" src={test4} /> */}
                <Image id="home" src={test4} />
        </Wrapper>
    )
}

export default Home