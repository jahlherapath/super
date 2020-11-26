/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SideNavigationLeft from "../components/SideNavigationLeft"
import SideNavigationRight from "../components/SideNavigationRight"

import { motion } from "framer-motion"

const MotionLink = motion.custom(Link)

function About({ data: { about } }) {
  return (
    <Layout>
      <SEO title="About" />
      <SideNavigationLeft>
        <MotionLink
          to="/about"
          activeClassName="active"
          animate={{ backgroundPosition: "left bottom", color: "white" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.2,
          }}
          sx={{}}
        >
          <span>About</span>
        </MotionLink>
        <Link to="/blog" activeClassName="active" sx={{}}>
          <span>Journal</span>
        </Link>
        <Link to="/casting" activeClassName="active" sx={{}}>
          <span>Casting</span>
        </Link>
        <Link to="/" activeClassName="active">
          <span>Talent</span>
        </Link>
      </SideNavigationLeft>
      <SideNavigationRight>
        {/* <a
          sx={{
            fontFamily: "body",
            fontSize: [1, 1, 2],
            textTransform: "uppercase",
          }}
          href={"mailto:" + about.data.email.text}
        >
          Email Super
        </a> */}
      </SideNavigationRight>
      <div sx={{ p: [4, 4, 5] }}>
        <Intro>
          <div
            sx={{
              variant: "styles.about",
              mb: 5,
            }}
            dangerouslySetInnerHTML={{ __html: about.data.about.html }}
          />
          {about.data.press_kit.url && (
            <div>
              <a
                sx={{
                  variant: "styles.button",
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={about.data.press_kit.url}
              >
                Download press kit
              </a>
            </div>
          )}
        </Intro>
        <Content>
          <Columns>
            <Title>Services</Title>
            <div
              sx={{
                variant: "styles.html",
              }}
              dangerouslySetInnerHTML={{ __html: about.data.services.html }}
            />
          </Columns>
          <Columns>
            <Title>Talent</Title>
            <div
              sx={{
                variant: "styles.html",
              }}
              dangerouslySetInnerHTML={{ __html: about.data.talent.html }}
            />
          </Columns>
          <Columns>
            <Title>Contact</Title>
            <Row>
              <div sx={{ variant: "styles.html" }}>
                {about.data.email.text && (
                  <a
                    sx={{
                      mr: 3,
                    }}
                    href={"mailto:" + about.data.email.text}
                  >
                    Email Us
                  </a>
                )}
                {about.data.instagram.text && (
                  <span sx={{ mr: 3 }}>
                    insta:{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.instagram.com/" + about.data.instagram.text
                      }
                    >
                      @{about.data.instagram.text}
                    </a>
                  </span>
                )}
                {about.data.phone.text && <span>{about.data.phone.text}</span>}
              </div>
            </Row>
            <Row>
              {about.data.address.html && (
                <div
                  sx={{ variant: "styles.html" }}
                  dangerouslySetInnerHTML={{ __html: about.data.address.html }}
                />
              )}
            </Row>
            <Row>
              {about.data.contact.html && (
                <div
                  sx={{ variant: "styles.html" }}
                  dangerouslySetInnerHTML={{ __html: about.data.contact.html }}
                />
              )}
            </Row>
          </Columns>
        </Content>
      </div>
    </Layout>
  )
}

export default About

const Intro = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        py: 7,
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gridColumnStart: [1, 1, 1],
          gridColumnEnd: [13, 13, 13],
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
        gridColumnGap: 5,
        gridRowGap: 5,
        mt: 7,
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

const Title = ({ children }) => {
  return (
    <h3
      sx={{
        fontFamily: "display",
        fontStyle: "italic",
        fontWeight: "medium",
        fontSize: 9,
        mb: 3,
      }}
    >
      {children}
    </h3>
  )
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
