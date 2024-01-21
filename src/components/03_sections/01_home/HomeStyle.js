import styled from "styled-components"
import { GeneralButton } from "../../01_constants/GeneralStyles"
import { Spinner } from "../../01_constants/Spinner"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet, wrappermargintoptablet } = sizes
const { backgroundgreen } = colors

const MainWrapper = styled.div`

`

const PlaceHolder = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${backgroundgreen};
    opacity: 0.5;
    z-index: 99;
    display: ${(({loaded}) => loaded ? "none" : "block")}
`

const SpinnerHome = styled(Spinner)`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    opacity: 1;
`

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 60vw;
    max-height: 100vh;
`

const MainImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const MottoWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: calc((100vw - ${wrapperwidth}) / 2);
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    @media (max-width: 1100px) {
        right: calc((100vw - ${wrapperwidthtablet}) / 2);
    }
`

const MottoText = styled.div`
    height: 50%;
    line-height: 1;
    color: white;
    text-align: right;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    font-size: 4.5vw;
    text-shadow: 4px 4px 4px black;
    @media (max-width: 1100px) {
        font-size: 4.5vw;
        font-weight: 300;
    }
    @media (max-width: 500px) {
        font-size: 1.10rem;
        font-weight: 400;
    }
`

const Button = styled(GeneralButton)`
`

export { MainWrapper, PlaceHolder, SpinnerHome, Wrapper, MainImage, MottoWrapper, MottoText, Button }