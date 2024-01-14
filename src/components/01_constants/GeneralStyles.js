import styled from "styled-components";
import { sizes } from "./Sizes";

const{ wrapperwidth, wrappermargintop } = sizes

const GeneralWrapper = styled.div`
    position: relative;
    width: ${wrapperwidth};
    margin-top: ${wrappermargintop}
`

export { GeneralWrapper }