import styled from "styled-components";
import { sizes } from "./Sizes";

const{ wrapperwidth, wrappermargintop, wrappermargintoptablet, wrapperwidthtablet } = sizes

const GeneralWrapper = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: ${wrapperwidth};
    margin-top: ${wrappermargintop};
    font-family: "Josefin Sans", sans-serif;
    font-family: Rhodium Libre;
    @media (max-width: 1100px) {
        width: ${wrapperwidthtablet};
        margin-top: ${wrappermargintoptablet};
    }
`

const GeneralTitle = styled.div`
    width: 100%;
    text-align: center;
    font-family: "Rhodium Libre";
    font-size: 3rem;
    margin-bottom: calc(${wrappermargintop} / 2);
`

export { GeneralWrapper, GeneralTitle }