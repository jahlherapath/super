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
    toggleState,
    posts: { nodes, totalCount },
  },
  pageContext: { category, title, currentPage, numPages, prefix },
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
        animate={{ backgroundPosition: "left bottom", color: "white" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
      >
        <span>Journal</span>
      </MotionLink>
      <Link to="/" activeClassName="active" sx={{}}>
        <span>Freelancers</span>
      </Link>
      <Link to="/casting" activeClassName="active" sx={{}}>
        <span>Casting</span>
      </Link>
      <Link to="/" activeClassName="active">
        <span>Talent</span>
      </Link>
    </SideNavigationLeft>
    <SideNavigationRight>
      <ScrollDown />
    </SideNavigationRight>
    <div
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        backgroundColor: "lightGreen",
        pt: "60px",
        mb: "50vh",
        textAlign: "center",
      }}
    >
      <h2 sx={{ variant: "styles.date", textAlign: "center" }}>
        {totalCount} {totalCount === 1 ? "Post" : "Posts"}
        {totalCount === 1 ? " was" : " were"} tagged with <br></br>
        <span
          sx={{
            ml: 3,
            fontFamily: "serif",
            fontSize: 12,
            fontStyle: "italic",
            fontWeight: "medium",
          }}
        >
          {category}
        </span>
      </h2>
    </div>
    <div
      sx={{
        mt: "calc(50vh - 60px)",
        p: 5,
        backgroundColor: "white",
      }}
    >
      <Listing
        posts={nodes}
        toggleState={toggleState}
        pageInfo={{ currentPage, numPages, prefix }}
      />
    </div>
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
