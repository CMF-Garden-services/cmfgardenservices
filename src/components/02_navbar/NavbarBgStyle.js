import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarBgWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${navbarheight};
    background-color: darkgreen;
    opacity: 0.9;
    z-index: 1;
`

export { NavbarBgWrapper }