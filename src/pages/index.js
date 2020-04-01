/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Listing from "../components/TalentListing/Listing"

function Index({ data: { talent } }) {
  return (
    <Layout title="Talent">
      <SEO title="Talent" />
      <div sx={{ pt: 3 }}>
        <Listing talent={talent.nodes} />
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    talent: allPrismicTalent(
      sort: { fields: [data___name___text], order: DESC }
    ) {
      nodes {
        uid
        id
        data {
          name {
            text
          }
          location {
            text
          }
          availability {
            text
          }
          contact {
            text
          }
          bio {
            html
            text
          }
          thumbnail {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          links {
            title {
              text
            }
            url {
              url
            }
          }
          tags {
            tag {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
