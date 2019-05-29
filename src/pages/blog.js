import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allContentfulPost.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="All blog posts"
                    keywords={[`blog`, `model railroading`, `free-mo`, `ho scale`]}
                />
                <Bio />
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
                            <p>{node.subtitle}</p>
                        </div>
                    )
                })}
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
                    title
                    subtitle
                    author
                    slug
                }
            }
        }
    }
`