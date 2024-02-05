import { Wrapper, HashTagQuote, Title, Form, Label, LabelStar, Input, TextArea, Button  } from "./QuoteStyle"

const Quote = () => {
    return (
        <Wrapper>
            <HashTagQuote id="quote" ></HashTagQuote>
            <Title>
                Request a Quote
            </Title>
            <Form action="https://formsubmit.co/chris@cmfgardenservices.co.uk" method="POST">
                <LabelStar htmlFor="name">Name</LabelStar>
                <Input type="text" id="name" name="name" required/>
                <LabelStar htmlFor="phone">Phone Number</LabelStar>
                <Input type="number" id="phone" name="phone" required />
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" name="email"/>
                <Label htmlFor="message">Message</Label>
                <TextArea type="textarea" id="message" name="message" placeholder="Please describe what services you would like to be done for your garden"/>
            <Button type="submit">SUBMIT</Button>
            </Form>
        </Wrapper>
    )

}

export default Quote