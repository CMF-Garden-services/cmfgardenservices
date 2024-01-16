import { Wrapper, HashTagQuote, Title, Form, Label, Input, TextArea } from "./QuoteStyle"

const Quote = () => {
    return (
        <Wrapper>
            <HashTagQuote id="quote" />
            <Title>
                Request a Quote
            </Title>
            <Form>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" />
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="phone" id="phone" />
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" />
                <Label htmlFor="message">Message</Label>
                <TextArea type="textarea" id="message" />
            </Form>
        </Wrapper>
    )

}

export default Quote