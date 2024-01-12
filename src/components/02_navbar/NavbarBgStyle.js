import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarBgWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    width: 100%;
    height: ${navbarheight};
    background-color: darkblue;
    opacity: 0.95;
    z-index: 1;
`

export { NavbarBgWrapper }