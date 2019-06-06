import React, { useState }  from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import newtonstation from '../images/newtonstation.jpeg'
import HR from '../components/hr'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const StyledSection = styled('section')({
    'button': {
        background: '#849E6B',
        border: '2px solid #647C4C',
        boxSizing: 'borderBox',
        borderRadius: '4px',
        color: '#F9F9F9',
        display: 'inline-block',
        fontSize: '16px',
        padding: '10px',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.4)', 
    },
    '& input, & textarea': {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px', 
        textAlign: 'left',
        width: '80%',
    },
    '& form': {
        width: '100%',
    },
    '& label': {
        '& span': {
            paddingTop: '5px',
            marginRight: '10px',
            width: '20%',
        },
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const ContactPage = () => {

    const [email, setEmail] = useState('');
    const [mailingListResult, setMailingListResult] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email) // listFields are optional if you are only capturing the email address.
        .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
        let message = data.msg;
        if (data.result === 'error') {
            message = "You are already signed up for our newsletter."
        }
        setMailingListResult(message);
        })
        .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
        })
    }

    return (
        <Layout>
            <HeroBanner
            image={newtonstation}
            title="Join Us" 
            subtitle="Become a member of Chicago Free-Mo" 
            />
            <Block>
                <h1>Mailing List</h1>
                <StyledSection>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label><span>Email</span> <input onChange={handleChange} type="text" name="email" /></label>
                        </p>
                        <p>
                            <button type="submit">Sign Up</button>
                        </p>
                        <p>{mailingListResult}</p>
                    </form>
                </StyledSection>
                <HR />
                <h1>Contact Us</h1>
                <p>We're happy to hear from you and to answer any questions you might have.</p>
                <StyledSection>
                <form action="contact-success" name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label><span>Full Name</span> <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label><span>Email</span> <input type="text" name="email" /></label>
                    </p>
                    <p>
                        <label><span>Message</span> <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
                </StyledSection>
            </Block>
        </Layout>
    )   
}

export default ContactPage