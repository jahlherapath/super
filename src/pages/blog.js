/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Listing from "../components/Listing"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

function Blog({ data: { posts } }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Listing posts={posts.nodes} />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
