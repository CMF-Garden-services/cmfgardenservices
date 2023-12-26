import { Wrapper, Upperbar, Middlebar, Bottombar, Logo, Menuitem } from "./NavbarStyle";
import CMF from "../../assets/CMF.png";

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar></Upperbar>
            <Middlebar>
                    <Logo src={CMF} />
            </Middlebar>
            <Bottombar>
                <Menuitem href="#home">Home</Menuitem>
                <Menuitem href="#about">About</Menuitem>
                <Menuitem href="#services">Services</Menuitem>
                <Menuitem href="#">Contacts</Menuitem>
            </Bottombar>
        </Wrapper>
    )
}

export default Navbar