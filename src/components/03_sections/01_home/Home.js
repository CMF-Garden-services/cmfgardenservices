import { useState, useEffect, useRef } from "react";
import { Wrapper, MainImage } from "./HomeStyle";
import { sizes } from "../../01_constants/Sizes";
import navbar from "../../../assets/02_home/navbar.jpg"

const Home = () => {
    const [zIndex, setZIndex] = useState(1)
    const ref = useRef(null)
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

    useEffect (() => {
        window.addEventListener("scroll", showBackground)
        return() => {
            window.removeEventListener("scroll", showBackground)
        }
    }, [])

    return (
        <Wrapper ref={ref} zIndex={zIndex}>
            <MainImage src={navbar} alt="navbar" />
        </Wrapper>
    )
}

export default Home