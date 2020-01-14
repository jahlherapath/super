/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout/"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Layout>
      <div sx={{ backgroundColor: "black" }}></div>
      <h2>{data.title.text}</h2>
      <p>{data.content.text}</p>
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
          html
          text
        }
        content {
          html
          text
        }
      }
    }
  }
`
