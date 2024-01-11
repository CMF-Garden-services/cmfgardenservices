import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"
import { colors } from "../01_constants/Colors"

const { navbarheight } = sizes
const { lightgreen, backgroundgreen } = colors

const Wrapper = styled.div`
`

const NavbarWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: ${navbarheight};
    // background-color: lightblue;
    // opacity: 0.2;
    color: white;
    z-index: 3;
`

const NavbarBg = styled.div`
    position: fixed;
    width: 100%;
    height: ${navbarheight};
    background-color: darkgreen;
    opacity: 0.95;
    z-index: 1;
`

export {Wrapper, NavbarWrapper, NavbarBg }