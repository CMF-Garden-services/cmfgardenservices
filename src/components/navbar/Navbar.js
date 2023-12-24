import { Wrapper, Upperbar, Middlebar, Bottombar, Logo } from "./NavbarStyle";
import CMF from "../../assets/CMF.png";
import one from "../../assets/01.jpg";
import two from "../../assets/02.jpg";
import three from "../../assets/03.jpg";

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar></Upperbar>
            <Middlebar>
                <Logo src={CMF} />
            </Middlebar>
            <Bottombar></Bottombar>
            <img src={one} width = "380vw" />
            <img src={two} width = "380vw" />
            <img src={three} width = "380vw" />
        </Wrapper>
    )
}

export default Navbar