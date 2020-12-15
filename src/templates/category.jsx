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
      <Link to="/talent" activeClassName="active">
        <span>Talent</span>
      </Link>
    </SideNavigationLeft>
    <SideNavigationRight>
      <ScrollDown />
    </SideNavigationRight>
    <HeaderBackground category={category} />
    <div
      sx={{
        mt: "calc(50vh - 65px)",
        p: [4, 4, 5],
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

const HeaderBackground = ({ category }) => {
  switch (category) {
    case "Interviews":
      return (
        <HeaderImage
          category={category}
          backgroundColor="brick"
          textColor="orange"
        />
      )
    case "Press":
      return (
        <HeaderImage
          category={category}
          backgroundColor="plum"
          textColor="hibiscusPink"
        />
      )
    case "Features":
      return (
        <HeaderImage
          category={category}
          backgroundColor="lightGreen"
          textColor="black"
        />
      )
    case "Blog":
      return (
        <HeaderImage
          category={category}
          backgroundColor="darkGreen"
          textColor="lightGreen"
        />
      )
    case "Essays":
      return (
        <HeaderImage
          category={category}
          backgroundColor="babyBlue"
          textColor="white"
        />
      )
    case "Culture":
      return (
        <HeaderImage
          category={category}
          backgroundColor="hibiscusPink"
          textColor="lightGreen"
        />
      )
    case "Casting":
      return (
        <HeaderImage
          category={category}
          backgroundColor="royalBlue"
          textColor="hibiscusPink"
        />
      )
    case "Projects":
      return (
        <HeaderImage
          category={category}
          backgroundColor="red"
          textColor="white"
        />
      )
    case "Black Hole":
      return (
        <HeaderImage
          category={category}
          backgroundColor="black"
          textColor="brick"
        />
      )
    default:
      return null
  }
}

const HeaderImage = ({ category, textColor, backgroundColor }) => {
  return (
    <div
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        height: "50vh",
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        sx={{
          color: textColor,
          fontFamily: "display",
          fontSize: "10vw",
          fontStyle: "italic",
          fontWeight: "medium",
          m: 0,
          mt: "65px",
        }}
      >
        {category}
      </h2>
    </div>
  )
}

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
