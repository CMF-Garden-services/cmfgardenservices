import styled from "styled-components";
import { sizes } from "./Sizes";
import { colors } from "./Colors";

const{ wrapperwidth, wrappermargintop, wrappermargintoptablet, wrapperwidthtablet } = sizes
const { darkgreen } = colors

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

export { GeneralWrapper, GeneralTitle }