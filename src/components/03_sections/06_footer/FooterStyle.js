import styled from "styled-components"
import { GeneralWrapper, GeneralTitle, Hashtag } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet, wrappermargintoptablet } = sizes
const { darkgreen } = colors
const footer_gap = "30px";

const Wrapper = styled(GeneralWrapper)`
    margin-bottom: 20px;
`

const HashtagFooter = styled(Hashtag)`
`

const Title = styled(GeneralTitle)`
`
const FooterWrapper = styled.div`
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translate(-50%);
    padding: ${footer_gap} 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: ${footer_gap};
    color: white;
    background-color: ${darkgreen};
`

const Logo = styled.img`
    width: 100px;
`

const ContactsWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: ${wrapperwidth};
    display: flex;
    justify-content: space-between;
`
const Contact = styled.div`
    font-family: "Rhodium Libre";
    font-family: "Montserrat";
    font-size: 1.2rem;
`

const ContactLink = styled.a`
    color: white;
`

const ContactCenter = styled(Contact)`
    // position: absolute;
    // left: 50%;
    // transform: translate(-50%);
`

const Navbar = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`

const NavbarItem = styled.a`
    text-decoration: none;
    font-family: "Montserrat";
    font-size: 0.7rem;
    font-style: italic;
    font-weight: 200;
    color: #bfbfbf;
`

const Copyright = styled.div`
    font-family: "Montserrat";
    font-size: 0.6rem;
`

export {Wrapper, HashtagFooter, Title, FooterWrapper, Logo, ContactsWrapper, Contact, ContactLink, ContactCenter, Navbar, NavbarItem, Copyright  }