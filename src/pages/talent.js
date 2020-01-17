/** @jsx jsx */
import { jsx } from "theme-ui"

// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

function Talent({ data: { talent } }) {
  const data = talent.data
  return (
    <Layout>
      <SEO title="Talent" />
      <h1>Talent page</h1>
      <div sx={{ backgroundColor: "white", p: 4, width: "25%" }}>
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
            <div>
              <a href={link.url.url}>{link.title.text}</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Talent

export const talentQuery = graphql`
  query TalentQuery {
    talent: prismicTalent {
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
