/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default ({
  data: {
    prismicTalent: { data },
  },
  pageContext: { next, prev },
}) => (
  <Layout title={"Talent — " + data.name.text}>
    <SEO title={data.name.text} />
    <Container>
      <Left>
        <h1 sx={{ variant: "styles.display", mb: 6 }}>{data.name.text}</h1>
        <Info>
          {data.location.text && (
            <div sx={{ display: "flex", alignItems: "center" }}>
              <div sx={{ width: "15px" }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0C2.66087 0 0 2.66087 0 6C0 9.33913 2.66087 12 6 12C9.33913 12 12 9.33913 12 6C12 2.66087 9.33913 0 6 0ZM0.521739 6.26087H2.6087C2.6087 7.2 2.76522 8.08696 3.02609 8.86957H1.30435C0.834783 8.08696 0.573913 7.2 0.521739 6.26087ZM6.26087 2.6087V0.521739C7.04348 0.678261 7.77391 1.46087 8.24348 2.6087H6.26087ZM8.4 3.13043C8.66087 3.91304 8.81739 4.8 8.81739 5.73913H6.2087V3.13043H8.4ZM5.73913 0.521739V2.6087H3.75652C4.22609 1.46087 4.95652 0.678261 5.73913 0.521739ZM5.73913 3.13043V5.73913H3.13043C3.13043 4.8 3.28696 3.91304 3.54783 3.13043H5.73913ZM2.6087 5.73913H0.521739C0.573913 4.8 0.834783 3.91304 1.30435 3.13043H2.97391C2.76522 3.91304 2.66087 4.8 2.6087 5.73913ZM3.13043 6.26087H5.73913V8.86957H3.54783C3.33913 8.08696 3.18261 7.2 3.13043 6.26087ZM5.73913 9.3913V11.4783C4.95652 11.3217 4.22609 10.5391 3.75652 9.3913H5.73913ZM6.26087 11.4783V9.3913H8.24348C7.77391 10.5391 7.04348 11.3217 6.26087 11.4783ZM6.26087 8.86957V6.26087H8.86957C8.86957 7.2 8.71304 8.08696 8.45217 8.86957H6.26087ZM9.3913 6.26087H11.4783C11.4261 7.2 11.1652 8.08696 10.6957 8.86957H9.02609C9.23478 8.08696 9.33913 7.2 9.3913 6.26087ZM9.3913 5.73913C9.3913 4.8 9.23478 3.91304 8.97391 3.13043H10.6435C11.113 3.91304 11.4261 4.8 11.4261 5.73913H9.3913ZM10.3304 2.6087H8.81739C8.50435 1.82609 8.13913 1.2 7.66957 0.782609C8.71304 1.09565 9.65217 1.77391 10.3304 2.6087ZM4.33043 0.782609C3.86087 1.2 3.49565 1.82609 3.18261 2.6087H1.66957C2.34783 1.77391 3.28696 1.09565 4.33043 0.782609ZM1.66957 9.3913H3.18261C3.49565 10.1739 3.86087 10.8 4.33043 11.2174C3.28696 10.9043 2.34783 10.2261 1.66957 9.3913ZM7.66957 11.2174C8.13913 10.7478 8.50435 10.1217 8.81739 9.3913H10.3304C9.65217 10.2261 8.71304 10.9043 7.66957 11.2174Z"
                    sx={{ fill: "black" }}
                  />
                </svg>
              </div>
              <span sx={{ mt: "-3px" }}>{data.location.text}</span>
            </div>
          )}
          {data.pgp.text && (
            <div sx={{ display: "flex", alignItems: "center" }}>
              <div sx={{ width: "15px" }}></div>
              <span sx={{ mt: "-3px" }}>{data.pgp.text}</span>
            </div>
          )}
          {data.availability.text && (
            <div sx={{ display: "flex", alignItems: "center" }}>
              <div sx={{ width: "15px" }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.24 1.76C7.89333 -0.586667 4.09333 -0.586667 1.76 1.76C-0.586667 4.10667 -0.586667 7.90667 1.76 10.24C4.10667 12.5867 7.90667 12.5867 10.24 10.24C12.5867 7.89333 12.5867 4.10667 10.24 1.76ZM9.77333 9.77333C7.73333 11.8933 4.34667 11.9467 2.22667 9.90667C0.106667 7.86667 0.0533334 4.48 2.09333 2.36C2.13333 2.32 2.17333 2.26667 2.22667 2.22667C4.26667 0.106667 7.65333 0.0533334 9.77333 2.09333C11.8933 4.13333 11.9467 7.52 9.90667 9.64C9.85333 9.68 9.81333 9.73333 9.77333 9.77333Z"
                    sx={{ fill: "black" }}
                  />
                  <path
                    d="M9.27997 3.60002C9.1733 3.49335 9.0133 3.49335 8.90664 3.60002L4.83997 7.65335L3.10663 5.90668C2.99996 5.80002 2.83996 5.80002 2.7333 5.90668L2.62663 6.00002C2.51996 6.10668 2.51996 6.26668 2.62663 6.37335L4.55997 8.30668L4.59997 8.36001L4.63997 8.40001C4.74663 8.50668 4.90663 8.50668 5.0133 8.40001L9.34664 4.06669C9.4533 3.96002 9.4533 3.80002 9.34664 3.69335L9.27997 3.60002Z"
                    sx={{ fill: "black" }}
                  />
                </svg>
              </div>
              <span sx={{ mt: "-3px" }}>{data.availability.text}</span>
            </div>
          )}
        </Info>
        {data.intro.text && (
          <h2 sx={{ variant: "styles.intro" }}>{data.intro.text}</h2>
        )}
        {data.bio.html && (
          <div
            sx={{ variant: "styles.html" }}
            dangerouslySetInnerHTML={{ __html: data.bio.html }}
          />
        )}
        {data.measurements.html && (
          <div
            sx={{ variant: "styles.html" }}
            dangerouslySetInnerHTML={{ __html: data.measurements.html }}
          />
        )}
        {data.race.html && (
          <div
            sx={{ variant: "styles.html" }}
            dangerouslySetInnerHTML={{ __html: data.race.html }}
          />
        )}
        {data.metadata.html && (
          <div
            sx={{ variant: "styles.html" }}
            dangerouslySetInnerHTML={{ __html: data.metadata.html }}
          />
        )}
        <div sx={{ mt: 6 }}>
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url && link.url.url}
              sx={{
                variant: "styles.postLink",
              }}
            >
              {link.title.text}
            </a>
          ))}
        </div>
      </Left>
      <Right>
        <div
          sx={{
            position: "fixed",
            bottom: 8,
            right: [0, 0, "96px"],
            width: ["100%", "100%", "calc(50% - 96px)"],
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div sx={{ variant: "styles.sendMessage" }}>
            <div>
              <a
                sx={{
                  variant: "styles.mono",
                  display: "flex",
                  alignItems: "center",
                }}
                href={"mailto:" + data.contact.text}
              >
                Send message
                <div sx={{ width: "15px", ml: 2, mt: "3px" }}>
                  <svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.603825 0.922495C0.284153 0.922495 0 1.20663 0 1.5263V9.19845C0 9.51812 0.284153 9.80228 0.603825 9.80228H12.3962C12.7158 9.80228 13 9.51812 13 9.19845V1.49079C13 1.17112 12.7158 0.886963 12.3962 0.886963H0.603825V0.922495ZM1.56284 1.81047H11.4016L6.46448 6.35692L1.56284 1.81047ZM0.887978 2.37877L3.94262 5.18479L0.887978 8.23943V2.37877ZM12.0765 2.37877V8.23943L9.02186 5.18479L12.0765 2.37877ZM4.58197 5.7886L6.18033 7.28041C6.35792 7.42248 6.60656 7.42248 6.78415 7.28041L8.38251 5.7886L11.4727 8.87877H1.4918L4.58197 5.7886Z"
                      sx={{ fill: "white" }}
                    />
                  </svg>
                </div>
              </a>
              <a
                sx={{
                  variant: "styles.mono",
                  display: "flex",
                  alignItems: "center",
                }}
                href={"mailto:" + data.contact.text}
              >
                Send message
                <div sx={{ width: "15px", ml: 2, mt: "3px" }}>
                  <svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.603825 0.922495C0.284153 0.922495 0 1.20663 0 1.5263V9.19845C0 9.51812 0.284153 9.80228 0.603825 9.80228H12.3962C12.7158 9.80228 13 9.51812 13 9.19845V1.49079C13 1.17112 12.7158 0.886963 12.3962 0.886963H0.603825V0.922495ZM1.56284 1.81047H11.4016L6.46448 6.35692L1.56284 1.81047ZM0.887978 2.37877L3.94262 5.18479L0.887978 8.23943V2.37877ZM12.0765 2.37877V8.23943L9.02186 5.18479L12.0765 2.37877ZM4.58197 5.7886L6.18033 7.28041C6.35792 7.42248 6.60656 7.42248 6.78415 7.28041L8.38251 5.7886L11.4727 8.87877H1.4918L4.58197 5.7886Z"
                      sx={{ fill: "purple" }}
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div sx={{ width: "100%", height: "100%" }}>
          {data.gallery.map((image, index) => (
            <Img
              key={index}
              fluid={image.image.localFile.childImageSharp.fluid}
            />
          ))}
        </div>
      </Right>
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
    </Container>
  </Layout>
)

const Container = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridRowGap: [5, 5, 0],
        pt: 11,
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
        gridColumn: ["span 2", "span 2", "span 1"],
        px: [0, 0, 11],
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
        gridColumn: ["span 2", "span 2", "auto"],
        display: "flex",
        position: ["relative", "relative", "absolute"],
        top: 0,
        left: [0, 0, "auto"],
        right: [0, 0, "96px"],
        width: ["100%", "100%", "calc(50% - 96px)"],
      }}
    >
      {children}
    </div>
  )
}

const Info = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        variant: "styles.mono",
      }}
    >
      {children}
    </div>
  )
}

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
        intro {
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
        race {
          html
        }
        metadata {
          html
        }
        measurements {
          html
        }
        gallery {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
