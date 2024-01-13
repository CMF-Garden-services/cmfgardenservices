import { NavbarWrapper, Logo, MenuWrapper, MenuItem  } from "./NavbarStyle";
import logo from "../../assets/01_navbar/CMF.png"

const Navbar = () => {
    return (
            <NavbarWrapper>
                <Logo src={logo} />
                <MenuWrapper>
                    <MenuItem href="#">Home</MenuItem>
                    <MenuItem href="#">About</MenuItem>
                    <MenuItem href="#">Services</MenuItem>
                    <MenuItem href="#">Locations</MenuItem>
                    <MenuItem href="#">Contacts</MenuItem>
                </MenuWrapper>
            </NavbarWrapper>
    )
}

export default Navbar