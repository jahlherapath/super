/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
        <a
          sx={{
            fontFamily: "body",
            fontSize: [1, 1, 2],
            textTransform: "uppercase",
          }}
          href={"mailto:" + about.data.email.text}
          aria-label="Email"
        >
          Email Super
        </a>
      </SideNavigationRight>
      <Container>
        <Left>
          <div
            sx={{
              variant: "styles.about",
              mb: 5,
            }}
            dangerouslySetInnerHTML={{ __html: about.data.about.html }}
          />
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
                    aria-label="Email"
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
                      aria-label="Instagram"
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
        </Left>
        <Right>
          <div
            sx={{
              position: ["relative", "relative", "sticky"],
              top: ["auto", "auto", "97px"],
            }}
          >
            <Img
              sx={{ mb: 5 }}
              fluid={about.data.side_image.localFile.childImageSharp.fluid}
            />
          </div>
        </Right>
      </Container>
    </Layout>
  )
}

export default About

const Columns = ({ children }) => {
  return <div sx={{ mb: 6 }}>{children}</div>
}

const Title = ({ children }) => {
  return (
    <h3
      sx={{
        variant: "styles.about",
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

const Container = ({ children }) => {
  return (
    <div
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        p: [4, 4, 5],
        backgroundColor: "black",
        color: "white",
      }}
    >
      {children}
    </div>
  )
}

const Left = ({ children }) => {
  return (
    <div
      sx={{
        position: ["relative", "relative", "sticky"],
        top: [0, 0, 12],
        alignSelf: "flex-start",
        gridColumn: ["span 2", "span 2", "span 1"],
        pr: [0, 0, 7],
        order: [2, 2, 0],
      }}
    >
      {children}
    </div>
  )
}

const Right = ({ children }) => {
  return (
    <div
      sx={{
        gridColumn: ["span 2", "span 2", "span 1"],
        pl: [0, 0, 7],
        order: [1, 1, 0],
      }}
    >
      {children}
    </div>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    about: prismicInfo {
      data {
        side_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
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
