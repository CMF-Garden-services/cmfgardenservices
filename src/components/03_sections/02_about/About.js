import { Wrapper, Title, TextImageWrapper, AboutText, Image } from "./AboutStyle";
import about from "../../../assets/03_about/about.jpg"

const About = () => {
    return (
        <Wrapper>
            <Title>About CMF</Title>
            <TextImageWrapper>
                <AboutText>
                    Hello, my name is Chris. I spent 8 years working for one of the country’s leading lawn care companies
                    before setting up CMF Garden services.
                    <br /><br />

                    The aim of CMF Garden Services is to provide a reliable and
                    friendly high quality garden maintenance service to the local community.
                    <br /><br />

                    I am fully insured and have
                    PA1 and PA6 licences so you can book my services with peace of mind. I cover all areas between the
                    Solihull area and the Stratford upon Avon area.
                </AboutText>
                <Image src={about} />
            </TextImageWrapper>
        </Wrapper>
    )
}

export default About