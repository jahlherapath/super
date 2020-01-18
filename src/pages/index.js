/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Listing from "../components/Listing"
import TalentListing from "../components/TalentListing/Listing"

function Index({ data: { posts, talent } }) {
  return (
    <Layout>
      <SEO title="Talent" />
      <div sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
        <div sx={{ gridColumn: "span 8" }}>
          <h1>Talent Here</h1>
          <div sx={{ pt: 3 }}>
            <TalentListing talent={talent.nodes} />
          </div>
        </div>
        <div sx={{ gridColumn: "span 4" }}>
          <h1>Posts Here</h1>
          <div sx={{ pt: 3 }}>
            <Listing posts={posts.nodes} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: 3
    ) {
      nodes {
        uid
        data {
          date
          title {
            text
          }
          content {
            html
            text
          }
          categories {
            category {
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
