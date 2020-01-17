import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"

import Listing from "components/Listing"

export default ({
  data: {
    posts: { nodes: posts },
  },
  pageContext: { title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <Listing posts={posts} pageInfo={{ currentPage, numPages, prefix }} />
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
