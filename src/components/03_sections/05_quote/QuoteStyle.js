import styled from "styled-components"
import { GeneralWrapper, GeneralTitle, GeneralButton } from "../../01_constants/GeneralStyles"
import { sizes } from "../../01_constants/Sizes"

const { wrappermargintoptablet } = sizes

const Wrapper = styled(GeneralWrapper)`
`

const HashTagQuote = styled.div`
    position: absolute;
    top: 0px;
    @media(max-width: 1100px) {
        top: -${wrappermargintoptablet};
    }
`

const Title = styled(GeneralTitle)`
`

const Form = styled.form `
    width: 60%;
    margin: 0 auto;
    @media(max-width: 800px) {
        width: 90%;
    }
`

const Label = styled.label `
@media(max-width: 800px) {
    font-size: 0.8rem;
}
`

const LabelStar = styled(Label)`
&::after {
    content: " *";
    position: relative;
    top: -3px;
    color: red;
    font-size: 1rem;
}

`

const Input = styled.input `
    display: block;
    width: 100%;
    height: 1.3rem;
    margin-bottom: 20px;
`

const TextArea = styled.textarea `
    display: block;
    width: 100%;
    height: 150px;
    resize: vertical;
`

const Button = styled(GeneralButton)`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-top: ${wrappermargintoptablet};
    box-shadow: none;
    width: 150px;
    height: 50px;
    @media (max-width: 800px) {
        font-size: 0.8rem;
        width: 180px;
        height: 40px;
        border-radius: 10px;
    }
    &:active {
        transform: translate(-48%, 2px);
    }
`


export { Wrapper, HashTagQuote, Title, Form, Label, LabelStar, Input, TextArea, Button }