/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

function Info({ data: { info } }) {
  return (
    <Layout title="About">
      <SEO title="About" />
      <div sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gridColumnStart: 4,
            gridColumnEnd: 10,
            px: 5,
            minHeight: "50vh",
            textAlign: "center",
            backgroundColor: "purple100",
          }}
        >
          <div
            sx={{
              variant: "styles.introLarge",
            }}
            dangerouslySetInnerHTML={{ __html: info.data.about.html }}
          />
          {info.data.press_kit.url && (
            <a href={info.data.press_kit.url}>Download Press Kit</a>
          )}
        </div>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridGap: 8,
          px: 8,
          minHeight: "50vh",
          backgroundColor: "purple200",
        }}
      >
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
          }}
        >
          <h2 sx={{ textAlign: "center" }}>Services</h2>
          <div
            sx={{
              variant: "styles.body",
            }}
            dangerouslySetInnerHTML={{ __html: info.data.services.html }}
          />
        </div>
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
          }}
        >
          <h2 sx={{ textAlign: "center" }}>Talent</h2>
          <div
            sx={{
              variant: "styles.body",
            }}
            dangerouslySetInnerHTML={{ __html: info.data.talent.html }}
          />
        </div>
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
          }}
        >
          <h2 sx={{ textAlign: "center" }}>Contact</h2>
          {info.data.email.text && (
            <a
              sx={{
                variant: "styles.body",
                mr: 3,
              }}
              href={"mailto:" + info.data.email.text}
            >
              Email Us
            </a>
          )}
          {info.data.instagram.text && (
            <span>
              insta:{" "}
              <a
                sx={{
                  variant: "styles.body",
                  mr: 3,
                }}
                href={"https://www.instagram.com/" + info.data.instagram.text}
              >
                @{info.data.instagram.text}
              </a>
            </span>
          )}
          {info.data.phone.text && <span>{info.data.phone.text}</span>}
          {info.data.address.html && (
            <div
              sx={{
                variant: "styles.body",
              }}
              dangerouslySetInnerHTML={{ __html: info.data.address.html }}
            />
          )}
          {info.data.contact.html && (
            <div
              sx={{
                variant: "styles.body",
              }}
              dangerouslySetInnerHTML={{ __html: info.data.contact.html }}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Info

export const infoQuery = graphql`
  query InfoQuery {
    info: prismicInfo {
      data {
        about {
          html
        }
        phone {
          text
        }
        address {
          html
        }
        email {
          text
        }
        instagram {
          text
        }
        press_kit {
          url
        }
        services {
          html
        }
        talent {
          html
        }
        contact {
          html
        }
      }
    }
  }
`
