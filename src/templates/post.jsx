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
        to="/about"
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
    <div sx={{ p: 5 }}>
      <div sx={{ textAlign: "center", mb: 5 }}>
        <h1 sx={{ variant: "styles.display", mb: 3 }}>{data.title.text}</h1>
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
          display: "flex",
          flexWrap: ["wrap", "nowrap", "nowrap"],
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: 5,
        }}
      >
        {prev ? (
          <Link
            to={`/${prev.node.uid}`}
            sx={{
              display: "flex",
              alignItems: "center",
              width: ["100%", "auto", "auto"],
              variant: "styles.serif",
              fontStyle: "italic",
              "&:hover > svg": {
                transform: " translateX(-5px)",
                transition: "all 200ms ease",
              },
            }}
            rel="prev"
          >
            <ArrowLeft sx={{ color: "black" }} /> Prev Article
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/${next.node.uid}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: ["100%", "auto", "auto"],
              textAlign: "right",
              variant: "styles.serif",
              fontStyle: "italic",
              "&:hover > svg": {
                transform: " translateX(5px)",
                transition: "all 200ms ease",
              },
            }}
            rel="next"
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
        }
      }
    }
  }
`

const ArrowLeft = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", mr: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M36 12.5H5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M10 17.5L5 12.5L10 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", ml: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M5 12.5H36"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M31 17.5L36 12.5L31 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}
