/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Services from "../assets/services.svg"
import Talent from "../assets/talent.svg"
import Contact from "../assets/contact.svg"

function About({ data: { about } }) {
  return (
    <Layout title="About">
      <SEO title="About" />
      <div
        sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", pb: 12 }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gridColumnStart: 2,
            gridColumnEnd: 12,
            textAlign: "center",
            minHeight: [0, 0, "60vh"],
          }}
        >
          <div
            sx={{ color: "primary", variant: "styles.introLarge" }}
            dangerouslySetInnerHTML={{ __html: about.data.about.html }}
          />
          {about.data.press_kit.url && (
            <div sx={{ variant: "styles.pressKit" }}>
              <a href={about.data.press_kit.url}>Download press kit</a>
              <a href={about.data.press_kit.url}>Download press kit</a>
            </div>
          )}
        </div>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
        }}
      >
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
            px: 6,
            pb: 8,
          }}
        >
          <div sx={{ width: "220px", m: "0 auto" }}>
            <img src={Services} alt="Services Icon" />
          </div>
          <div
            sx={{
              variant: "styles.html",
              color: "primary",
            }}
            dangerouslySetInnerHTML={{ __html: about.data.services.html }}
          />
        </div>
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
            px: 6,
            pb: 8,
          }}
        >
          <div sx={{ width: "220px", m: "0 auto" }}>
            <img src={Talent} alt="Talent Icon" />
          </div>
          <div
            sx={{
              variant: "styles.html",
              color: "primary",
            }}
            dangerouslySetInnerHTML={{ __html: about.data.talent.html }}
          />
        </div>
        <div
          sx={{
            gridColumn: ["span 12", "span 12", "span 4"],
            px: 6,
            pb: 8,
          }}
        >
          <div sx={{ width: "220px", m: "0 auto" }}>
            <img src={Contact} alt="Contact Icon" />
          </div>
          <div sx={{ mb: 3 }}>
            {about.data.email.text && (
              <a
                sx={{
                  variant: "styles.html",
                  color: "primary",
                  mr: 3,
                  fontWeight: "bold",
                }}
                href={"mailto:" + about.data.email.text}
              >
                Email Us
              </a>
            )}
            {about.data.instagram.text && (
              <span sx={{ color: "primary", mr: 3 }}>
                insta:{" "}
                <a
                  sx={{
                    variant: "styles.html",
                    color: "primary",
                    fontWeight: "bold",
                  }}
                  href={
                    "https://www.instagram.com/" + about.data.instagram.text
                  }
                >
                  @{about.data.instagram.text}
                </a>
              </span>
            )}
            {about.data.phone.text && (
              <span sx={{ color: "primary" }}>{about.data.phone.text}</span>
            )}
          </div>
          {about.data.address.html && (
            <div
              sx={{
                variant: "styles.html",
                color: "primary",
                mb: 3,
              }}
              dangerouslySetInnerHTML={{ __html: about.data.address.html }}
            />
          )}
          {about.data.contact.html && (
            <div
              sx={{
                variant: "styles.html",
                color: "primary",
                mb: 3,
              }}
              dangerouslySetInnerHTML={{ __html: about.data.contact.html }}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    about: prismicInfo {
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
