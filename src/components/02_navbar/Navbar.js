import { Wrapper, Upperbar, Middlebar, Warwickshire, Phone, Bottombar, Logo, Menuitem, Gardening, Button } from "./NavbarStyle";
import CMF from "../../assets/CMF.png";

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar>
                <Gardening>CMF Garden Services</Gardening>
                <Button>Request a call back</Button>
            </Upperbar>
            <Middlebar>
                    <Warwickshire>Stratford Upon Avon -  <br/>Solihull</Warwickshire>
                    <Logo src={CMF} />
                    <Phone>07873-122257</Phone>
            </Middlebar>
            <Bottombar>
                <Menuitem href="#home">Home</Menuitem>
                <Menuitem href="#about">About</Menuitem>
                <Menuitem href="#">Locations</Menuitem>
                <Menuitem href="#services">Services</Menuitem>
                <Menuitem href="#">Contacts</Menuitem>
            </Bottombar>
        </Wrapper>
    )
}

export default Navbar