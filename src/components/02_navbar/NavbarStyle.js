import styled from "styled-components"
import { sizes } from "../01_constants/Sizes"
import { colors } from "../01_constants/Colors"

const { navbarheight, upperbarheight, bottombarheight, navbarpaddings } = sizes
const { lightgreen, backgroundgreen } = colors

const Wrapper = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
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
    @media (max-width: 700px) {
        padding: 0 45px;
    }
    `

    const Gardening = styled.div`
    font-family: Rhodium Libre;
    font-size: 1.5rem;
    color: white;
    @media (max-width: 700px) {
        font-size: 1rem;
        width: 150px;
    }
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
    @media  (max-width: 700px) {
        font-size: 0.7rem;
        width: 90px;
    }
`
    
const Middlebar = styled.div`
    width: 100%;
    height: calc(100% - ${upperbarheight} - ${bottombarheight});
    padding: 0 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
        padding: 0 6vw;
    }
`

const Logo = styled.img`
    height: 100%;
`

const Warwickshire = styled.div`
    width: 300px;
    font-size: 1.4rem;
    line-height: 1.3;
    @media (max-width: 700px) {
        font-size: 0.8rem;
    }
`

const Phone = styled.div`
    width: 300px;
    text-align: right;
    font-size: 2rem;
    line-height: 1.3;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
`

const Bottombar = styled.div`
    width: 100%;
    height: ${bottombarheight};
    background-color: #67BC3F;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    @media (max-width: 700px) {
        gap: 1.8vw;        
    }
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
    


export {Wrapper, Upperbar, Middlebar, Warwickshire, Phone, Bottombar, Logo, Menuitem, Gardening, Button }