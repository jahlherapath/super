/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import SideNavigationLeft from "components/SideNavigationLeft"
import SideNavigationRight from "components/SideNavigationRight"
import ScrollDown from "components/ScrollDown"
import Listing from "components/Listing"

export default ({
  data: {
    toggleState,
    posts: { nodes, totalCount },
  },
  pageContext: { category, title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <SideNavigationLeft>
      <Link to="/about" sx={{}}>
        About
      </Link>
      <Link to="/blog" sx={{}}>
        Journal
      </Link>
      <Link to="/" sx={{}}>
        Freelancers
      </Link>
      <Link to="/casting" sx={{}}>
        Casting
      </Link>
      <Link to="/" sx={{ borderRight: "none !important" }}>
        Talent
      </Link>
    </SideNavigationLeft>
    <SideNavigationRight>
      <ScrollDown />
    </SideNavigationRight>
    <h2 sx={{ variant: "styles.date", textAlign: "center", mb: 4 }}>
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
          date(formatString: "MMMM Do, YYYY")
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
