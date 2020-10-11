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
    posts: { nodes: posts },
  },
  pageContext: { title, currentPage, numPages, prefix },
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
          date(formatString: "MMMM Do, YYYY")
          thumbnail {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
