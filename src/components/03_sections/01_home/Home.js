import { useState, useEffect, useRef } from "react";
import { PlaceHolder, Wrapper, MainImage, MottoWrapper, MottoText, Button } from "./HomeStyle";
import { sizes } from "../../01_constants/Sizes";
import home from "../../../assets/02_home/home.jpg"
import home_lq from "../../../assets/02_home/home_lq.jpg"
import { useImageLoader } from "./useImageLoader";



const Home = ({setSolidNavbar}) => {
    const ref = useRef(null)

    useEffect (() => {
        const showBackground = () => {
            const trigger = 70
            const windowScroll = window.scrollY
            const showSolid = trigger - windowScroll
            if (showSolid >= 0) {
                setSolidNavbar(false)
            } else {
                setSolidNavbar(true)
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
        {loaded ? <Wrapper ref={ref} id="home">
            <MainImage src={home} alt="home"/>
            <MottoWrapper>
                <MottoText>Providing a reliable and friendly<br/> gardening service<br/> to the local community</MottoText>
                <a href="#quote"><Button>REQUEST A QUOTE</Button></a>
            </MottoWrapper>
        </Wrapper> : <div></div>}
        </PlaceHolder>
    )
}

export default Home