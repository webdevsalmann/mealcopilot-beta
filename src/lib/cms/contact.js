import Link from "next/link";

///////////////////////////////////////////////////////////////////////////////////////////
// Contact Form
///////////////////////////////////////////////////////////////////////////////////////////
export const contact = {
    headingOne: <><span className="text-primary">Get in Touch</span> with Us</>,

    paraOne:
        <>
            We&apos;re here to help with any questions, inquiries, or feedback you might have.
            <br /><br />
            Whether you&apos;re looking to discuss business opportunities, request more information, or simply want to get in touch, our team is ready to assist you.
            <br /><br />
            Please fill out the form below, and we&apos;ll get back to you as soon as possible.
            <br /><br />
            Are you looking for Job? We are hiring, Check our <Link className="underline underline-offset-2 hover:text-primary" href="/careers">Careers</Link> page.
            <br /><br />
            Interested in receiving deliveries? Check if we serve your area or join our <Link className="underline underline-offset-2 hover:text-primary" href="/#waitlist">Waitlist</Link>.
        </>,
}


export const contactForm = {
    firstName: "727782606",
    lastName: "469037222",
    email: "233219632",
    phone: "303251615",
    preferredMethod: "473713592",
    messageType: "1494750270",
    message: "659131164",
}