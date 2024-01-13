import { NavbarWrapper, Logo, MenuWrapper, MenuItem, HambWrapper  } from "./NavbarStyle";
import logo from "../../assets/01_navbar/CMF.png"
import MenuIcon from '@mui/icons-material/Menu';

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
                <HambWrapper><MenuIcon fontSize="large"/></HambWrapper>
            </NavbarWrapper>
    )
}

export default Navbar