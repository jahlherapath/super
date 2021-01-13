/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Layout from "components/Layout"
import SEO from "components/SEO"
import SideNavigationLeft from "components/SideNavigationLeft"
import SideNavigationRight from "components/SideNavigationRight"
import ScrollDown from "components/ScrollDown"
import Slices from "components/Slices"

import { motion } from "framer-motion"

const MotionLink = motion.custom(Link)

export default ({
  data: {
    prismicPost: { data },
  },
  pageContext: { next, prev },
}) => (
  <Layout>
    <SEO title={data.title.text} />
    <SideNavigationLeft>
      <Link to="/about" activeClassName="active" sx={{}}>
        <span>About</span>
      </Link>
      <MotionLink
        to="/blog"
        activeClassName="active"
        className="active"
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
    <div sx={{ p: [4, 4, 5] }}>
      <div sx={{ textAlign: "center", mb: 5 }}>
        <h1
          sx={{
            fontFamily: "display",
            fontStyle: "italic",
            fontWeight: "medium",
            mt: 1,
            mb: 3,
            fontSize: ["32px", "32px", 12],
          }}
        >
          {data.title.text}
        </h1>
        <p sx={{ variant: "styles.date" }}>{data.date}</p>
      </div>
      {data.thumbnail && (
        <Img
          fluid={data.thumbnail.localFile.childImageSharp.fluid}
          sx={{ mb: 5, minHeight: "30vh" }}
        />
      )}
      <div
        sx={{ variant: "styles.html", mb: 5 }}
        dangerouslySetInnerHTML={{ __html: data.content.html }}
      ></div>
      {(data.body || []).map((slice, index) => (
        <div key={index}>
          <Slices
            key={index}
            sectionType={slice.slice_type}
            sectionData={slice}
          />
        </div>
      ))}
      <div
        sx={{
          position: "relative",
          gridColumn: "span 6",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 4,
          height: ["auto", "auto", "35px"],
        }}
      >
        {prev ? (
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              zIndex: 20,
              width: ["100%", "100%", "auto"],
              height: "100%",
              px: 3,
              fontFamily: "body",
              fontSize: [1, 1, 2],
            }}
            to={`/${prev.node.uid}`}
            rel="prev"
          >
            <ArrowLeft /> Prev Article
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/${next.node.uid}`}
            rel="next"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: ["flex-end", "flex-end", "flex-start"],
              zIndex: 20,
              width: ["100%", "100%", "auto"],
              height: "100%",
              px: 3,
              fontFamily: "body",
              mb: [4, 4, 0],
              fontSize: [1, 1, 2],
            }}
          >
            Next Article <ArrowRight />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
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
          text
        }
        content {
          html
        }
        body {
          ... on PrismicPostBodyContent {
            slice_type
            items {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyImageGallery {
            slice_type
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
          ... on PrismicPostBodyVideoEmbedBlock {
            id
            slice_type
            items {
              embed_url {
                embed_url
              }
            }
          }
        }
      }
    }
  }
`

const ArrowLeft = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mr: 3 }}
    >
      <path
        d="M-1.14441e-05 5.00005L15 9.33018L15 0.669922L-1.14441e-05 5.00005Z"
        fill="black"
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ml: 3 }}
    >
      <path
        d="M15.0005 5.00005L0.000488385 9.33018L0.000488281 0.669922L15.0005 5.00005Z"
        fill="black"
      />
    </svg>
  )
}
