/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default ({
  data: {
    prismicTalent: { data },
  },
  pageContext: { next, prev },
}) => (
  <Layout>
    <div sx={{ backgroundColor: "white", p: 4 }}>
      <h2>{data.name.text}</h2>
      <h3>{data.location.text}</h3>
      <p>{data.availability.text}</p>
      <a href={"mailto:" + data.contact.text}>{data.contact.text}</a>
      <h3>Bio</h3>
      <div dangerouslySetInnerHTML={{ __html: data.bio.html }} />
      <p>{data.pgp.text}</p>
      <h3>Measurements</h3>
      <div dangerouslySetInnerHTML={{ __html: data.measurements.html }} />
      <div>
        <h3>Links</h3>
        {data.links.map((link, index) => (
          <div key={index}>
            <a href={link.url.url}>{link.title.text}</a>
          </div>
        ))}
      </div>
    </div>
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
  query TalentBySlug($uid: String!) {
    prismicTalent(uid: { eq: $uid }) {
      uid
      data {
        name {
          text
        }
        location {
          text
        }
        availability {
          text
        }
        contact {
          text
        }
        bio {
          html
          text
        }
        age {
          text
        }
        pgp {
          text
        }
        measurements {
          html
        }
        links {
          title {
            text
          }
          url {
            url
          }
        }
      }
    }
  }
`
