import styled from "styled-components"
import { GeneralWrapper, GeneralButton } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet, wrappermargintoptablet } = sizes
const { darkgreen } = colors

const PlaceHolder = styled.div`
    width: 100%;
    height: 60vw;
`

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    max-height: 100vh;
    z-index: ${(({zIndex}) => zIndex ? 2 : 0)};
    overflow: hidden;
    // @media (max-width: 1100px) {
    //     height: 70vh;
    // }
    // @media (max-width: 800px) {
    //     height: 50vh;
    // }
    // @media (max-width: 500px) {
    //     height: 30vh;
    // }
`

const MainImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 60vw;
`

const MottoWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: calc((100vw - ${wrapperwidth}) / 2);
    // left: 50%;
    // transform: translate(-50%);
    // width: ${wrapperwidth};
    height: 60%;
    // background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    @media (max-width: 1100px) {
        right: calc((100vw - ${wrapperwidthtablet}) / 2);
    }
`

const MottoText = styled.div`
    // width: 70%;
    height: 50%;
    line-height: 1;
    color: white;
    // background-color: gray;
    text-align: right;
    font-family: Montserrat;
    font-family: Rhodium Libre;
    font-family: Roboto;
    font-family: "Libre Franklin", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    // font-style: italic;
    font-weight: 300;
    font-size: 4.5vw;
    // text-transform: uppercase;
    text-shadow: 4px 4px 4px black;
    @media (max-width: 1100px) {
        font-size: 4.5vw;
        font-weight: 300;
    }
    @media (max-width: 500px) {
        font-size: 1.10rem;
        font-weight: 400;
        // text-shadow: 4px 4px 3px black;
    }
`

const Button = styled(GeneralButton)`
`

export {PlaceHolder, Wrapper, MainImage, MottoWrapper, MottoText, Button }