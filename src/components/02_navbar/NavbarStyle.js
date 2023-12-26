import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: ${navbarheight};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 99;
`

const Upperbar = styled.div`
    width: 100%;
    // height: 50px;
    flex: 1;
    background-color: #236604;
`

const Middlebar = styled.div`
    width: 100%;
    // height: 120px;
    flex: 2.5;
    padding: 0 20vw;
    text-align: center;
    background-color: white;
`

const LogoWrapper = styled.div`
    height: 100%;
    max-height: 100%;
    background-color: red;
`

const Logo = styled.img`
    // object-fit: cover;
    height: 100%;
`

const Bottombar = styled.div`
    width: 100%;
    // height: 40px;
    flex: 1;
    background-color: #67BC3F;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

const Menuitem = styled.a`
    height: 100%;
    padding: 0 7px;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: white;
    &&:hover {
        background-color: #3F8E3D;
    }
`


export {Wrapper, Upperbar, Middlebar, Bottombar, LogoWrapper, Logo, Menuitem }