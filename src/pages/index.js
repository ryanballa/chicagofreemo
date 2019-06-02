import React from 'react'
import driveIn from '../images/driveIn.jpg'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import HR from '../components/hr'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <HeroBanner
      image={driveIn}
      actionTitle="Plan Your Layout"
      actionLocation="plan"
      title="Bring Your Own Layout" 
      subtitle="Model Railroading for those with limited space and time" 
    />
    <Block>
      <h1>What is Free-Mo?</h1>
      <p>A modular layout standard that allows one to build a piece of a layout and join it to others in endless combinations. <Link to="learn">Learn More</Link> about Free-Mo and how you can begin to create a layout.</p>
    </Block>
    {/* <HR />
    <Block>
      <h1>Subscribe</h1>
      <p>Be the first to know about when our next meeting occurs.</p>
    </Block> */}
  </Layout>
)

export default IndexPage
