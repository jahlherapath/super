/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SideNavigationLeft from "../components/SideNavigationLeft"

function About({ data: { about } }) {
  return (
    <Layout>
      <SEO title="About" />
      <SideNavigationLeft>
        <PageTransition
          defaultStyle={{
            transition: "all 600ms ease-in-out",
          }}
          transitionStyles={{
            entering: { flex: 1, backgroundColor: "transparent" },
            entered: { flex: 1, backgroundColor: "transparent" },
            exiting: { flex: 0, backgroundColor: "transparent" },
          }}
          transitionTime={600}
        >
          <Link to="/about" sx={{}}>
            About
          </Link>
        </PageTransition>
        <Link to="/blog" sx={{}}>
          Journal
        </Link>
        <Link to="/" sx={{}}>
          Freelancers
        </Link>
        <Link to="/casting" sx={{}}>
          Casting
        </Link>
        <Link to="/" sx={{ borderRight: "none !important" }}>
          Talent
        </Link>
      </SideNavigationLeft>
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
        variant: "styles.display",
        fontSize: 9,
        mb: 3,
        textAlign: "center",
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
