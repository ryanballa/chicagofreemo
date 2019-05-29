import React from 'react'
import driveIn from '../images/driveIn.jpg'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import HR from '../components/hr'

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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Block>
    <HR />
    <Block>
      <h1>Subscribe</h1>
      <p>Be the first to know about when our next meeting occurs.</p>
    </Block>
  </Layout>
)

export default IndexPage
