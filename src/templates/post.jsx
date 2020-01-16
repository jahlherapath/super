/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import ImageSlider from "../components/ImageSlider"
import Layout from "../components/Layout/"
import Slices from "../components/Slices"

function Post({ data: { prismicPost } }) {
  const { data } = prismicPost

  return (
    <Layout>
      {/* <ImageSlider /> */}
      <h2>{data.title.text}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }}></div>
      {data.body.map((slice, index) => (
        <div key={index}>
          <Slices
            key={index}
            sectionType={slice.slice_type}
            sectionData={slice}
          />
        </div>
      ))}
    </Layout>
  )
}

export default Post

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
