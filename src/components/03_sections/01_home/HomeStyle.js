import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    `
    
    const Image = styled.img`
    width: 100%;
    height: 100%;
    height: 400px;
    object-fit: cover;
    @media (max-width: 700px) {
        height: 150px;

    }
`

export {Wrapper, Image}