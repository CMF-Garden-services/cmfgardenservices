import styled from "styled-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrapperwidth, wrapperwidthtablet } = sizes

const Wrapper = styled(GeneralWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled(GeneralTitle)`
`

const ImagesWrapper = styled.div`
    max-width: ${wrapperwidth};
    overflow: hidden;
    height: 17vw;
    display: flex;
    justify-content: center;
    gap: 3px;
    @media (max-width: 1100px) {
        max-width: ${wrapperwidthtablet};
        height: 30vw;
    }
`

const ImageWrapper = styled.div`
    position: relative;
`
const ImageCaption = styled.div`
    position: absolute;
    font-size: 1.7rem;
    text-shadow: 2px 2px 5px black;
    bottom: 10px;
    right: 10px;
    color: white;
`

const Image = styled.img`
    height: 100%;
    object-fit: cover;
`

export {Wrapper, Title, ImagesWrapper, ImageWrapper, ImageCaption, Image}