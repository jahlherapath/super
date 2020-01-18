/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import SEO from "components/SEO"
import Layout from "components/Layout/"
import Listing from "components/TalentListing/Listing/"

export default ({
  data: {
    toggleState,
    talent: { nodes, totalCount },
  },
  pageContext: { tag, title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <h2>
      {totalCount} {totalCount === 1 ? "Person" : "People"}
      {totalCount === 1 ? " was" : " were"} tagged with "{tag}"
    </h2>
    <Listing
      talent={nodes}
      toggleState={toggleState}
      pageInfo={{ currentPage, numPages, prefix }}
    />
  </Layout>
)

export const pageQuery = graphql`
  query tagPage($tag: String!, $skip: Int!, $limit: Int!) {
    talent: allPrismicTalent(
      limit: $limit
      skip: $skip
      filter: {
        data: {
          tags: {
            elemMatch: {
              tag: { document: { elemMatch: { data: { name: { eq: $tag } } } } }
            }
          }
        }
      }
    ) {
      totalCount
      nodes {
        uid
        data {
          name {
            text
          }
          bio {
            html
            text
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
