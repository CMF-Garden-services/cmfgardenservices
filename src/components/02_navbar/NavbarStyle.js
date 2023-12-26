import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight, upperbarheight, bottombarheight } = sizes

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: ${navbarheight};
    width: 100%;
    z-index: 99;
`

const Upperbar = styled.div`
    width: 100%;
    height: ${upperbarheight};
    background-color: #236604;
`

const Middlebar = styled.div`
    width: 100%;
    height: calc(100% - ${upperbarheight} - ${bottombarheight});
    padding: 0 20vw;
    text-align: center;
`

const Logo = styled.img`
    height: 100%;
`

const Bottombar = styled.div`
    width: 100%;
    height: ${bottombarheight};
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


export {Wrapper, Upperbar, Middlebar, Bottombar, Logo, Menuitem }