import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: relative;
    z-index: ${(({zIndex}) => zIndex ? 2 : 0)};
`

const MainImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 400px;
`

export {Wrapper, MainImage }