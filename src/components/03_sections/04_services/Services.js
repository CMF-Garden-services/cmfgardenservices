import { Wrapper, HashtagServices, GreenBackground, Title, ServicesWrapper, ServiceWrapper, IconWrapper, Icon, IconCaption, IconDescription } from "./ServicesStyle";
import mowing from "../../../assets/05_services/mowing.png"
import garden from "../../../assets/05_services/garden_maintenance.png"
import pruning from "../../../assets/05_services/pruning.png"
import hedge from "../../../assets/05_services/hedge_cutting.png"
import leaves from "../../../assets/05_services/leaves_tidy.png"
import wildlife from "../../../assets/05_services/wildlife.png"



const Services = () => {
    return (
        <Wrapper>
            <HashtagServices id="services"/>
            <Title>Our Services</Title>
            <GreenBackground>
                <ServicesWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={mowing} />
                        </IconWrapper>
                        <IconCaption>LAWN MOWING</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={garden} />
                        </IconWrapper>
                        <IconCaption>GARDEN MAINTENANCE</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={pruning} />
                        </IconWrapper>
                        <IconCaption>PRUNING</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={hedge} />
                        </IconWrapper>
                        <IconCaption>HEDGE CUTTING</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={leaves} />
                        </IconWrapper>
                        <IconCaption>LEAVES TIDY UP</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={wildlife} />
                        </IconWrapper>
                        <IconCaption>WILDLIFE AREAS</IconCaption>
                        <IconDescription>Some little description of this option to explain what this service is</IconDescription>
                    </ServiceWrapper>
                </ServicesWrapper>
            </GreenBackground>
        </Wrapper>
    )
}

export default Services