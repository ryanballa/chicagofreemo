import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import bostonandmaine from '../images/bostonandmaine.jpg'
import construction from '../images/construction.jpeg'
import { breakPoints } from '../utils/styling'

const LearnPage = () => (
    <Layout>
        <HeroBanner
        image={bostonandmaine}
        title="Learn About Free-Mo"
        subtitle="What is it and how does it work?"
        />
        <Block>
            <h1>Is it Free?</h1>
            <p>Free-Mo gets its name from the idea of being free to join and free to display your creativity within the standard's framework. Free-Mo standards govern the ends of a module and basic trackwork guidelines. Modules can be single-ended, double-ended, or have multile ends. The guidlines around dimensions of each module allow for connectivity between modules of different owners.</p>
            <h2>Standards</h2>
            <p>Having your module be compatible with other Free-Mo modules means you follow the standards <a href="http://www.free-mo.org/standard">set forth here</a>.</p>
            <h2>Ease of Construction</h2>
            <p>It might seem like a daunting challenge to build a module but it's not difficult. Our <Link to="blog">blog</Link> goes through the process of creation of a module from start to finish.</p>
        </Block>
    </Layout>
);

export default LearnPage
