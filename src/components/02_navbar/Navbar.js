import { Wrapper, Upperbar, Middlebar, Warwickshire, Phone, Bottombar, Logo, Menuitem, Gardening, Button } from "./NavbarStyle";
import CMF from "../../assets/CMF.png";

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar>
                <Gardening>CMF Gardening Services</Gardening>
                <Button>Request a call back</Button>
            </Upperbar>
            <Middlebar>
                    <Warwickshire>Warwickshire-Worcestershire-Gloucestershire-Oxfordshire</Warwickshire>
                    <Logo src={CMF} />
                    <Phone>0777 111-222</Phone>
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