import styled from "styled-components"
import { GeneralWrapper } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled(GeneralWrapper)`

`

const AboutText = styled.div`
    width: 50vw;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0 auto;
`

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    @media (max-width: 700px) {
        height: 150px;

    }
`

export {Wrapper, AboutText, Image}