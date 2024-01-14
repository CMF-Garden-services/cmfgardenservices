import styled from "styled-components";
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles";
import { colors } from "../../01_constants/Colors";

const { circlegreen, backgroundgreen } = colors

const Wrapper = styled(GeneralWrapper)`

`

const GreenBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${backgroundgreen};
`

const Title = styled(GeneralTitle)`

`
const ServicesWrapper = styled.div`
    height: 600px;
    padding: 50px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 120px;
`

const ServiceWrapper = styled.div`
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



export { Wrapper, GreenBackground, Title, ServicesWrapper, ServiceWrapper, IconWrapper, Icon, IconCaption, IconDescription }