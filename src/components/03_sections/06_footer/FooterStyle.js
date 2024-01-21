import styled from "styled-components"
import { GeneralWrapper, GeneralTitle, Hashtag } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet, wrappermargintoptablet } = sizes
const { darkgreen } = colors
const footer_gap = "30px"
const footer_gap_mobile = "20px"

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
    // gap: ${footer_gap};
    color: white;
    background-color: ${darkgreen};
    @media(max-width: 1100px) {
        padding: ${footer_gap_mobile} 0;
        // gap: ${footer_gap_mobile};
    }
`

const Logo = styled.img`
    width: 100px;
    padding-bottom: ${footer_gap};
    @media(max-width: 1100px) {
        width: 70px;
        padding-bottom: ${footer_gap_mobile};
    }
`

const ContactsWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: ${wrapperwidth};
    display: flex;
    justify-content: space-between;
    font-family: "Rhodium Libre";
    font-family: "Montserrat";
    font-size: 1.2rem;
    padding-bottom: ${footer_gap};
    @media(max-width: 1100px) {
        flex-direction: column;
        // gap: ${footer_gap_mobile};
        align-items: center;
        font-size: 0.7rem;
        padding-bottom: ${footer_gap_mobile};
    }
`
const Contact = styled.div`
    @media(max-width: 1100px) {
        padding-bottom: ${footer_gap_mobile};
    }
`

const ContactLink = styled.a`
    color: white;
    @media(max-width: 1100px) {
        padding-bottom: ${footer_gap_mobile};
    }
`

const Copyright = styled.div`
    font-family: "Montserrat";
    font-size: 0.7rem;
    @media(max-width: 1100px) {
        font-size: 0.5rem
    }
`

export {Wrapper, HashtagFooter, Title, FooterWrapper, Logo, ContactsWrapper, Contact, ContactLink, Copyright  }