import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="a-new-website-for-a-new-year-">
            A new website for a new year.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.aboutImage.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>That's me ^</figcaption>
          </figure>
          <h3 id="Who">New blog, who dis?</h3>
          <p>
            From the east coast to the west coast, and everywhere inbetween.
          </p>
          <p>
            I'm a self-proclaimed polymath with a knack for being an autodidact.
          </p>
          <p>
            I love learning. Whether it's figuring out Docker and Kubernetes
            with Rancher, or how to simulate an exploding building or Houdini
            and then rending it with Clarisse - I'm interested.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    aboutImage: file(relativePath: { eq: "jeff.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
