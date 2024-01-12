import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"
import { colors } from "../01_constants/Colors"

const { navbarheight } = sizes
const { lightgreen, backgroundgreen } = colors

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${navbarheight};
    // background-color: lightbrown;
    // opacity: 0.2;
    color: white;
    z-index: 3;
`



export { NavbarWrapper }