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
                        <IconDescription>Lawns should generally be mown weekly or fortnightly between March and October to keep them neat and in good condition</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={garden} />
                        </IconWrapper>
                        <IconCaption>GARDEN MAINTENANCE</IconCaption>
                        <IconDescription>Regularly maintaining a garden involves many things including weeding, applying fertilisers and pesticides, garden clearance etc.</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={pruning} />
                        </IconWrapper>
                        <IconCaption>PRUNING</IconCaption>
                        <IconDescription>The goal of pruning is to remove unwanted branches, improve the tree’s structure, and direct new, healthy growth</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={hedge} />
                        </IconWrapper>
                        <IconCaption>HEDGE CUTTING</IconCaption>
                        <IconDescription>A beautiful and healthy hedge makes a perfect frame for any garden!</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={leaves} />
                        </IconWrapper>
                        <IconCaption>LEAVES TIDY UP</IconCaption>
                        <IconDescription>Leaves cleanup is not only done to make your yard look neater and well-kept, but it also affects the overall health of your yard</IconDescription>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <IconWrapper>
                            <Icon src={wildlife} />
                        </IconWrapper>
                        <IconCaption>WILDLIFE AREAS</IconCaption>
                        <IconDescription>Creating the right habitat for species to find shelter and food is key. Lawns, water features, woodpiles, compost heaps, trees and hedges can all provide a perfect place for wildlife to live.</IconDescription>
                    </ServiceWrapper>
                </ServicesWrapper>
            </GreenBackground>
        </Wrapper>
    )
}

export default Services