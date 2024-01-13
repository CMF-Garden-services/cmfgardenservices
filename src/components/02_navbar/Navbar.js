import { NavbarWrapper, Logo } from "./NavbarStyle";
import logo from "../../assets/01_navbar/CMF.png"

const Navbar = () => {
    return (
            <NavbarWrapper>
                <Logo src={logo} />
            </NavbarWrapper>
    )
}

export default Navbar