import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${navbarheight};
    color: white;
    font-size: 2rem;
    z-index: 3;
`



export { NavbarWrapper }