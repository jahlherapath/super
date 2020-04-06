/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import SEO from "components/SEO"
import Layout from "components/Layout"
import Listing from "components/Listing"

export default ({
  data: {
    posts: { nodes: posts },
  },
  pageContext: { title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <div sx={{ pt: 3 }}>
      <Listing posts={posts} pageInfo={{ currentPage, numPages, prefix }} />
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PageQuery($skip: Int!, $limit: Int!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        uid
        id
        data {
          date
          title {
            html
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
  }
`
