import React from 'react'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import bostonandmaine from '../images/bostonandmaine.jpg'

const ContactPageSuccess = () => {
    return (
        <Layout>
            <HeroBanner
            image={bostonandmaine}
            title="Join Us" 
            subtitle="Become a member of Chicago Free-Mo" 
            />
            <Block>
                <h1>Thanks!</h1>
                <p>We will be getting back to you shortly.</p>
            </Block>
        </Layout>
    )   
}

export default ContactPageSuccess