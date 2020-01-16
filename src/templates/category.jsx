/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout/"
import Listing from "../components/Listing/"

const Category = ({
  pageContext: { category },
  data: {
    toggleState,
    images,
    posts: { nodes, totalCount },
  },
}) => (
  <Layout>
    <h2>
      {totalCount} {totalCount === 1 ? "Post" : "Posts"}
      {totalCount === 1 ? " was" : " were"} tagged with "{category}"
    </h2>
    <Listing posts={nodes} toggleState={toggleState} />
  </Layout>
)

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: {
                document: { elemMatch: { data: { name: { eq: $category } } } }
              }
            }
          }
        }
      }
    ) {
      totalCount
      nodes {
        uid
        data {
          title {
            html
            text
          }
          content {
            html
            text
          }
          date(formatString: "DD.MM.YYYY")
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
        children {
          ... on PrismicPostBodyImageGallery {
            id
            items {
              image {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
