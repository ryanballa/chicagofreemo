import React from "react"
import { Link, graphql } from "gatsby"
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import newton from '../images/newton.jpeg'
import Img from "gatsby-image"

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allContentfulPost.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <HeroBanner
                    image={newton}
                    title="Blog" 
                    subtitle="Learn about Free-Mo and Model Railroading" 
                />
                <SEO
                    title="All blog posts"
                    keywords={[`blog`, `model railroading`, `free-mo`, `ho scale`]}
                />
                <Block>
                    {posts.map(({ node }) => {
                        const title = node.title || node.slug
                        return (
                            <div key={node.slug}>
                                <h3 style={{
                                    marginBottom: rhythm(1 / 4),
                                }}>
                                    <Link to={node.slug}>
                                        {title}
                                    </Link>
                                </h3>
                                <Img fluid={node.image.fluid} />
                                <p>{node.subtitle}</p>
                            </div>
                        )
                    })}
                </Block>
                <Block>
                    <Bio />
                </Block>
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulPost {
            edges {
                node {
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                    title
                    subtitle
                    author
                    slug
                }
            }
        }
    }
`