import { useState, useEffect, useRef } from "react";
import { PlaceHolder, Wrapper, MainImage, MottoWrapper, MottoText, Button } from "./HomeStyle";
import { sizes } from "../../01_constants/Sizes";
import home from "../../../assets/02_home/home.jpg"
import home_lq from "../../../assets/02_home/home_lq.jpg"
import { useImageLoader } from "./ImageLoader";



const Home = () => {
    const [zIndex, setZIndex] = useState(1)
    const ref = useRef(null)
    const wrapperRef = useRef()

    useEffect (() => {
        const showBackground = () => {
            const trigger = 70
            const windowScroll = window.scrollY
            const showSolid = trigger - windowScroll
            if (showSolid >= 0) {
                setZIndex(1)
            } else {
                setZIndex(0)
            }
        }
        

        window.addEventListener("scroll", showBackground)
        return() => {
            window.removeEventListener("keydown", showBackground)
        }
    }, [])

    const loaded = useImageLoader(home)

    return (
        <PlaceHolder>
        {loaded ? <Wrapper ref={ref} zIndex={zIndex} id="home">
            {loaded ?  <MainImage src={home} alt="home"/>  : <MainImage src={home_lq} alt="home"/> }
            <MottoWrapper>
                <MottoText>Providing a reliable and friendly<br/> gardening service<br/> to the local community</MottoText>
                <a href="#quote"><Button>REQUEST A QUOTE</Button></a>
            </MottoWrapper>
        </Wrapper> : <div></div>}
        </PlaceHolder>
    )
}

export default Home