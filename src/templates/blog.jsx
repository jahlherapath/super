/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import SideNavigationLeft from "components/SideNavigationLeft"
import SideNavigationRight from "components/SideNavigationRight"
import ScrollDown from "components/ScrollDown"
import Listing from "components/Listing"

import { motion } from "framer-motion"

const MotionLink = motion.custom(Link)

export default ({
  data: {
    posts: { nodes: posts },
  },
  pageContext: { title, currentPage, numPages, prefix },
}) => (
  <Layout>
    <SEO title={title} />
    <SideNavigationLeft>
      <Link to="/about" activeClassName="active" sx={{}}>
        <span>About</span>
      </Link>
      <MotionLink
        to="/blog"
        activeClassName="active"
        animate={{ backgroundPosition: "left bottom", color: "black" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
      >
        <span>Journal</span>
      </MotionLink>
      <Link to="/casting" activeClassName="active" sx={{}}>
        <span>Casting</span>
      </Link>
      <Link to="/talent">
        <span>Talent</span>
      </Link>
    </SideNavigationLeft>
    <SideNavigationRight>
      <ScrollDown />
    </SideNavigationRight>
    <div sx={{ p: [4, 4, 5] }}>
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
