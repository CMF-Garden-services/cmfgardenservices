import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: ${navbarheight};
    height: 250px;
    background-color: lightgray;
`

const ImageWrapper = styled.div`
    height: 100%;
`

const Image = styled.img`
    height: 100%;
`

export {Wrapper, ImageWrapper, Image}