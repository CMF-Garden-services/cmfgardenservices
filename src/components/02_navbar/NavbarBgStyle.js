import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarBgWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: ${navbarheight};
    background-color: #172B1C;
    background-color: #041A09;
    // opacity: 0.93;
    transition: ease-in-out 0.4s;
    opacity: ${(({solidNavbar}) => solidNavbar ? "0.93" : "0")};
    // top: ${(({solidNavbar}) => solidNavbar ? "0" : "70px")};
    top: ${(({solidNavbar}) => solidNavbar ? "0" : `-${navbarheight}`)};
    z-index: 2;
`

export { NavbarBgWrapper }