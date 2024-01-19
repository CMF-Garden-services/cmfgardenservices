import styled from "styled-components"
import { GeneralWrapper, GeneralTitle, Hashtag } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrappermargintoptablet } = sizes

const Wrapper = styled(GeneralWrapper)`
`

const HashtagAbout = styled(Hashtag)``

const Title = styled(GeneralTitle)`
`

const TextImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    @media(max-width: 1500px) {
        align-items: start;
    }
    @media(max-width: 1100px) {
        align-items: center;
        flex-direction: column;
        flex-direction: column-reverse;
        gap: ${wrappermargintoptablet};
}
`

const AboutText = styled.div`
    // font-family: "Josefin Sans", sans-serif;
    font-size: 1.8rem;
    text-align: justify;
    @media(max-width: 1500px) {
        font-size: 1.6rem;
    }
    @media(max-width: 800px) {
        font-size: 1.1rem;
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
    @media (max-width: 1100px) {
        width: 45vw;
        height: 40vw;
    }
    @media (max-width: 500px) {
        width: 65vw;
        height: 55vw;
    }
`

export {Wrapper, HashtagAbout, Title, TextImageWrapper, AboutText, Image}