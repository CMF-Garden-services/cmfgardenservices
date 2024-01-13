import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarBgWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: ${navbarheight};
    background-color: #172B1C;
    background-color: #041A09;
    opacity: 0.93;
    z-index: 1;
`

export { NavbarBgWrapper }