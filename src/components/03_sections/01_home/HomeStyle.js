import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: relative;
    // z-index: ${(({zIndex}) => zIndex ? 2 : 0)};
    z-index: 1;
`

const MainImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 400px;
`

const Test = styled.div`
    width: 100vw;
    height: 200vh;
    background-color: lightgray;
`

export {Wrapper, MainImage, Test }