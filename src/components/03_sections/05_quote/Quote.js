import { Wrapper, HashTagQuote, Title, Form, Label, LabelStar, Input, TextArea, Button  } from "./QuoteStyle"

const Quote = () => {
    return (
        <Wrapper>
            <HashTagQuote id="quote" />
            <Title>
                Request a Quote
            </Title>
            <Form action="https://formsubmit.co/vikhulei@gmail.com" method="POST">
                <LabelStar htmlFor="name">Name</LabelStar>
                <Input type="text" id="name" />
                <LabelStar htmlFor="phone">Phone Number</LabelStar>
                <Input type="phone" id="phone" />
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" className="noStar"/>
                <Label htmlFor="message">Message</Label>
                <TextArea type="textarea" id="message" />
            <Button>SUBMIT</Button>
            </Form>
        </Wrapper>
    )

}

export default Quote