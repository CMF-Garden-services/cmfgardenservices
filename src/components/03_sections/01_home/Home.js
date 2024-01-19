import { useState, useEffect, useRef } from "react";
import { Wrapper, MainImage, MottoWrapper, MottoText, Button } from "./HomeStyle";
import { sizes } from "../../01_constants/Sizes";
import navbar from "../../../assets/02_home/navbar.jpg"
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

    const loaded = useImageLoader(navbar)
    console.log(loaded)

    return (
        <Wrapper ref={ref} zIndex={zIndex} id="home">
            {loaded ? <MainImage src={navbar} alt="navbar"/> : <div style={{"width": "100%", "height": "100vw", "background-color": "brown"}}></div> }
            <MottoWrapper>
                <MottoText>Providing a reliable and friendly<br/> gardening service<br/> to the local community</MottoText>
                <a href="#quote"><Button>REQUEST A QUOTE</Button></a>
            </MottoWrapper>
        </Wrapper>
    )
}

export default Home