import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight, wrapperwidth } = sizes

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: ${wrapperwidth};
    height: ${navbarheight};
    // -webkit-backface-visibility: hidden;
    font-size: 1rem;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    height: calc(${navbarheight});
`

const MenuWrapper = styled.div`
    height: 100%;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuItem = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: white;
`

export { NavbarWrapper, Logo, MenuWrapper, MenuItem }