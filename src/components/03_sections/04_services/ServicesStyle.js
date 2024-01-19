import styled from "styled-components";
import { GeneralWrapper, GeneralTitle, Hashtag } from "../../01_constants/GeneralStyles";
import { colors } from "../../01_constants/Colors";
import { sizes } from "../../01_constants/Sizes";

const { circlegreen, backgroundgreen } = colors
const { wrappermargintoptablet } = sizes

const Wrapper = styled(GeneralWrapper)`

`
const HashtagServices = styled(Hashtag)`
`


const GreenBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${backgroundgreen};
`

const Title = styled(GeneralTitle)`

`
const ServicesWrapper = styled.div`
    padding: 2vw;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 5vw;
    @media(max-width: 900px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 600px) {
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`

const ServiceWrapper = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const IconWrapper = styled.div`
    position: relative;
    width: 110px;
    height: 110px;
    background-color: ${circlegreen};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    width: 50%;
`

const IconCaption = styled.div`
    font-size: 1rem;
`

const IconDescription = styled.div`
    font-size: 0.8rem;
    text-align: center;
`



export { Wrapper, HashtagServices, GreenBackground, Title, ServicesWrapper, ServiceWrapper, IconWrapper, Icon, IconCaption, IconDescription }