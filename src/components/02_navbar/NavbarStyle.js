import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight, wrapperwidth } = sizes

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    height: ${navbarheight};
    width: ${wrapperwidth};
    font-size: 1rem;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1100px) {
        width: 90%;
    }
`

const Logo = styled.img`
    height: ${navbarheight};
    @media (max-width: 800px) {
        height: calc(${navbarheight} - 25px);
    }
`

const MenuWrapper = styled.div`
    height: 100%;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        display: none;    
    }
`

const MenuItem = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: white;
`

const HambWrapper = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    display: none;    
    @media (max-width: 800px) {
        color: white;
        font-size: 30px;
        display: flex;
        align-items: center;
    }
`

export { NavbarWrapper, Logo, MenuWrapper, MenuItem, HambWrapper}