import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarBgWrapper = styled.div`
    position: fixed;
    width: 100%;
    // height: ${navbarheight};
    height: 70px;
    background-color: green;
    // opacity: 0.9;
    z-index: 2;
`

export { NavbarBgWrapper }