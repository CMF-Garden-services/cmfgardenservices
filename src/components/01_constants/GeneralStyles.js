import styled from "styled-components";
import { sizes } from "./Sizes";
import { colors } from "./Colors";

const{ wrapperwidth, wrappermargintop, wrappermargintoptablet, wrapperwidthtablet } = sizes
const { darkgreen } = colors
const marginhashtagmobile = (wrappermargintoptablet - 20)

const GeneralWrapper = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: ${wrapperwidth};
    padding-top: ${wrappermargintop};
    font-family: "Josefin Sans", sans-serif;
    font-family: Rhodium Libre;
    @media (max-width: 1100px) {
        width: ${wrapperwidthtablet};
        padding-top: ${wrappermargintoptablet};
    }
`

const GeneralTitle = styled.div`
    width: 100%;
    text-align: center;
    font-family: "Rhodium Libre";
    font-size: 3rem;
    line-height: 1.2;
    color: ${darkgreen};
    margin-bottom: calc(${wrappermargintop} / 2);
    @media (max-width: 1100px) {
        margin-bottom: calc(${wrappermargintoptablet} / 2);
    }
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const GeneralButton = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${darkgreen};
    border-radius: 12px;
    border: none;
    color: white;
    font-family: "Josefin Sans", sans-serif;
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

const Hashtag = styled.div`
    position: absolute;
    top: -20px;
    @media (max-width: 1100px) {
        top: -${wrappermargintoptablet};
    }
`

export { GeneralWrapper, GeneralTitle, GeneralButton, Hashtag }