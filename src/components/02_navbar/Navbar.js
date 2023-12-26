import { Wrapper, Upperbar, Middlebar, Bottombar, Logo, Menuitem, Gardening, Button } from "./NavbarStyle";
import CMF from "../../assets/CMF.png";

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar>
                <Gardening>CMF Gardening Services</Gardening>
                <Button>Request a call back</Button>
            </Upperbar>
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