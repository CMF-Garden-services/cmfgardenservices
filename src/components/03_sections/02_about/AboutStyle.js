import styled from "styled-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrappermargintoptablet } = sizes

const Wrapper = styled(GeneralWrapper)`
`

const Title = styled(GeneralTitle)`
`

const TextImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    @media(max-width: 1100px) {
        flex-direction: column-reverse;
        flex-direction: column;
        gap: ${wrappermargintoptablet};
}
`

const AboutText = styled.div`
    // font-family: "Josefin Sans", sans-serif;
    font-size: 1.8rem;
    @media(max-width: 1500px) {
        font-size: 1.6rem;
    }
    @media(max-width: 800px) {
        font-size: 1.3rem;
    }
`

const Image = styled.img`
    width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 50%;
    @media(max-width: 1500px) {
        width: 350px;
        height: 350px;
    }
    @media (max-width: 800px) {
        width: 60vw;
        height: 60vw;
    }
`

export {Wrapper, Title, TextImageWrapper, AboutText, Image}