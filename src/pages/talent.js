/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Listing from "../components/TalentListing/Listing"

function Talent({ data: { talent } }) {
  return (
    <Layout>
      <SEO title="Talent" />
      <h1>Talent Page</h1>
      <div sx={{ pt: 3 }}>
        <Listing talent={talent.nodes} />
      </div>
    </Layout>
  )
}

export default Talent

export const pageQuery = graphql`
  query TalentQuery {
    talent: allPrismicTalent(
      sort: { fields: [data___name___text], order: DESC }
      limit: 10
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
          age {
            text
          }
          pgp {
            text
          }
          measurements {
            html
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
