import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"
import { colors } from "../01_constants/Colors"

const { navbarheight, upperbarheight, bottombarheight, navbarpaddings } = sizes
const { lightgreen, backgroundgreen } = colors

const Wrapper = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    height: ${navbarheight};
    width: 100%;
    z-index: 99;
`

export {Wrapper }