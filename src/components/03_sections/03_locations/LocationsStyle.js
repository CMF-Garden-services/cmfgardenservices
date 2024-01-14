import styled from "styled-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { navbarheight } = sizes

const Wrapper = styled(GeneralWrapper)`
`

const Title = styled(GeneralTitle)`
`

const ImagesWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    gap: 3px;
`

const Image = styled.img`
    height: 100%;
    object-fit: cover;
`

export {Wrapper, Title, ImagesWrapper, Image}