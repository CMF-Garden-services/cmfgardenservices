import styled from "styled-components"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet } = sizes
const { darkgreen } = colors

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
    // height: 100%;
`

const MottoWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: calc((100vw - ${wrapperwidth}) / 2);
    // left: 50%;
    // transform: translate(-50%);
    // width: ${wrapperwidth};
    height: 65%;
    // background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    @media (max-width: 1100px) {
        height: 70%;
        right: calc((100vw - ${wrapperwidthtablet}) / 2);
    }
    @media (max-width: 500px) {
        height: 70%;
    }
`

const MottoText = styled.div`
    // width: 70%;
    height: 50%;
    line-height: 1.4;
    color: white;
    // background-color: gray;
    text-align: right;
    font-family: Montserrat;
    font-style: italic;
    font-size: 4vw;
    text-shadow: black 2px 2px;
    @media (max-width: 1100px) {
        font-size: 4.5vw;
    }
    @media (max-width: 500px) {
        font-size: 1.05rem;
    }
`

const Button = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${darkgreen};
    border-radius: 12px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    box-shadow: black 0 0 20px;
    @media (max-width: 800px) {
        font-size: 0.8rem;
        width: 180px;
        height: 40px;
        border-radius: 10px;
    }
    @media (max-width: 500px) {
        font-size: 0.6rem;
        width: 110px;
        height: 35px;
        border-radius: 5px;
        box-shadow: black 0 0 5px;
    }
    &:hover {
        color: lightgray;
        cursor: pointer;
    }
    &:active {
        transform: translate(1px, 1px);
    }
`

export {Wrapper, MainImage, MottoWrapper, MottoText, Button }