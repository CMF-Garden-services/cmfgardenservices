import styled, { keyframes, css } from "styled-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrapperwidth, wrapperwidthtablet, wrappermargintop, wrappermargintoptablet } = sizes

const AnimationDesktop = keyframes`
    0% {left: 0px}
    2% {left: -502px}
    14% {left: -502px}
    16% {left: -1004px}
    28% {left: -1004px}
    30% {left: -1506px}
    42% {left: -1506px}
    44% {left: -2008px}
    57% {left: -2008px}
    59% {left: -2510px}
    71% {left: -2510px}
    73% {left: -3012px}
    85% {left: -3012px}
    87% {left: -3514px}
    100% {left: -3514px}
`

const AnimationMobile = keyframes`
    0% {left: 0px}
    2% {left: -402px}
    14% {left: -402px}
    16% {left: -804px}
    28% {left: -804px}
    30% {left: -1206px}
    42% {left: -1206px}
    44% {left: -1608px}
    57% {left: -1608px}
    59% {left: -2010px}
    71% {left: -2010px}
    73% {left: -2412px}
    85% {left: -2412px}
    87% {left: -2814px}
    100% {left: -2814px}
`

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    padding-top: ${wrappermargintop};
    font-family: Rhodium Libre;
    display: flex;
    flex-direction: column;
    @media (max-width: 1100px) {
        padding-top: ${wrappermargintoptablet};
    }
`

const HashtagLocations = styled.div`
    position: absolute;
    top: -10px;
    @media (max-width: 1100px) {
        top: -${wrappermargintoptablet};
    }
`

const Title = styled(GeneralTitle)`
`

const ImagesWrapperContainer = styled.div`
    position: relative;
    left: 0;
    width: 100vw;
    height: 350px;
    overflow: hidden;
    @media (max-width: 800px) {
        height: 250px;
    }
`

const ImagesWrapper = styled.div`
    position: absolute;
    left: 0px;
    height: 100%;
    display: flex;
    gap: 2px;
    animation: 15s linear infinite ${AnimationDesktop};
    @media (max-width: 800px) {
        animation: 15s linear infinite ${AnimationMobile};
    }
`

const ImageWrapper = styled.div`
    position: relative;
`

const ImageCaption = styled.div`
    position: absolute;
    font-size: 1.7rem;
    text-shadow: 2px 2px 5px black;
    bottom: 10px;
    left: 12px;
    color: white;
    @media(max-width: 800px) {
        font-size: 1.2rem;
    }
`

const Image = styled.img`
    height: 100%;
    width: 500px;
    object-fit: cover;
    @media(max-width: 800px) {
        width: 400px;
    }
`

export {Wrapper, HashtagLocations, Title, ImagesWrapperContainer, ImagesWrapper, ImageWrapper, ImageCaption, Image}