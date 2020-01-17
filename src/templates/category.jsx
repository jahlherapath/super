/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import SEO from "components/SEO"
import Layout from "components/Layout/"
import Listing from "components/Listing/"

const Category = ({
  data: {
    toggleState,
    images,
    posts: { nodes, totalCount },
  },
  pageContext: { category, title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <h2>
      {totalCount} {totalCount === 1 ? "Post" : "Posts"}
      {totalCount === 1 ? " was" : " were"} tagged with "{category}"
    </h2>
    <Listing
      posts={nodes}
      toggleState={toggleState}
      pageInfo={{ currentPage, numPages, prefix }}
    />
  </Layout>
)

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String!, $skip: Int!, $limit: Int!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: $limit
      skip: $skip
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
