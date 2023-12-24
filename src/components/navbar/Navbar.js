import { Wrapper, Upperbar, Middlebar, Bottombar, Logo } from "./NavbarStyle";
import CMF from "../../assets/CMF.png"

const Navbar = () => {
    return (
        <Wrapper>
            <Upperbar></Upperbar>
            <Middlebar>
                <Logo src={CMF} />
            </Middlebar>
            <Bottombar></Bottombar>
        </Wrapper>
    )
}

export default Navbar