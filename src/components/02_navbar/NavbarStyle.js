import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"

const { navbarheight, upperbarheight, bottombarheight, navbarpaddings } = sizes

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
    padding: 0 ${navbarpaddings};
    background-color: #236604;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const Gardening = styled.div`
    font-family: Rhodium Libre;
    font-size: 1.5rem;
    color: white;
`

const Button = styled.button`
    width: 180px;
    padding: 5px 5px;
    color: white;
    background-color: #549634;
    border-radius: 7px;
    border: solid 0.5px white;
    &&:hover {
        cursor: pointer;
    }
    &&:active {
        transform: translate(1px, 1px);
    }
`

export {Wrapper, Upperbar, Middlebar, Bottombar, Logo, Menuitem, Gardening, Button }