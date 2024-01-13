import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${navbarheight};
    -webkit-backface-visibility: hidden;
    color: white;
    font-size: 2rem;
    z-index: 3;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    height: calc(${navbarheight} - 30px);
`


export { NavbarWrapper, Logo }