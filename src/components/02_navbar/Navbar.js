import { useState } from "react";
import { NavbarWrapper, Logo, MenuWrapper, MenuItem, HambWrapper  } from "./NavbarStyle";
import logo from "../../assets/01_navbar/CMF.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
const [clicked, setClicked] = useState(true)

const clickHamb = () => {
    setClicked(!clicked)
}

    return (
            <NavbarWrapper>
                <Logo src={logo} alt="logo"/>
                <MenuWrapper clicked={clicked} onClick={clickHamb}>
                    <MenuItem href="#home">Home</MenuItem>
                    <MenuItem href="#about">About</MenuItem>
                    <MenuItem href="#locations">Locations</MenuItem>
                    <MenuItem href="#services">Services</MenuItem>
                    <MenuItem href="#footer">Contact</MenuItem>
                </MenuWrapper>
                {clicked && <HambWrapper onClick={clickHamb}>
                    <GiHamburgerMenu />
                </HambWrapper>}
                {!clicked && <HambWrapper onClick={clickHamb}>
                    <IoClose />
                </HambWrapper>}
            </NavbarWrapper>
    )
}

export default Navbar
