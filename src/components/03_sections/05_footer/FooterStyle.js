import styled from "styled-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"
import { colors } from "../../01_constants/Colors"

const { wrapperwidth, wrapperwidthtablet } = sizes
const { darkgreen } = colors

const Wrapper = styled(GeneralWrapper)`

`

const Title = styled(GeneralTitle)`
`

const ImagesWrapper = styled.div`
    width: ${wrapperwidth};
    height: 15vw;
    background-color: ${darkgreen};
    @media (max-width: 1100px) {
        height: 25vw;
        width: ${wrapperwidthtablet};
        width: 100%;
    }
`


export {Wrapper, Title, ImagesWrapper }