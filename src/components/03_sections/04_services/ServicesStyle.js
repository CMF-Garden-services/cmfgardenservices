import styled from "styled-components";
import { GeneralWrapper, GeneralTitle, Hashtag } from "../../01_constants/GeneralStyles";
import { colors } from "../../01_constants/Colors";

const { circlegreen, backgroundgreen } = colors

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
    padding: 40px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    @media(max-width: 900px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        padding: 30px;
    }
    @media(max-width: 600px) {
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`

const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 20px;
`
    
const Icon = styled.img`
    width: 50%;
`
    
const IconCaption = styled.div`
    font-size: 1rem;
    margin-bottom: 20px;
`
    
const IconDescription = styled.div`
    font-size: 0.8rem;
    text-align: center;
`



export { Wrapper, HashtagServices, GreenBackground, Title, ServicesWrapper, ServiceWrapper, IconWrapper, Icon, IconCaption, IconDescription }