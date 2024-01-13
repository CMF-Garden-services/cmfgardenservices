import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: relative;
    z-index: ${(({zIndex}) => zIndex ? 3 : 0)};
    // z-index: 3;
    overflow: hidden;
`

const MainImage = styled.img`
    object-fit: cover;
    width: 100vw;
    height: 100%;
    // max-height: 100vh;
    @media (max-width: 500px) {
        height: 100%;
    }
`

const Test = styled.div`
    width: 100vw;
    height: 200vh;
    background-color: lightgray;
`

export {Wrapper, MainImage, Test }