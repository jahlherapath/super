/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql, Link } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Layout from "../components/Layout/"
import Slices from "../components/Slices"

export default ({
  data: {
    prismicPost: { data },
  },
  pageContext: { next, prev },
}) => (
  <Layout>
    <h2>{data.title.text}</h2>
    <div dangerouslySetInnerHTML={{ __html: data.content.html }}></div>
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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        mt: 3,
      }}
    >
      {prev ? (
        <Link to={prev.node.uid} rel="prev">
          ← Prev
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.node.uid} rel="next">
          Next →
        </Link>
      ) : (
        <div />
      )}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        date
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
