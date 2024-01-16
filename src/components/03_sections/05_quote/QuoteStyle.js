import styled from "style-components"
import { GeneralWrapper, GeneralTitle } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrappermargintoptablet } = sizes

const Wrapper = styled(GeneralWrapper)`
`

const HashTagQuote = styled.div`
    position: absolute;
    top: 0;
    @media(max-width: 1100px) {
        top: ${wrappermargintoptablet}
    }
`

const Title = styled(GeneralTitle)`
`

const Form = styled.form`
    width: 100%;

`

const Label = styled.label`
    display: inline-block;
`

const Input = styled.input`

`

const TextArea = styled.textarea`

`

export { Wrapper, HashTagQuote, Title, Form, Label, Input, TextArea }