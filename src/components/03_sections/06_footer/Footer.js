import { Wrapper, HashtagFooter, Title, FooterWrapper, Logo, ContactsWrapper, Contact, ContactLink, ContactCenter, Copyright } from "./FooterStyle";
import logo from "../../../assets/01_navbar/CMF.png"


const Locations = () => {
    return (
        <Wrapper >
            <HashtagFooter id="footer"/>
            <Title>Please Get In Touch</Title>
            <FooterWrapper>
                <Logo src={logo} />
                <ContactsWrapper>
                    <ContactCenter> <ContactLink href= "mailto: chris@cmfgardenservices.co.uk"> chris@cmfgardenservices.co.uk </ContactLink> </ContactCenter>
                    <Contact> 07873 122-257 </Contact>
                    <Contact> <ContactLink href="www.cmfgardenservices.co.uk"> www.cmfgardenservices.co.uk </ContactLink> </Contact>
                </ContactsWrapper>
                <Copyright>&copy; Viktor Hulei &nbsp;&nbsp;&nbsp; All Rights Reserved</Copyright>
            </FooterWrapper>
        </Wrapper>
    )
}

export default Locations