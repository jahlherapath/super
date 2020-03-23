/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Services from "../assets/services.svg"
import Talent from "../assets/talent.svg"
import Contact from "../assets/contact.svg"

export default function About({ data: { about } }) {
  return (
    <Layout title="About">
      <SEO title="About" />
      <Intro>
        <div
          sx={{
            variant: "styles.introLarge",
            color: "primary",
          }}
          dangerouslySetInnerHTML={{ __html: about.data.about.html }}
        />
        {about.data.press_kit.url && (
          <div sx={{ variant: "styles.pressKit", py: 8 }}>
            <a href={about.data.press_kit.url}>Download press kit</a>
            <a href={about.data.press_kit.url}>Download press kit</a>
          </div>
        )}
      </Intro>
      <Content>
        <Columns>
          <Icons>
            <img src={Services} alt="Services Icon" />
          </Icons>
          <div
            sx={{
              variant: "styles.html",
              color: "primary",
            }}
            dangerouslySetInnerHTML={{ __html: about.data.services.html }}
          />
        </Columns>
        <Columns>
          <Icons>
            <img src={Talent} alt="Talent Icon" />
          </Icons>
          <div
            sx={{
              variant: "styles.html",
              color: "primary",
            }}
            dangerouslySetInnerHTML={{ __html: about.data.talent.html }}
          />
        </Columns>
        <Columns>
          <Icons>
            <img src={Contact} alt="Contact Icon" />
          </Icons>
          <Row>
            {about.data.email.text && (
              <a
                sx={{
                  variant: "styles.html",
                  color: "primary",
                  mr: 3,
                  fontWeight: "bold",
                  lineHeight: "leadingLoose",
                }}
                href={"mailto:" + about.data.email.text}
              >
                Email Us
              </a>
            )}
            {about.data.instagram.text && (
              <span
                sx={{ color: "primary", mr: 3, lineHeight: "leadingLoose" }}
              >
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
              <span sx={{ color: "primary", lineHeight: "leadingLoose" }}>
                {about.data.phone.text}
              </span>
            )}
          </Row>
          <Row>
            {about.data.address.html && (
              <div
                sx={{
                  variant: "styles.html",
                  color: "primary",
                }}
                dangerouslySetInnerHTML={{ __html: about.data.address.html }}
              />
            )}
          </Row>
          <Row>
            {about.data.contact.html && (
              <div
                sx={{
                  variant: "styles.html",
                  color: "primary",
                }}
                dangerouslySetInnerHTML={{ __html: about.data.contact.html }}
              />
            )}
          </Row>
        </Columns>
      </Content>
    </Layout>
  )
}

const Intro = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: [0, 0, 6],
        py: 11,
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gridColumnStart: [1, 1, 2],
          gridColumnEnd: [13, 13, 12],
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridColumnGap: 6,
        gridRowGap: 8,
      }}
    >
      {children}
    </div>
  )
}

const Columns = ({ children }) => {
  return (
    <div
      sx={{
        gridColumn: ["span 6", "span 6", "span 2"],
      }}
    >
      {children}
    </div>
  )
}

const Icons = ({ children }) => {
  return <div sx={{ width: "220px", m: "0 auto" }}>{children}</div>
}

const Row = ({ children }) => {
  return <div sx={{ mb: 3 }}>{children}</div>
}

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
